import { faecher, plattformen } from './plattformen.js?v=10';

const ort = document.getElementById('stationen');

/* Freigabe der Stationen: Die Lehrkraft schaltet sie im Lehrerbereich des
   Perlentauchers an und aus. Die Liste liegt in einem öffentlich lesbaren
   Dokument ohne Kinderdaten. Das ist die einzige Abfrage dieser Seite nach
   außen (siehe Content-Security-Policy in index.html und datenschutz.html). */
const FREIGABE_ADRESSE =
  'https://firestore.googleapis.com/v1/projects/lernplattform-44aa1/databases/(default)/documents/oeffentlich/plattformen';
const FREIGABE_WARTEZEIT = 4000; // Millisekunden, danach bleibt alles offen

/* Fenster je Freigabe-Name, damit die Antwort die richtige Station findet */
const fensterJeFreigabe = new Map();

/* Nur sichere Ziel-Adressen zulassen. */
function sichereUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' ? u.href : null;
  } catch {
    return null;
  }
}

function element(tag, klasse, text) {
  const el = document.createElement(tag);
  if (klasse) el.className = klasse;
  if (text) el.textContent = text;
  return el;
}

function symbol(id, klasse) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', klasse);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const use = document.createElementNS(ns, 'use');
  use.setAttribute('href', '#' + id);
  svg.append(use);
  return svg;
}

function liveStation(p, fach) {
  const url = sichereUrl(p.url);
  if (!url) return null;

  const li = element('li', 'station');
  const a = element('a', 'fenster');
  a.href = url;
  a.rel = 'noopener noreferrer';
  if (fach?.farbe) a.style.setProperty('--akzent', fach.farbe);
  if (Number.isFinite(p.bild?.abstandUnten)) a.style.setProperty('--bild-unten', String(p.bild.abstandUnten));

  const titel = element('span', 'fenster__name', p.name);
  /* lange Namen (z. B. „Seesternwerkstatt“) etwas kleiner, damit Luft zur Glaskante bleibt */
  if (p.name.length > 15) titel.classList.add('fenster__name--lang');
  const linie = element('span', 'fenster__linie');
  linie.setAttribute('aria-hidden', 'true');
  const text = element('span', 'fenster__text', p.beschreibung);

  const bild = document.createElement('picture');
  bild.className = 'fenster__bild';
  if (p.bild?.webp) {
    const src = document.createElement('source');
    src.srcset = p.bild.webp;
    src.type = 'image/webp';
    bild.append(src);
  }
  const img = document.createElement('img');
  img.src = p.bild?.png || p.bild?.webp || '';
  img.alt = p.bild?.alt || '';
  img.width = 720;
  img.height = p.bild?.hoehe || 500;
  bild.append(img);

  const knopf = element('span', 'fenster__knopf');
  knopf.append(symbol('pfeil', 'fenster__pfeil'));

  a.append(titel, linie, text, bild, knopf);
  li.append(a);
  if (p.freigabe) fensterJeFreigabe.set(p.freigabe, a);
  return li;
}

/* Gesperrte Station: gleiches Fenster, aber kein Link mehr. Statt des
   Pfeilknopfs steht ein kleines Schild „Bald offen“. */
function sperreStation(a) {
  const box = element('div', 'fenster fenster--zu');
  box.style.cssText = a.style.cssText;
  a.querySelector('.fenster__knopf')?.remove();
  const schild = element('span', 'fenster__schild');
  schild.append(symbol('schloss-zu', 'fenster__schild-schloss'), element('span', '', 'Bald offen'));
  box.append(...a.childNodes, schild);
  a.replaceWith(box);
}

/* Fragt einmal beim Laden, welche Stationen gesperrt sind. Gesperrt ist eine
   Station nur, wenn die Antwort ausdrücklich „false“ sagt. Bei jedem Fehler
   (kein Netz, Zeit abgelaufen, Dokument fehlt) bleibt alles offen, damit der
   Unterricht nicht steht. Es wird nichts gespeichert und nichts mitgeschickt. */
