# EPK Site (Astro)

Produktionsreifes, statisches Electronic Press Kit (EPK) für Musiker:innen auf Basis von [Astro](https://docs.astro.build/en/getting-started/), mit modularer Komponenten-Architektur und Content Collections.

## Features

- Deutsche, semantische EPK-Seite (Header, Hero, Sidebar, Releases, Bio, Shows, Ressourcen)
- Schwarz/Weiß Design mit editorial Look über Linien, Borders und Spacing
- Responsive Layout (mobile-first) inkl. Sidebar-Verhalten
- Audio-Player mit Play/Pause, Fortschrittsbalken, aktueller Zeit und Gesamtdauer
- Content Collections für:
  - Releases
  - Live Shows
  - Ressourcen
- Logikregeln:
  - Neuester Release wird als "Aktueller Release" im Hero angezeigt
  - Bereich "Frühere Releases" zeigt max. 3 Einträge und nur, wenn mehr als 1 Release existiert
  - Live Shows: erst kommende (aufsteigend), dann vergangene (absteigend)
  - Ticket-Button bei kommenden Shows optional

## Projektstruktur

```text
epk-site/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── assets/
│   │   ├── audio/
│   │   ├── downloads/
│   │   ├── icons/
│   │   └── images/
│   └── js/
│       └── main.js
└── src/
    ├── components/
    ├── content/
    │   ├── releases/
    │   ├── resources/
    │   └── shows/
    ├── layouts/
    ├── pages/
    ├── styles/
    └── content.config.ts
```

## Inhalte austauschen

### 1. Releases

Dateien: `src/content/releases/*.md`

Wichtige Felder:

- `releaseDate` (Sortierung)
- `artwork` (z. B. `/assets/images/mein-artwork.jpg`)
- `audio` (z. B. `/assets/audio/mein-song.mp3`)
- Plattform-Links (`spotifyUrl`, `appleMusicUrl`, ...)

Wenn `artwork` leer ist, wird automatisch ein 1:1 Fallback-Artwork genutzt.

### 2. Live Shows

Dateien: `src/content/shows/*.md`

Optionaler Ticket-Link über `ticketUrl`.

### 3. Ressourcen

Dateien: `src/content/resources/*.md`

Dateien im Ordner `public/assets/downloads/` ablegen und Pfad im Feld `file` referenzieren.

### 4. Profilbild

Im Top-Banner-Component wird bei leerem Bild automatisch `/assets/images/profile-fallback.svg` genutzt.

## Song-Datei hinterlegen

Lege MP3-Dateien in `public/assets/audio/` ab und trage den Pfad im jeweiligen Release ein, z. B.:

```yaml
audio: "/assets/audio/zaertlicher-applaus.mp3"
```

## Lokal starten

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment mit GitHub + Cloudflare Pages

1. Projekt nach GitHub pushen.
2. In Cloudflare: **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Repository auswählen.
4. Build-Einstellungen:
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
5. Deploy ausführen.

## Hinweise

- Keine UI-Frameworks, kein Inline-CSS, kein Inline-JS.
- Alle Pfade sind relativ zur Astro-Static-Ausgabe bzw. aus `/public` servierbar.
- Für bestmögliche Performance wird Audio erst beim ersten Klick initialisiert (`preload = none`).
