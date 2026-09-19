# 🕵️ Imposter – Partyspiel

Das Imposter-Spiel als Web-App fürs Handy. **Ein Gerät, alle Spieler.**
Alle bekommen dasselbe Geheimwort – nur der Imposter nicht. Wer blufft hier?

👉 **Spielen:** https://LEONA-GITHUB.github.io/imposter-spiel/

## Features

- 📱 Für iPhone gebaut (grosse Buttons, Dark Mode, Safe-Area)
- 🏷️ 14 Kategorien mit 700 Wörtern (Essen, Tiere, Sport, Filme, Schweiz, Games …)
- 👥 3–20 Spieler, 1–3 Imposter
- ✍️ Optional eigene Namen statt «Spieler 1, 2, 3»
- 💡 Optionaler Hinweis für den Imposter (er sieht die Kategorie)
- ⏱️ Diskussions-Timer (1–5 Minuten)
- 🎲 Startspieler wird ausgelost
- 🔒 Karte nur sichtbar, solange man den Finger draufhält
- 📲 Als App installierbar (PWA) und **offline spielbar**
- 🆓 Kein Account, keine Werbung, nichts wird hochgeladen

## Als App aufs iPhone installieren

1. Link in **Safari** öffnen (wichtig: Safari, nicht Chrome)
2. Unten auf **Teilen** (Viereck mit Pfeil) tippen
3. **«Zum Home-Bildschirm»** wählen → *Hinzufügen*

Danach startet das Spiel wie eine normale App im Vollbild – auch ohne Internet.
Auf Android: Chrome-Menü → *App installieren*.

## Spielregeln

1. Handy herumgeben, jeder schaut seine Karte alleine an.
2. Alle sehen dasselbe Wort – der Imposter sieht nur, dass er der Imposter ist.
3. Reihum sagt jeder **ein einzelnes Wort** als Hinweis zum Geheimwort.
   Nicht zu genau – sonst errät es der Imposter. Nicht zu vage – sonst wirkst du verdächtig.
4. Der Imposter blufft mit und tut so, als kenne er das Wort.
5. Diskutieren, auf drei gleichzeitig auf eine Person zeigen.
6. **Auflösen:** Gruppe gewinnt, wenn der Imposter erwischt wird.
   Der Imposter gewinnt, wenn er durchkommt – oder das Wort errät.

## Eigene Wörter hinzufügen

Alle Wörter stehen in [`words.js`](words.js). Eine Kategorie sieht so aus:

```js
{ id: "meine-kategorie", name: "Meine Kategorie", emoji: "🎯", words: [
  "Wort eins","Wort zwei","Wort drei"
]},
```

Einfach eine neue Kategorie in die Liste `CATEGORIES` einfügen, speichern, fertig.
(Danach in `sw.js` die Zeile `const CACHE = "imposter-v1"` auf `v2` erhöhen, damit
installierte Apps die neue Version laden.)

## Technik

Reines HTML, CSS und JavaScript – kein Framework, kein Build.

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App (Screens, Styles, Logik) |
| `words.js` | Kategorien und Wörter |
| `manifest.json` | macht die Seite installierbar |
| `sw.js` | Service Worker fürs Offline-Spielen |
| `icons/` | App-Icons |

Lokal testen:

```bash
python -m http.server 8787
```

Dann http://localhost:8787 öffnen.
