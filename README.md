# Mattes

Statische Künstlerwebsite von Mattes mit der Startseite, dem Release **St. Brown** und dem Impressum.

## Routen

- `/` – Künstler-Homepage mit Musik, Künstlerinfo und Live-Terminen
- `/releases/st-brown` – Landing-Page zum Song mit Streaming- und Download-Links
- `/impressum` – rechtliche Angaben
- `/muenchen-singt/` – Kampagne „München singt Touchdown St. Brown“
- `/en/muenchen-singt/` – englische Kampagnenseite

## Lokal entwickeln

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Der Build erzeugt eine statische Website in `dist/`.

## Deployment

Cloudflare Pages ist mit diesem GitHub-Repository verbunden. Die Einstellungen bleiben:

- Framework: `Astro`
- Build-Befehl: `npm run build`
- Ausgabe-Verzeichnis: `dist`

Ein Push auf `main` löst den Deployment-Build aus. Anschließend muss die Domain `thisismattes.de` in Cloudflare Pages auf das neue Deployment zeigen.

## Kampagne pflegen

Die Kampagnenseite verwendet das bestehende Astro-Layout und die St.-Brown-Styles.
Texte liegen in `src/campaign-content.ts`; die Songstory kommt für beide Sprachen
aus `src/i18n.ts`, damit sie mit der Release-Seite übereinstimmt.

Den WhatsApp-Einladungslink in `src/config/campaign.ts` bei `whatsappGroupUrl`
eintragen. Solange der Wert `null` ist, zeigen beide WhatsApp-CTAs einen
nicht aktiven Platzhalter mit „Einladungslink folgt“. Nach Eintragen der URL
und erneutem Build werden alle CTAs aktiv und die Platzhalterhinweise entfallen.
Download- und Streaming-Ziele sind in derselben Datei gebündelt.

Der lokale Player lädt die MP3 aus `public/assets/` ohne Autoplay.
Die Komponente `HookPlayer.astro` bietet Play/Stopp mit Wellenanimation,
ohne Zeitanzeige oder Fortschrittsleiste. Stopp und das natürliche Ende setzen
die Wiedergabe an den Anfang zurück. Ohne JavaScript bleiben native Controls verfügbar.
Das Stadionbild in `src/assets/` wird beim Build als WebP optimiert; der Sticker
in `public/assets/` dient als Vorschau beim Teilen der Seite.

Prüfen: `ASTRO_TELEMETRY_DISABLED=1 npx astro check` und
`ASTRO_TELEMETRY_DISABLED=1 npm run build`.
