# AGENTS.md

## Projektkontext

- Projekt: Astro-basierte Musiker-EPK-Website (statisch)
- Repository-Root enthält direkt: `src/`, `public/`, `package.json`, `astro.config.mjs`
- Deployment: Cloudflare Pages (Git-Integration)

## Tech Stack

- Astro
- Semantisches HTML
- Vanilla CSS
- Vanilla JS (nur wenn nötig)
- Content Collections für wiederkehrende Inhalte

## Wichtige Verzeichnisse

- `src/components`: UI-Komponenten
- `src/pages`: Routen (`/`, `/impressum`)
- `src/content`: Collections (`releases`, `shows`, `resources`)
- `public/assets`: statische Assets (Bilder, Audio, Downloads)
- `public/js/main.js`: Audio-Player Interaktion

## Inhaltliche Logik

- Neuester Release = Hero-Bereich
- Previous Releases: max. 3, nur anzeigen wenn mehr als 1 Release vorhanden
- Live Shows: zuerst kommende (früh -> spät), danach vergangene (spät -> früh)
- Streaming-Links bei zukünftigen Releases deaktivieren
- Label im Hero:
  - Zukunft: `Ab dem {{Releasedatum}} anhören auf`
  - sonst: `Jetzt anhören auf`

## Entwicklungsworkflow

1. Lokale Entwicklung:
   - `npm install`
   - `npm run dev`
2. Vor jedem Commit:
   - `npm run build`
3. Änderungen committen:
   - `git add .`
   - `git commit -m "<kurze, klare Nachricht>"`
4. Push:
   - `git push origin main`

## Git-Regeln

- Niemals committen: `node_modules/`, `dist/`, `.astro/`, `.DS_Store`
- `.gitignore` muss diese Pfade enthalten
- Keine Build-Artefakte ins Repo pushen
- Kleine, thematisch saubere Commits bevorzugen

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (leer)
- Deployments laufen automatisch bei Push auf `main`

## Qualität

- Fokus auf klare, modulare Komponenten
- Accessibility nicht verschlechtern (Semantik, Fokuszustände, ARIA)
- Keine unnötigen Abhängigkeiten ergänzen
- Änderungen immer gegen bestehende Designlogik prüfen (minimal, schwarz/weiß, editorial)
