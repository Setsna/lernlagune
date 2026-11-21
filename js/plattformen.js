/*
 * Lernlagune – zentrale Liste der Fächer und Stationen.
 *
 * Neue Plattform hinzufügen: einen Eintrag kopieren, Werte anpassen, fertig.
 * Die Seite baut Überschriften, Fenster und Reihenfolge selbst daraus.
 *
 * Fächer (faecher): Reihenfolge = Reihenfolge der Abschnitte auf der Seite.
 *   id     kurzer Name, auf den die Stationen mit „fach“ verweisen
 *   name   Überschrift des Abschnitts
 *   farbe  Farbe des Leuchtpunkts in der Überschrift und unter den
 *          Stationsnamen dieses Fachs (CSS-Farbe)
 *
 * Stationen (plattformen): Reihenfolge = Reihenfolge innerhalb des Fachs.
 *   id            kurzer Name ohne Leerzeichen (für die Technik)
 *   name          so heißt die Station auf der Seite
 *   beschreibung  ein kurzer Satz für Kinder (höchstens ca. 30 Zeichen)
 *   url           Adresse der Plattform (nur https://…)
 *   bild          Bild im Fenster: webp + png als Ersatz, alt = Bildbeschreibung,
 *                 hoehe = Pixelhöhe bei 720 px Breite,
 *                 abstandUnten = optional, wie weit das Bild über dem Fensterrand
 *                 sitzt (Standard 70; kleiner = Bild rutscht tiefer)
 *                 (Bild 720 px breit, Motiv unten, oben ruhiges Wasser)
 *   fach          id eines Fachs aus der Liste oben
 *   freigabe      optional: Name der Plattform im Lehrerbereich des Perlentauchers
 *                 (Verwaltung, Reiter „Plattformen“). Ist sie dort gesperrt, zeigt
 *                 das Fenster das Schild „Bald offen“ und ist nicht antippbar.
 *                 Ohne dieses Feld ist die Station immer offen.
 *   status        "live" = antippbar, "bald" = kleines nebliges Fenster
 */
export const faecher = [
  { id: 'mathe', name: 'Mathe', farbe: '#8fd0ff' },
  { id: 'deutsch', name: 'Deutsch', farbe: '#ff9d8a' },
  { id: 'medien', name: 'KI und Medien', farbe: '#f3d79a' },
];

export const plattformen = [
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
    fach: 'mathe',
    freigabe: 'zahlenschwarm',
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
    fach: 'mathe',
    freigabe: 'seesternwerkstatt',
    status: 'live',
  },
  {
    id: 'chancenbucht',
    name: 'Chancenbucht',
    beschreibung: 'Erst vermuten, dann zählen',
    url: 'https://setsna.github.io/chancenbucht/',
    bild: {
      webp: 'assets/stationen/chancenbucht.webp',
      png: 'assets/stationen/chancenbucht.png',
      alt: 'Ein kastenförmiger blauer Kofferfisch mit Wabenmuster schaut auf vier bunte Kugeln im Sand.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'mathe',
    freigabe: 'chancenbucht',
    status: 'live',
  },
  {
    id: 'kieselwaage',
    name: 'Kieselwaage',
    beschreibung: 'Erst vermuten, dann wiegen',
    url: 'https://setsna.github.io/kieselwaage/',
    bild: {
      webp: 'assets/stationen/kieselwaage.webp',
      png: 'assets/stationen/kieselwaage.png',
      alt: 'Ein brauner Seeotter treibt auf dem Rücken im Wasser und hält einen Kiesel in den Pfoten.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'mathe',
    freigabe: 'kieselwaage',
    status: 'live',
  },
  {
    id: 'leuchtturmuhr',
    name: 'Leuchtturmuhr',
    beschreibung: 'Wie spät? Wie lange?',
    url: 'https://setsna.github.io/leuchtturmuhr/',
    bild: {
      webp: 'assets/stationen/leuchtturmuhr.webp',
      png: 'assets/stationen/leuchtturmuhr.png',
      alt: 'Ein freundlicher blauer Laternenfisch mit leuchtender Laterne schwimmt an bunten Korallen vorbei.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'mathe',
    freigabe: 'leuchtturmuhr',
    status: 'live',
  },
  {
    id: 'abyss-of-numbers',
    name: 'Abyss of Numbers',
    beschreibung: 'Rechne dich in die Tiefe',
    url: 'https://setsna.github.io/abyss-of-numbers/',
    bild: {
      webp: 'assets/stationen/abyss-of-numbers.webp',
      png: 'assets/stationen/abyss-of-numbers.png',
      alt: 'Eine Taucherin im gelben Anzug mit Stirnlampe taucht in eine Unterwasserschlucht mit alten Säulen, vor ihr leuchten die Ziffern 3, 7 und 5.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'mathe',
    freigabe: 'abyss',
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
    fach: 'deutsch',
    status: 'live',
  },
  {
    id: 'walgesang',
    name: 'Walgesang',
    beschreibung: 'Wer spricht? Was wird gesagt?',
    url: 'https://setsna.github.io/walgesang/',
    bild: {
      webp: 'assets/stationen/walgesang.webp',
      png: 'assets/stationen/walgesang.png',
      alt: 'Ein Buckelwal mit langen weißen Brustflossen schwimmt ruhig durch das sonnige blaue Meer.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'deutsch',
    freigabe: 'walgesang',
    status: 'live',
  },
  {
    id: 'zeitenstrom',
    name: 'Zeitenstrom',
    beschreibung: 'Reise durch die Zeitformen',
    url: 'https://setsna.github.io/zeitenstrom/',
    bild: {
      webp: 'assets/stationen/zeitenstrom.webp',
      png: 'assets/stationen/zeitenstrom.png',
      alt: 'Ein Nautilus mit weiß-rostbraun gestreifter Schale schwebt im hellen blauen Wasser.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'deutsch',
    freigabe: 'zeitenstrom',
    status: 'live',
  },
  {
    id: 'satzwerft',
    name: 'Satzwerft',
    beschreibung: 'Wer tut was?',
    url: 'https://setsna.github.io/satzwerft/',
    bild: {
      webp: 'assets/stationen/satzwerft.webp',
      png: 'assets/stationen/satzwerft.png',
      alt: 'Ein rosafarbener Flussdelfin schwimmt durch grünes Wasser zwischen Wurzeln und Wasserpflanzen.',
      hoehe: 720,
      abstandUnten: 10,
    },
    fach: 'deutsch',
    freigabe: 'satzwerft',
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
    fach: 'deutsch',
    freigabe: 'riffakten',
    status: 'live',
  },
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
    fach: 'medien',
    freigabe: 'korallenriff',
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
    fach: 'medien',
    freigabe: 'flaschenpost',
    status: 'live',
  },
  {
    id: 'neue-station',
    name: 'Neue Station',
    beschreibung: 'taucht bald auf',
    status: 'bald',
  },
];
