---
name: Lernlagune
description: Ein Blick in eine einzige Lagune, die Stationen schweben als Glasfenster im Licht.
colors:
  tiefe: "#0e2f45"
  navy: "#0b3155"
  navy-weich: "#133c5a"
  welle: "#2d6f98"
  weiss: "#ffffff"
  lagune-ersatz: "#cfe7ee"
  glas-kante: "rgba(255, 255, 255, 0.5)"
  glas-glanz: "rgba(255, 255, 255, 0.62)"
  glas-oben: "rgba(214, 242, 252, 0.13)"
  glas-unten: "rgba(40, 110, 150, 0.06)"
  glas-schatten: "rgba(3, 20, 35, 0.38)"
  nebel: "rgba(10, 52, 84, 0.7)"
typography:
  display:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "calc(89 * var(--s))"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "calc(50 * var(--s))"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.005em"
  wortmarke:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "calc(31 * var(--s))"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Andika, Trebuchet MS, system-ui, sans-serif"
    fontSize: "calc(27 * var(--s))"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-fenster:
    fontFamily: "Andika, Trebuchet MS, system-ui, sans-serif"
    fontSize: "calc(25 * var(--s))"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Andika, Trebuchet MS, system-ui, sans-serif"
    fontSize: "max(15px, calc(20 * var(--s)))"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  fenster: "calc(108 * var(--s))"
  fenster-bald: "calc(80 * var(--s))"
  rund: "50%"
spacing:
  fenster-innen-oben: "calc(70 * var(--s))"
  fenster-innen-seite: "calc(20 * var(--s))"
  bogen-spalte: "calc(90 * var(--s))"
  bogen-reihe: "calc(60 * var(--s))"
  frage-hinweis: "calc(26 * var(--s))"
components:
  fenster-live:
    backgroundColor: "{colors.glas-oben}"
    textColor: "{colors.weiss}"
    typography: "{typography.title}"
    rounded: "{rounded.fenster}"
    padding: "calc(70 * var(--s)) calc(20 * var(--s)) 0"
    width: "calc(445 * var(--s))"
  fenster-bald:
    backgroundColor: "{colors.nebel}"
    textColor: "{colors.weiss}"
    typography: "{typography.label}"
    rounded: "{rounded.fenster-bald}"
    width: "calc(292 * var(--s))"
  knopf-pfeil:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.navy}"
    rounded: "{rounded.rund}"
    size: "max(48px, calc(84 * var(--s)))"
---

# Design System: Lernlagune

## Overview

**Creative North Star: "Bullaugen in der Lagune"**

Die Seite ist ein einziger Blick in eine gemalte Lagune: Von der Wasseroberfläche fällt ein türkiser Lichtschacht, darin stehen Wortmarke, Frage und Hinweis in Navy-Serifenschrift. Die Stationen schweben als große Glasfenster im Bogen um den Schacht; jedes Fenster ist ein Bullauge in eine andere Lernwelt. Das Bild im Fenster trägt die Wahl, der Name bestätigt sie.

Die Dichte ist niedrig: wenige Elemente, viel Wasser, zwei Schriften, im Kern nur Navy, Weiß und das Wasser selbst. Bewegung ist Atmosphäre, nie Aufforderung: ein langsam atmendes Licht und wenige Blasen an den Bildrändern. Gegenüber dem freigegebenen Entwurf C weicht der Bau bewusst ab (vom Nutzer so freigegeben): Die Fenster sind nicht gekippt, die Schrift ist größer, und die beiden Live-Fenster stehen bündig auf gleicher Höhe.

**Key Characteristics:**
- Gemalter Lagunen-Hintergrund als Grund, keine Flächenfarbe als Gestaltungsmittel.
- Ein Lichtschacht in der Mitte, Text nur dort, Stationen darum herum.
- Glasfenster mit sehr großem Radius, heller polierter Kante und leichter Tönung.
- Runder weißer Knopf mit Navy-Pfeil als einziges Bedienzeichen.
- Alle Maße hängen an einem Maßstab (`--s`), nicht an festen Pixeln.

## Colors

Eine fast einfarbige Unterwasserpalette: Navy im Licht, Weiß im Glas, alles andere liefert das gemalte Wasser.

### Primary
- **Lichtschacht-Navy** (navy): Wortmarke, Frage und der Pfeil im Knopf. Steht nur auf hellem Grund im Lichtschacht oder auf dem weißen Knopf.

### Secondary
- **Weiches Navy** (navy-weich): nur für die Unterzeile (Hinweis), damit sie eine Stufe hinter der Frage bleibt.
- **Wellenblau** (welle): ausschließlich die kleine Wellenlinie unter der Wortmarke.

