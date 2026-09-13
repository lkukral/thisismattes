# Mattes

Statische Künstlerwebsite von Mattes mit der Startseite, dem Release **St. Brown** und dem Impressum.

## Routen

- `/` – Künstler-Homepage mit Musik, Künstlerinfo und Live-Terminen
- `/releases/st-brown` – Landing-Page zum Song mit Streaming- und Download-Links
- `/impressum` – rechtliche Angaben

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
