export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];
export type PageKey = "home" | "release" | "legal";

const pagePaths = {
  home: "/",
  release: "/releases/st-brown/",
  legal: "/impressum/"
} as const satisfies Record<PageKey, string>;

export function localizedPath(locale: Locale, page: PageKey): string {
  const path = pagePaths[page];
  return locale === "de" ? path : path === "/" ? "/en/" : `/en${path}`;
}

export const content = {
  de: {
    shared: {
      skipLink: "Zum Inhalt springen",
      siteNavigation: "Seitennavigation",
      languageSwitch: "Sprache wechseln",
      languageNames: { de: "Deutsch", en: "English" }
    },
    home: {
      meta: {
        title: "Mattes – Zwischen Verletzlichkeit und Aufbruch",
        description: "Offizielle Website von Mattes. Neue Musik, Live-Termine und alles dazwischen."
      },
      nav: { music: "Musik", about: "Über Mattes", live: "Live" },
      hero: { homeLabel: "Mattes Startseite", scrollLabel: "Zum aktuellen Release scrollen", scroll: "Scroll to feel" },
      featured: {
        label: "Neue Single",
        coverAlt: "Cover der Single St. Brown",
        description: "Der Song für Detroit Lions Star Amon-Ra St. Brown und alle, die Football lieben.",
        releaseLink: "Release entdecken"
      },
      release: {
        sectionLabel: "Aktueller Release",
        label: "Neue Single",
        coverAlt: "Cover der Single St. Brown",
        description: "Der Song für Detroit Lions Star Amon-Ra St. Brown und alle, die Football lieben.",
        streamingLabel: "Jetzt anhören auf",
        streamingLink: "Alle Streaming-Dienste",
        moreLabel: "Weitere Releases",
        previousType: "Single",
        previousCoverAlt: "Cover der Single Zärtlicher Applaus"
      },
      statement: {
        label: "Markenbotschaft",
        lineOne: "Zweifel gehören dazu.",
        emphasis: "Herz, Mut und Zuversicht",
        lineThree: "bringen dich voran.",
        tags: ["Live on", "Keep going", "Feel it all"]
      },
      about: {
        sectionLabel: "Über Mattes",
        heading: ["Ehrliche Songs.", "Klare Kante.", "Volles Leben."],
        paragraphs: [
          "Mattes macht deutschsprachigen Indie-Pop für Menschen, die viel fühlen, viel nachdenken und trotzdem nicht aufhören wollen, an sich zu glauben.",
          "Seine Songs entstehen aus Momenten, in denen nicht immer alles leicht ist: Selbstzweifel, Druck, das Gefühl, nicht genug zu sein. Sie bleiben aber nie dort stehen. Es geht um den Mut, wieder aufzustehen und weiterzugehen, auch wenn man unsicher ist.",
          "Große Melodien treffen auf ehrliche Texte und modernen Pop mit internationalem Vibe. Emotional, aber nie schwer. Musik, die verbindet, Kraft gibt und mit dir weiterläuft."
        ],
        instagramLink: "Mehr von Mattes sehen"
      },
      live: {
        sectionLabel: "Auf die Bühne",
        heading: ["Live", "Dabei sein."],
        description: "Für Mitsing-Momente, Gänsehaut und alles dazwischen.",
        events: [
          { date: "2026-09-03", displayDate: "03.09.2026", city: "Köln", venue: "Copper Pot", status: "Infos folgen" },
          { date: "2026-09-04", displayDate: "04.09.2026", city: "Langenfeld", venue: "Copper Pot", status: "Infos folgen" },
          { date: "2026-10-16", displayDate: "16.10.2026", city: "Salzburg", venue: "Shamrock", status: "Infos folgen" },
          { date: "2026-10-17", displayDate: "17.10.2026", city: "Salzburg", venue: "Shamrock", status: "Infos folgen" },
          { date: "2026-11-13", displayDate: "13.11.2026", city: "München", venue: "Kennedy's", status: "Infos folgen" },
          { date: "2026-11-27", displayDate: "27.11.2026", city: "Salzburg", venue: "Shamrock", status: "Infos folgen" },
          { date: "2026-11-28", displayDate: "28.11.2026", city: "Salzburg", venue: "Shamrock", status: "Infos folgen" },
          { date: "2027-01-05", displayDate: "05.01.2027", city: "Neuburg a.d. Donau", venue: "Drogerie", status: "Infos folgen" },
          { date: "2027-02-20", displayDate: "20.02.2027", city: "Ingolstadt", venue: "Halle Neun", status: "Infos folgen" }
        ]
      },
      footer: { tagline: "Zwischen Verletzlichkeit und Aufbruch.", legal: "Impressum" }
    },
    release: {
      meta: { title: "St. Brown | Mattes", description: "St. Brown von Mattes – für Football, harte Arbeit und den Willen, weiterzugehen." },
      header: { homeLabel: "Zur Mattes Homepage", releaseYear: "Release 2026" },
      hero: { label: "Die neue Single", coverAlt: "Cover der Single St. Brown von Mattes", stream: "Jetzt streamen", touchdownLink: "Zur Touchdown Version" },
      story: {
        sectionLabel: "Über den Song",
        portraitAlt: "Mattes",
        portraitCaption: "MATTES · DETROIT / MÜNCHEN",
        heading: ["Mehr als", "Football."],
        paragraphs: [
          "Über seine Mutter hat Mattes familiäre Wurzeln in Detroit. Die Verbindung zur Stadt und zu den Detroit Lions ist für ihn deshalb mehr als nur Fanliebe.",
          "In „St. Brown“ erzählt er, warum er sich mit dem Sport, Amon-Ra St. Brown und den Lions so stark identifiziert: Harte Arbeit und der unbedingte Wille führen am Ende zum Erfolg. Für diesen Weg lohnt es sich zu kämpfen.",
          "Der Song steht für alle, die nach Erfolg streben, ohne zu vergessen, woher sie kommen und welchen Weg sie schon gegangen sind."
        ],
        instagramLink: "Mattes auf Instagram"
      },
      touchdown: {
        sectionLabel: "Für den Moment danach",
        heading: ["Lade dir die", "Touchdown Version", "herunter."],
        description: "Dieser Edit kann bei einem Touchdown von Amon-Ra St. Brown laufen, um das ganze Stadion anzuheizen. Lade ihn dir herunter und feiere jeden Touchdown von St. Brown.",
        download: "Touchdown Version herunterladen"
      },
      connect: { sectionLabel: "Mattes", heading: ["Mehr", "von Mattes."], label: "Mattes folgen", homeLink: "Zur Homepage" },
      footer: "St. Brown · 2026"
    },
    legal: {
      meta: { title: "Impressum | Mattes", description: "Impressum mit den gesetzlich vorgesehenen Anbieterangaben." },
      homeLink: "Zur Startseite",
      eyebrow: "Rechtliches",
      heading: "Impressum",
      sections: [
        { id: "anbieterkennung", title: "Angaben gemäss Paragraph 5 TMG", body: ["Stefan Mattes", "Am Kornberg 27", "85123 Karlskron", "Deutschland"] },
        { id: "vertretung", title: "Vertreten durch", body: ["Stefan Mattes"] },
        { id: "kontakt", title: "Kontakt", body: ["Telefon: +49 160 6663012", "E-Mail: hello@thisismattes.de"] },
        { id: "inhaltlich-verantwortlich", title: "Inhaltlich verantwortlich gemäß Paragraph 18 Absatz 2 MStV", body: ["Stefan Mattes", "Am Kornberg 27", "85123 Karlskron"] },
        { id: "haftung-inhalte", title: "Haftung für Inhalte", body: ["Als Diensteanbieter sind wir gemäss den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."] },
        { id: "haftung-links", title: "Haftung für Links", body: ["Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen."] },
        { id: "urheberrecht", title: "Urheberrecht", body: ["Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."] }
      ]
    }
  },
  en: {
    shared: {
      skipLink: "Skip to content",
      siteNavigation: "Site navigation",
      languageSwitch: "Change language",
      languageNames: { de: "Deutsch", en: "English" }
    },
    home: {
      meta: {
        title: "Mattes – Between vulnerability and new beginnings",
        description: "The official website of Mattes. New music, live dates, and everything in between."
      },
      nav: { music: "Music", about: "About Mattes", live: "Live" },
      hero: { homeLabel: "Mattes homepage", scrollLabel: "Scroll to the latest release", scroll: "Scroll to feel" },
      featured: {
        label: "New single",
        coverAlt: "Cover artwork for the single St. Brown",
        description: "The song for Detroit Lions star Amon-Ra St. Brown and everyone who loves football.",
        releaseLink: "Explore release"
      },
      release: {
        sectionLabel: "Latest release",
        label: "New single",
        coverAlt: "Cover artwork for the single St. Brown",
        description: "The song for Detroit Lions star Amon-Ra St. Brown and everyone who loves football.",
        streamingLabel: "Listen now on",
        streamingLink: "All streaming services",
        moreLabel: "More releases",
        previousType: "Single",
        previousCoverAlt: "Cover artwork for the single Zärtlicher Applaus"
      },
      statement: {
        label: "Artist statement",
        lineOne: "Doubts are part of it.",
        emphasis: "Heart, courage and optimism",
        lineThree: "keep you moving forward.",
        tags: ["Live on", "Keep going", "Feel it all"]
      },
      about: {
        sectionLabel: "About Mattes",
        heading: ["Honest songs.", "Clear edge.", "Full of life."],
        paragraphs: [
          "Mattes makes German-language indie pop for people who feel deeply, think a lot, and still refuse to stop believing in themselves.",
          "His songs come from moments when things are not always easy: self-doubt, pressure, the feeling of not being enough. But they never stay there. They are about finding the courage to get back up and keep going, even when you are unsure.",
          "Big melodies meet honest lyrics and modern pop with an international feel. Emotional, but never heavy. Music that connects, gives strength, and keeps moving with you."
        ],
        instagramLink: "See more from Mattes"
      },
      live: {
        sectionLabel: "Take the stage",
        heading: ["Live", "Be there."],
        description: "For singalong moments, goosebumps, and everything in between.",
        events: [
          { date: "2026-09-03", displayDate: "3 September 2026", city: "Cologne", venue: "Copper Pot", status: "More details soon" },
          { date: "2026-09-04", displayDate: "4 September 2026", city: "Langenfeld", venue: "Copper Pot", status: "More details soon" },
          { date: "2026-10-16", displayDate: "16 October 2026", city: "Salzburg", venue: "Shamrock", status: "More details soon" },
          { date: "2026-10-17", displayDate: "17 October 2026", city: "Salzburg", venue: "Shamrock", status: "More details soon" },
          { date: "2026-11-13", displayDate: "13 November 2026", city: "Munich", venue: "Kennedy's", status: "More details soon" },
          { date: "2026-11-27", displayDate: "27 November 2026", city: "Salzburg", venue: "Shamrock", status: "More details soon" },
          { date: "2026-11-28", displayDate: "28 November 2026", city: "Salzburg", venue: "Shamrock", status: "More details soon" },
          { date: "2027-01-05", displayDate: "5 January 2027", city: "Neuburg a.d. Donau", venue: "Drogerie", status: "More details soon" },
          { date: "2027-02-20", displayDate: "20 February 2027", city: "Ingolstadt", venue: "Halle Neun", status: "More details soon" }
        ]
      },
      footer: { tagline: "Between vulnerability and new beginnings.", legal: "Legal notice" }
    },
    release: {
      meta: { title: "St. Brown | Mattes", description: "St. Brown by Mattes – for football, hard work, and the will to keep going." },
      header: { homeLabel: "Go to the Mattes homepage", releaseYear: "Release 2026" },
      hero: { label: "The new single", coverAlt: "Cover artwork for Mattes' single St. Brown", stream: "Stream now", touchdownLink: "To the Touchdown Version" },
      story: {
        sectionLabel: "About the song",
        portraitAlt: "Mattes",
        portraitCaption: "MATTES · DETROIT / MUNICH",
        heading: ["More than", "football."],
        paragraphs: [
          "Through his mother, Mattes has family roots in Detroit. His connection to the city and the Detroit Lions is therefore much more than fandom.",
          "In “St. Brown”, he shares why he identifies so strongly with the sport, Amon-Ra St. Brown, and the Lions: hard work and unwavering determination lead to success. That is a path worth fighting for.",
          "The song speaks for everyone striving for success without forgetting where they come from or the road they have already travelled."
        ],
        instagramLink: "Mattes on Instagram"
      },
      touchdown: {
        sectionLabel: "For the moment after",
        heading: ["Download the", "Touchdown Version", "now."],
        description: "This edit can be played whenever Amon-Ra St. Brown scores a touchdown to ignite the whole stadium. Download it and celebrate every St. Brown touchdown.",
        download: "Download the Touchdown Version"
      },
      connect: { sectionLabel: "Mattes", heading: ["More", "from Mattes."], label: "Follow Mattes", homeLink: "Go to homepage" },
      footer: "St. Brown · 2026"
    },
    legal: {
      meta: { title: "Legal notice | Mattes", description: "Legal notice with the legally required provider information." },
      homeLink: "Go to homepage",
      eyebrow: "Legal",
      heading: "Legal notice",
      sections: [
        { id: "anbieterkennung", title: "Information pursuant to Section 5 of the German Telemedia Act (TMG)", body: ["Stefan Mattes", "Am Kornberg 27", "85123 Karlskron", "Germany"] },
        { id: "vertretung", title: "Represented by", body: ["Stefan Mattes"] },
        { id: "kontakt", title: "Contact", body: ["Phone: +49 160 6663012", "Email: hello@thisismattes.de"] },
        { id: "inhaltlich-verantwortlich", title: "Responsible for content pursuant to Section 18(2) of the German State Media Treaty (MStV)", body: ["Stefan Mattes", "Am Kornberg 27", "85123 Karlskron"] },
        { id: "haftung-inhalte", title: "Liability for content", body: ["As a service provider, we are responsible for our own content on these pages under general law. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate unlawful activity."] },
        { id: "haftung-links", title: "Liability for links", body: ["Our offer contains links to external third-party websites. We have no influence over their content and therefore cannot accept any responsibility for it."] },
        { id: "urheberrecht", title: "Copyright", body: ["The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator."] }
      ]
    }
  }
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