### Neutral
- **Tiefes Wasser** (tiefe): Seitengrund unter dem Bild, `theme-color`, Scrollleisten-Spur.
- **Glasweiß** (weiss): Fenstertitel, Fenstertext, Knopf, Fokusring, Blasenkanten.
- **Ersatz-Lagune** (lagune-ersatz, mit Verlauf `#e6f2ef → #a9d4e1 → #3f86a8 → #12425f`): steht, solange das Lagunenbild noch lädt; oben hell, damit Navy sofort lesbar ist.
- **Glasfamilie** (glas-kante, glas-glanz, glas-oben, glas-unten, glas-schatten): nur im Glasfenster, siehe Elevation.
- **Nebel** (nebel): dunkel getöntes Glas des Platzhalters.

### Named Rules
**The Keine-weiteren-Farben Rule.** Neue Flächen bekommen Navy, Weiß oder Glas. Farbe kommt aus den Bildern der Stationen, nicht aus dem Interface.

**The Navy-nur-im-Licht Rule.** Navy-Schrift steht nie direkt auf mittel- oder dunkelblauem Wasser. Wo der Grund dunkler werden kann (Querformat, Whiteboard), sitzt hinter der Frage ein heller radialer Lichthof (`rgba(228, 243, 245, 0.88)` nach transparent).

## Typography

**Display Font:** Libre Caslon Text (mit Georgia, Times New Roman, serif)
**Body Font:** Andika (mit Trebuchet MS, system-ui, sans-serif)

**Character:** Eine ruhige Buchserife für Namen und die Frage, dazu Andika, eine Schrift für Leseanfänger mit eindeutigen Buchstabenformen. Beide liegen selbst gehostet als woff2 in `assets/fonts/` (Libre Caslon Text 400–700, Andika 400 und 700, OFL-Lizenzen daneben), `font-display: swap`, die beiden Hauptschnitte werden vorgeladen. Keine Schriften von Drittanbietern.

### Hierarchy
Alle Größen sind Entwurfs-Pixel mal `--s` (bei 1088 px Breite = 1:1).
- **Display** (500, 89, 1.02, -0.02em): nur die Frage „Wohin tauchst du heute?“, im Hochformat zweizeilig, im Querformat einzeilig (80). Handy hoch 84.
- **Title** (400, 50, 1.05): Stationsname im Fenster, weiß mit leichtem Textschatten. Handy hoch 58.
- **Wortmarke** (400, 31, 1.2, -0.02em): „Lernlagune“ oben mittig, darunter die Wellenlinie.
- **Body** (Andika 400, 27, 1.3): Hinweis unter der Frage. Handy hoch 30.
- **Body im Fenster** (Andika 400, 25, 1.25): ein kurzer Satz pro Station, höchstens ca. 30 Zeichen. Handy hoch 30.
- **Label** (Andika 400, 20, mindestens 15 px): Text im Platzhalter.

### Named Rules
**The Serife-für-Namen Rule.** Libre Caslon trägt nur Namen und die eine Frage; alles, was ein Kind lesen muss, steht in Andika.

**The Untergrenze Rule.** Skalierte Schrift, die klein werden kann, bekommt eine feste Untergrenze in px (Platzhaltertext 15 px).

## Layout

**Das Maßstabssystem.** Der Entwurf ist 1088 px breit (iPad hoch). Jedes Maß wird als `calc(<Entwurfs-px> * var(--s))` geschrieben. `--breite` ist die echte Fensterbreite ohne Scrollleiste: CSS startet mit `100vw`, `js/lagune.js` setzt beim Laden und bei `resize` `clientWidth` in px, weil `100vw` unter Windows die Scrollleiste mitzählt und das zweite Fenster sonst umbricht. Zusätzlich hat die Stationsliste seitlich 24 Entwurfs-px Reserve.

| Lage | Bedingung | `--s` |
|---|---|---|
| Standard (iPad hoch, Desktop hoch) | sonst | `min(--breite, 1088px) / 1088` |
| Querformat (iPad quer, Laptop, Whiteboard) | `landscape` und `min-width: 820px` | `min(100svh / 1010, --breite / 1360)` |
| Handy hoch | `max-width: 640px` und `portrait` | `--breite / 600` |
| Handy quer | `landscape`, `max-height: 520px`, `max-width: 1000px` | `min(--breite / 1200, 100svh / 640)` |

