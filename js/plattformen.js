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
    id: 'neue-station',
    name: 'Neue Station',
    beschreibung: 'taucht bald auf',
    status: 'bald',
  },
];
