# Lernlagune

Startseite für lernlagune.de. Von hier aus kommen die Kinder zu den Lernplattformen. Die Plattformen selbst laufen getrennt in ihren eigenen Repositories, diese Seite verlinkt sie nur.

- Reines HTML, CSS und JavaScript, ohne Framework, Build-Schritt oder Abhängigkeiten.
- Keine Cookies, kein Tracking, keine fremden Skripte oder Schriften. Alles liegt im Projekt.
- Nicht in Suchmaschinen: `<meta name="robots" content="noindex, nofollow">` in `index.html`, wie bei den beiden Plattformen. Bewusst keine `robots.txt` mit Sperre, sonst könnten Suchmaschinen das noindex gar nicht lesen.
- Gestaltung und Designsystem: siehe `DESIGN.md`.

## Lokal ansehen

```
py -m http.server 4173 --bind 127.0.0.1
```

Dann im Browser `http://127.0.0.1:4173/` öffnen. Die Datei `index.html` direkt per Doppelklick öffnen funktioniert nicht, weil der Browser ES-Module von `file://` blockiert.

## Neue Station hinzufügen

Geändert wird nur `js/plattformen.js`. Die Seite baut die Fenster daraus selbst.

1. **Bild vorbereiten:** 720 px breit, das Motiv unten, oben ruhiges Wasser. Speichern als `assets/stationen/<id>.webp` und zusätzlich als `<id>.png`.
2. **Eintrag anlegen:** In `js/plattformen.js` einen bestehenden Eintrag kopieren und `id`, `name`, `beschreibung`, `url`, die Bildpfade, `alt` und `hoehe` (Pixelhöhe des Bildes) anpassen, dazu `akzent`: die Farbe des Leuchtpunkts unter dem Namen.
3. **Status setzen:** `status: 'live'` macht die Station antippbar. `status: 'bald'` zeigt sie als kleines Nebel-Fenster mit Schloss.
4. **Bild nachjustieren, falls nötig:** Wenn das Bild mit dem Text oder dem Pfeilknopf kollidiert, `abstandUnten` anpassen. Standard ist 70, kleinere Werte schieben das Bild tiefer.
5. **Prüfen:** `py tests/pruefen.py` laufen lassen und die Seite einmal hoch und einmal quer ansehen.

Im Querformat stehen bis zu drei Stationen nebeneinander (ab drei werden die Fenster etwas kleiner). Weitere Stationen und der Platzhalter füllen die Reihe darunter.

## Test

```
py tests/pruefen.py
```

Das Skript prüft:
- ob alle eingebundenen Dateien vorhanden sind
- dass keine fremden Skripte eingebunden sind
- ob die Sicherheitsregeln (CSP) gesetzt sind
- ob die Zieladressen der Plattformen erreichbar sind (HTTP 200)
- ob der erste Aufruf unter 600 KB bleibt

## Ordner

| Pfad | Inhalt |
|---|---|
| `index.html` | Seite, Sicherheitsregeln (CSP), Ersatzlinks ohne JavaScript |
| `css/lagune.css` | Gestaltung. Der Maßstab `--s` rechnet die Werte aus dem Entwurf (1088 px breit) auf die echte Breite um. |
| `js/plattformen.js` | **Liste der Stationen** (hier wird gepflegt) |
| `js/lagune.js` | baut die Fenster und misst die echte Bildschirmbreite. Pausiert die Bewegung, wenn sie nicht zu sehen ist. |
| `assets/` | Hintergrund, Stationsbilder, Schriften (OFL-Lizenzen liegen bei) |
| `tests/pruefen.py` | Schnelltest |
| `.impeccable/`, `Dateien/` | nur lokal: Entwürfe, Messungen, Originale. Per `.gitignore` aus dem Repo ausgeschlossen. |

## Wichtige Entscheidungen

- **Fenster bündig, nicht gekippt.** Das weicht bewusst von Entwurf C ab, ebenso die größere Schrift.
- **Glas ohne Lichtbrechung.** Nur eine leichte Unschärfe (6 px), damit es auch auf alten iPads flüssig läuft.
- **Sparsame Bewegung.** Nur das Licht und ein paar Blasen am Rand bewegen sich. Bei „Bewegung reduzieren“ steht alles still.
- **Maßstab ohne Scrollleiste.** JavaScript setzt `--breite` auf die echte Breite, damit eine Windows-Scrollleiste kein Fenster in die nächste Zeile schiebt.
- **Alle Bilder aus Canva**, eigens für die Lernlagune erstellt.

## Veröffentlichen

Die Seite liegt im Repo `Setsna/lernlagune` und wird über GitHub Pages ausgeliefert. Die Datei `CNAME` legt die Domain `lernlagune.de` fest. Ein Push auf `main` veröffentlicht die Änderungen automatisch, nach etwa 1–2 Minuten sind sie online.

```
git add -A
git commit -m "Neue Station: …"
git push
```

Die `.gitignore` lässt nur die Webseite ins Repo. Alles andere bleibt lokal.

## Hosting und Domain (Stand 09.11.2026)

- **Repo:** https://github.com/Setsna/lernlagune (öffentlich). Pages läuft aus dem Branch `main`, Ordner `/`.
- **Domain:** `lernlagune.de` liegt bei netcup (CCP → Domains → lernlagune.de → CloudDNS).
- **DNS-Einträge** (TTL 3600):

| Name | Typ | Ziel |
|---|---|---|
| @ | A | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| @ | AAAA | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| www | CNAME | setsna.github.io. |

- `www.lernlagune.de` leitet automatisch auf `lernlagune.de` um.
- Das HTTPS-Zertifikat stellt GitHub automatisch aus und verlängert es selbst. „Enforce HTTPS“ ist in den Pages-Einstellungen eingeschaltet.
- Andere DNS-Einträge (z. B. für E-Mail) gibt es nicht. Wer später welche ergänzt, lässt die Einträge oben unverändert.
- Die Plattformen KI-Korallenriff und Perlentaucher laufen unabhängig in eigenen Repos unter `setsna.github.io`. Diese Seite verlinkt sie nur.