**Aufbau.** Eine zentrierte Spalte: Wortmarke (Abstand oben 136, quer 64, Handy hoch 96, Handy quer 40), Frage, Hinweis, dann die Stationsliste als umbrechende Flex-Reihe (Spaltenabstand 90, quer 60; Reihenabstand 60). Die Live-Fenster stehen bündig nebeneinander. Im Hochformat rückt der Platzhalter über ein Umbruch-Element in eine eigene Reihe darunter (leicht nach oben gezogen, -46); im Querformat und Handy quer sitzt er tief in der Mitte zwischen den beiden Fenstern (240 bzw. 200 tiefer). Handy hoch: eine Spalte, Fenster volle Breite bis 440 px. Ab drei Live-Stationen schaltet `stationen--viele` den Umbruch wieder ein: weitere Fenster in tieferen Reihen, Platzhalter ganz unten.

**The Ein-Maßstab Rule.** Kein festes Pixelmaß im Layout außer Untergrenzen (Touchziel 48 px, Schrift 15 px, Handy-Fensterbreite 440 px). Neue Maße werden in Entwurfs-px gedacht und mit `--s` multipliziert.

**The Querformat-ohne-Scrollen Rule.** Im Querformat richtet sich der Maßstab nach der Höhe, damit Frage und alle Fenster ohne Scrollen sichtbar sind.

## Elevation & Depth

Tiefe entsteht aus Glas über gemaltem Wasser, nicht aus gestapelten Flächen. Das Fenster ist leicht getönt (`glas-oben` nach `glas-unten`, unten auslaufend in `rgba(8, 42, 70, 0.42)`, wo die Stationsbilder enden) und weichgezeichnet mit `backdrop-filter: blur(6px) saturate(140%)` (mit `-webkit-`-Präfix für Safari). Die Kante macht das Glas: 2 px Rand in `glas-kante` plus innere Lichtschatten. Bewusst ohne SVG-Refraktion: Ältere Schul-iPads sollen flüssig bleiben, und Safari zeigt ohnehin nur den Blur. Der Lichtschacht endet über den Fenstern (Höhe 470, quer 330), damit die Unschärfe nicht in jedem Bild neu gerechnet werden muss.

### Shadow Vocabulary
- **Glaskante** (`inset 0 2px 0 glas-glanz, inset 0 0 0 2px rgba(255,255,255,0.16), inset 0 0 calc(22 * var(--s)) rgba(200,240,255,0.38)`): polierte Oberkante und innerer Schimmer jedes Live-Fensters.
- **Schweben** (`0 26px 50px -10px glas-schatten`): weicher Schatten unter dem Fenster; mit Hover tiefer (`0 34px 60px -12px`).
- **Knopfleuchten** (`0 0 calc(22 * var(--s)) rgba(255,255,255,0.5), 0 10px 22px -6px rgba(3,20,35,0.5)`): Lichthof und Bodenschatten des Pfeil-Knopfs.
- **Lesetiefe** (Verlauf `rgba(6,38,66,0.42)` nach transparent über die oberen 52 % des Fensters, dazu Textschatten `0 1px 3px rgba(4,30,50,0.45–0.55)`): hält Weiß auch unter dem hellen Lichtschacht lesbar.

### Named Rules
**The Leichtes-Glas Rule.** Blur bleibt bei 6 px (Platzhalter 5 px), keine SVG-Displacement-Filter, keine gestapelten Glasschichten. Wenn ein Effekt auf alten iPads ruckeln könnte, gewinnt die einfachere Variante.

## Shapes

Weiche, sehr große Rundungen wie Bullaugen: Live-Fenster `rounded.fenster` (Handy hoch 96), Seitenverhältnis 445:565 (Handy hoch 528:610); Platzhalter `rounded.fenster-bald`, 292:305. Knopf und Blasen sind Kreise. Kanten sind Licht (2 px halbweiß), keine harten Linien. Die Trennlinie im Fenster ist ein seitlich auslaufender 1-px-Verlauf mit einem 6er-Punkt in der Mitte. Die Stationsbilder laufen über eine Maske oben und unten weich ins Glas aus. Keine Kippung: Fenster stehen gerade.

## Components

### Glasfenster (Live-Station)
Ruhig, groß, als Ganzes antippbar.
- **Aufbau:** Name (Title), Trennlinie, ein Satz (Body im Fenster), Bild unten (Abstand zum Rand über `--bild-unten`, Standard 70), Pfeil-Knopf unten mittig (36 vom Rand).
- **Fläche:** Glasrezept aus Elevation, `rounded.fenster`, Innenabstand 70 oben, 20 seitlich.
- **Tippen:** `:active` skaliert das Fenster auf 0.975, den Knopf auf 0.92, der Pfeil rückt 12 % nach rechts. Rückmeldung hängt nie an Hover.
- **Hover (nur `hover: hover`):** hebt um 6 und vertieft den Schatten.
- **Fokus:** 3 px weißer Ring, 6 px Abstand.
- **Link:** nur `https://`, `rel="noopener noreferrer"`, gleicher Tab.

