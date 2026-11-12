"""Schnelltest der Lernlagune (ohne Zusatzpakete).

Aufruf im Projektordner:  py tests/pruefen.py
Prüft: interne Dateien vorhanden, keine fremden Skripte/Stile,
CSP gesetzt, Ziel-URLs der Plattformen erreichbar, Ladegröße.
"""
import re
import sys
import urllib.request
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
fehler = []


def ok(text):
    print('  ok  ', text)


def fehlt(text):
    print('  FEHLER', text)
    fehler.append(text)


html = (WURZEL / 'index.html').read_text(encoding='utf-8')
css = (WURZEL / 'css' / 'lagune.css').read_text(encoding='utf-8')
konfig = (WURZEL / 'js' / 'plattformen.js').read_text(encoding='utf-8')

print('1. Interne Dateien')
pfade = set(re.findall(r'(?:src|href|srcset)="([^"#:?]+)(?:\?[^"]*)?"', html))
pfade |= {p for p in re.findall(r"url\(['\"]?([^'\")]+)['\"]?\)", css) if not p.startswith('data:')}
pfade |= set(re.findall(r"'(assets/[^']+)'", konfig))
for p in sorted(pfade):
    datei = (WURZEL / 'css' / p) if p.startswith('../') else (WURZEL / p)
    (ok if datei.resolve().is_file() else fehlt)(p)

print('1b. Versionsnummer ?v gleich in index.html und lagune.js')
js = (WURZEL / 'js' / 'lagune.js').read_text(encoding='utf-8')
nummern = set(re.findall(r'\?v=(\d+)', html)) | set(re.findall(r'\?v=(\d+)', js))
(ok if len(nummern) == 1 else fehlt)('?v=' + ', '.join(sorted(nummern)))

print('2. Keine fremden Skripte oder Stile')
fremd = re.findall(r'<(?:script|link)[^>]+(?:src|href)="(https?:[^"]+)"', html)
(fehlt if fremd else ok)('fremde Quellen: ' + (', '.join(fremd) or 'keine'))
(ok if 'Content-Security-Policy' in html else fehlt)('Content-Security-Policy gesetzt')
(ok if 'no-referrer' in html else fehlt)('Referrer wird nicht weitergegeben')
(ok if re.search(r'<meta name="robots" content="noindex, nofollow">', html) else fehlt)('Suchmaschinen ausgesperrt (noindex, nofollow)')
js = (WURZEL / 'js' / 'lagune.js').read_text(encoding='utf-8')
(ok if "noopener noreferrer" in js else fehlt)('externe Links mit noopener noreferrer')
for wort in ('localStorage', 'document.cookie', 'fetch(', 'XMLHttpRequest'):
    (fehlt if wort in js + konfig else ok)(f'kein {wort}')

print('3. Ziel-URLs der Plattformen')
for url in re.findall(r"url:\s*'([^']+)'", konfig):
    try:
        anfrage = urllib.request.Request(url, headers={'User-Agent': 'Lernlagune-Linktest'})
        with urllib.request.urlopen(anfrage, timeout=15) as antwort:
            (ok if antwort.status == 200 else fehlt)(f'{url} -> {antwort.status}')
    except Exception as e:  # noqa: BLE001
        fehlt(f'{url} -> {e}')

print('4. Ladegröße erster Aufruf (WebP-Browser)')
dateien = ['index.html', 'css/lagune.css', 'js/lagune.js', 'js/plattformen.js',
           'assets/plates/lagune.webp', 'assets/stationen/ki-korallenriff.webp',
           'assets/stationen/perlentaucher.webp', 'assets/stationen/riff-akten.webp', 'assets/stationen/zahlenschwarm.webp', 'assets/stationen/flaschenpost.webp', 'assets/stationen/seesternwerkstatt.webp',
           'assets/fonts/libre-caslon-text.woff2',
           'assets/fonts/andika-regular.woff2', 'assets/fonts/andika-bold.woff2']
summe = sum((WURZEL / d).stat().st_size for d in dateien)
print(f'        {summe / 1024:.0f} KB gesamt')
(ok if summe < 600 * 1024 else fehlt)('unter 600 KB')

print()
print('ALLES OK' if not fehler else f'{len(fehler)} FEHLER')
sys.exit(1 if fehler else 0)