async function freigabePruefen() {
  if (!fensterJeFreigabe.size || !('AbortController' in window)) return;
  const abbruch = new AbortController();
  const uhr = setTimeout(() => abbruch.abort(), FREIGABE_WARTEZEIT);
  try {
    const antwort = await fetch(FREIGABE_ADRESSE, {
      credentials: 'omit',
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
      signal: abbruch.signal,
    });
    if (!antwort.ok) return;
    const felder = (await antwort.json())?.fields;
    if (!felder || typeof felder !== 'object') return;
    for (const [name, a] of fensterJeFreigabe) {
      if (felder[name]?.booleanValue === false) sperreStation(a);
    }
  } catch {
    /* alles bleibt offen */
  } finally {
    clearTimeout(uhr);
  }
}

function baldStation(p) {
  const li = element('li', 'station station--bald');
  const box = element('div', 'fenster fenster--bald');
  box.append(
    symbol('schloss', 'fenster__schloss'),
    element('span', 'fenster__text', `${p.name} –`),
    element('span', 'fenster__text', p.beschreibung),
  );
  li.append(box);
  return li;
}

function stationsListe(fenster, klasse) {
  const ul = element('ul', klasse);
  ul.append(...fenster);
  return ul;
}

/* Die Stationen stehen nach Fächern in Abschnitten: Überschrift, darunter die
   Fenster. Fächer und Reihenfolge kommen aus js/plattformen.js. */
function baueStationen() {
  if (!ort) return;
  const live = plattformen.filter((p) => p.status === 'live');
  const teile = [];

  for (const fach of faecher) {
    const fenster = live.filter((p) => p.fach === fach.id).map((p) => liveStation(p, fach)).filter(Boolean);
    if (!fenster.length) continue;

    const abschnitt = element('section', 'fach');
    const titel = element('h2', 'fach__titel');
    titel.id = 'fach-' + fach.id;
    const punkt = element('span', 'fach__punkt');
    punkt.setAttribute('aria-hidden', 'true');
    if (fach.farbe) punkt.style.setProperty('--akzent', fach.farbe);
    titel.append(punkt, element('span', '', fach.name));

    const ul = stationsListe(fenster, 'stationen');
    ul.setAttribute('aria-labelledby', titel.id);
    abschnitt.append(titel, ul);
    teile.push(abschnitt);
  }

  /* Sicherheitsnetz: Eine Station ohne (bekanntes) Fach verschwindet nicht,
     sie steht ohne Überschrift hinter den Fächern. */
  const bekannt = new Set(faecher.map((f) => f.id));
  const ohneFach = live.filter((p) => !bekannt.has(p.fach)).map((p) => liveStation(p)).filter(Boolean);
  if (ohneFach.length) {
    const ul = stationsListe(ohneFach, 'stationen');
    ul.setAttribute('aria-label', 'Weitere Stationen');
    teile.push(ul);
  }

  /* Platzhalter in eigener Reihe ganz unten */
  const bald = plattformen.filter((p) => p.status === 'bald').map(baldStation);
  if (bald.length) {
    const ul = stationsListe(bald, 'stationen stationen--bald');
    ul.setAttribute('aria-label', 'Bald');
    teile.push(ul);
  }

  ort.replaceChildren(...teile);
}

/* Endlos-Bewegung anhalten, sobald sie nicht zu sehen ist (spart Akku). */
function bewegungNurSichtbar() {
  const lagune = document.querySelector('.lagune');
  const ziele = document.querySelectorAll('.licht, .blasen');
  if (!lagune || !ziele.length || !('IntersectionObserver' in window)) return;
  const beobachter = new IntersectionObserver(([eintrag]) => {
    lagune.classList.toggle('lagune--ruht', !eintrag.isIntersecting);
  });
  beobachter.observe(document.querySelector('.blasen') || ziele[0]);
}

/* Maßstab an die echte Breite koppeln: 100vw zählt unter Windows die
   Scrollleiste mit, dann würden die Fenster in eine neue Zeile rutschen. */
function breiteMessen() {
  const wurzel = document.documentElement;
  const setzen = () => wurzel.style.setProperty('--breite', wurzel.clientWidth + 'px');
  setzen();
  window.addEventListener('resize', setzen, { passive: true });
}

breiteMessen();
baueStationen();
freigabePruefen();
bewegungNurSichtbar();