### Pfeil-Knopf
Weißer Kreis, `max(48px, 84 * --s)`, Navy-Pfeil aus Inline-SVG-Symbol (Strich 2, rund). Er ist Zeichen, kein eigenes Ziel: das ganze Fenster ist der Link.

### Platzhalter („Neue Station – taucht bald auf“)
Kleineres, nebliges Fenster mit dunkler Tönung (`nebel`, Blur 5 px), Schloss-Symbol (Inline-SVG, Strich 1.6) und zweizeiligem Label. Nicht antippbar, kein Pfeil, keine Lesetiefe.

### Wortmarke mit Welle
„Lernlagune“ in Libre Caslon, darunter eine handgezeichnete Doppelwelle als Inline-SVG (Strich 1.6, `welle`), höchstens 62 px breit.

### Bewegung
- **Atmendes Licht:** Lichtschacht (760 breit) pendelt in 11 s zwischen Deckkraft 0.55 und 1 und 8 % Breitenzug, `ease-in-out`, alternierend.
- **Randblasen:** sechs Blasen (6–14), je drei am linken und rechten Rand (0.8–3.4 %), steigen in 15–24 s über die Höhe des ersten Bildschirms, immer hinter Text und Fenstern.
- **Übergänge:** 220 ms (Pfeil 160 ms) mit `cubic-bezier(0.16, 1, 0.3, 1)`; animiert werden nur `opacity` und `transform`.
- **Außer Sicht:** Ein IntersectionObserver setzt `lagune--ruht` und pausiert Licht und Blasen, sobald sie aus dem Bild sind.
- **Reduzierte Bewegung:** Übergänge und Hover-Heben entfallen, das Licht steht still bei 0.8, die Blasen verschwinden.

### Neue Station hinzufügen
Nur `js/plattformen.js` ändern, nie die Seitenkomponenten:
1. Einen Eintrag kopieren, `id`, `name`, `beschreibung` (höchstens ca. 30 Zeichen, an Kinder, duzend) und `url` (nur `https://`) setzen.
2. Bild 720 px breit nach `assets/stationen/` legen, als webp und png, Motiv unten, oben ruhiges Wasser; `hoehe` = Pixelhöhe, `alt` = Bildbeschreibung, optional `abstandUnten` (Standard 70).
3. `status: 'live'` für ein antippbares Fenster, `'bald'` für den Platzhalter.
4. Die Seite verteilt die Fenster selbst (erste Hälfte, Platzhalter, zweite Hälfte); ab drei Live-Stationen entsteht ein zweiter, tieferer Bogen. Ab 7–8 Stationen braucht es eine neue Lösung.

`akzent` färbt den leuchtenden Punkt auf der Trennlinie unter dem Stationsnamen (`.fenster__linie::after`, mit weichem Schein). Ohne Akzent bleibt der Punkt weiß.

## Do's and Don'ts

### Do:
- **Do** jedes Maß als Entwurfs-px mal `--s` schreiben und Untergrenzen nur für Touchziele (48 px) und kleine Schrift (15 px) in px setzen.
- **Do** das Glasrezept unverändert übernehmen: Tönung, 2-px-Lichtkante, innere Lichtschatten, `blur(6px) saturate(140%)` mit `-webkit-`-Präfix.
- **Do** das ganze Fenster zum Link machen und Rückmeldung über `:active` geben.
- **Do** Navy-Text nur im Lichtschacht oder mit hellem Lichthof dahinter setzen.
- **Do** neue Endlosbewegung pausierbar machen (`lagune--ruht`) und unter `prefers-reduced-motion` abschalten.
- **Do** Schriften, Bilder und Symbole selbst hosten; die CSP erlaubt nur `'self'`.

### Don't:
- **Don't** SVG-Refraktion oder Displacement-Filter als Grundlage einsetzen; das iPad muss mit Blur allein gut aussehen.
- **Don't** Fenster kippen oder versetzt staffeln; die Live-Fenster stehen bündig auf gleicher Höhe.
- **Don't** weitere Interface-Farben einführen; Farbe kommt aus den Stationsbildern.
- **Don't** Blasen über Text oder Fenster legen oder in die Mitte holen; sie bleiben an den Rändern.
- **Don't** Funktionen an Hover hängen.
- **Don't** Bewegung außer `opacity` und `transform` animieren.
