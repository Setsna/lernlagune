import { plattformen } from './plattformen.js?v=4';

const liste = document.getElementById('stationen');

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

function liveStation(p) {
  const url = sichereUrl(p.url);
  if (!url) return null;

  const li = element('li', 'station');
  const a = element('a', 'fenster');
  a.href = url;
  a.rel = 'noopener noreferrer';
  if (p.akzent) a.style.setProperty('--akzent', p.akzent);
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
  return li;
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

function baueStationen() {
  if (!liste) return;
  const live = plattformen.filter((p) => p.status === 'live').map(liveStation).filter(Boolean);
  const bald = plattformen.filter((p) => p.status === 'bald').map(baldStation);

  /* Reihenfolge im Dokument: erste Hälfte, Platzhalter, zweite Hälfte.
     Im Querformat liegt der Platzhalter so in der Mitte des Bogens,
     im Hochformat schiebt CSS ihn in eine eigene Reihe darunter. */
  const mitte = Math.ceil(live.length / 2);
  const umbruch = element('li', 'stationen__umbruch');
  umbruch.setAttribute('role', 'presentation');
  umbruch.setAttribute('aria-hidden', 'true');
  const teile = bald.length ? [umbruch, ...bald] : [];
  liste.classList.toggle('stationen--viele', live.length > 2);
  /* Querformat: Reihen zu je drei. Ist die letzte Reihe voll, rutscht der
     Platzhalter in eine eigene Reihe darunter, statt sich daneben zu quetschen. */
  liste.classList.toggle('stationen--reihe-voll', live.length > 2 && live.length % 3 === 0);
  liste.replaceChildren(...live.slice(0, mitte), ...teile, ...live.slice(mitte));
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
bewegungNurSichtbar();
