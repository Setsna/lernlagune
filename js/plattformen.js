/*
 * Lernlagune – zentrale Liste der Stationen.
 *
 * Neue Plattform hinzufügen: einen Eintrag kopieren, Werte anpassen, fertig.
 * Die Seite baut Fenster und Reihenfolge selbst daraus.
 *
 *   id            kurzer Name ohne Leerzeichen (für die Technik)
 *   name          so heißt die Station auf der Seite
 *   beschreibung  ein kurzer Satz für Kinder (höchstens ca. 30 Zeichen)
 *   url           Adresse der Plattform (nur https://…)
 *   bild          Bild im Fenster: webp + png als Ersatz, alt = Bildbeschreibung,
 *                 hoehe = Pixelhöhe bei 720 px Breite,
 *                 abstandUnten = optional, wie weit das Bild über dem Fensterrand
 *                 sitzt (Standard 70; kleiner = Bild rutscht tiefer)
 *                 (Bild 720 px breit, Motiv unten, oben ruhiges Wasser)
 *   akzent        Farbe des Leuchtpunkts unter dem Namen (CSS-Farbe)
 *   status        "live" = antippbar, "bald" = kleines nebliges Fenster
 */
export const plattformen = [
  {
    id: 'ki-korallenriff',
    name: 'KI-Korallenriff',
    beschreibung: 'Entdecke, wie KI funktioniert',
    url: 'https://setsna.github.io/ki-korallenriff/',
    bild: {
      webp: 'assets/stationen/ki-korallenriff.webp',
      png: 'assets/stationen/ki-korallenriff.png',
      alt: 'Eine Meeresschildkröte schwimmt über ein buntes Korallenriff.',
      hoehe: 652,
      abstandUnten: 10,
    },
    akzent: '#7fd4e6',
    status: 'live',
  },
  {
    id: 'perlentaucher',
    name: 'Perlentaucher',
    beschreibung: 'Üben und Perlen sammeln',
    url: 'https://setsna.github.io/perlentaucher/',
    bild: {
      webp: 'assets/stationen/perlentaucher.webp',
      png: 'assets/stationen/perlentaucher.png',
      alt: 'Eine offene Muschel mit einer leuchtenden Perle auf dem Meeresboden.',
      hoehe: 500,
      abstandUnten: 48,
    },
    akzent: '#f3d79a',
    status: 'live',
  },
  {
    id: 'riff-akten',
    name: 'Riff-Akten',
    beschreibung: 'Kriminalfälle lösen',
    url: 'https://setsna.github.io/riff-akten/',
    bild: {
      webp: 'assets/stationen/riff-akten.webp',
      png: 'assets/stationen/riff-akten.png',
      alt: 'Ein Einsiedlerkrebs mit Detektivmütze untersucht mit einer Lupe eine Muschel am Meeresgrund.',
      hoehe: 720,
      abstandUnten: 115,
    },
    akzent: '#f2a27a',
    status: 'live',
  },
  {
    id: 'zahlenschwarm',
    name: 'Zahlenschwarm',
    beschreibung: 'Kopfrechnen mit Tupfi',
    url: 'https://setsna.github.io/zahlenschwarm/',
    bild: {
      webp: 'assets/stationen/zahlenschwarm.webp',
      png: 'assets/stationen/zahlenschwarm.png',
      alt: 'Ein gelber Fisch mit Tupfen schwimmt einem Schwarm kleiner Fische voraus.',
      hoehe: 720,
      abstandUnten: 115,
    },
    akzent: '#9fe3b0',
    status: 'live',
  },
  {
    id: 'flaschenpost',
    name: 'Flaschenpost',
    beschreibung: 'Wer hat das geschrieben?',
    url: 'https://setsna.github.io/flaschenpost/',
    bild: {
      webp: 'assets/stationen/flaschenpost.webp',
      png: 'assets/stationen/flaschenpost.png',
      alt: 'Eine Flaschenpost mit einem eingerollten Brief liegt am Meeresgrund, ein kleiner Fisch schaut sie an.',
      hoehe: 720,
      abstandUnten: 105,
    },
    akzent: '#c3b5f0',
    status: 'live',
  },
  {
    id: 'seesternwerkstatt',
    name: 'Seesternwerkstatt',
    beschreibung: 'Spiegeln, legen, Muster',
    url: 'https://setsna.github.io/seesternwerkstatt/',
    bild: {
      webp: 'assets/stationen/seesternwerkstatt.webp',
      png: 'assets/stationen/seesternwerkstatt.png',
      alt: 'Ein orangefarbener Seestern liegt im Sand, um ihn herum sind Muscheln und Steine zu einem gleichmäßigen Muster gelegt.',
      hoehe: 720,
      abstandUnten: 70,
    },
    akzent: '#f5a8c0',
    status: 'live',
  },
  {
    id: 'neue-station',
    name: 'Neue Station',
    beschreibung: 'taucht bald auf',
    status: 'bald',
  },
];
