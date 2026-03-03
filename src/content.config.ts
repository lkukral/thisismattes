import { defineCollection, z } from "astro:content";

const releases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    releaseDate: z.coerce.date(),
    description: z.string(),
    artwork: z.string().optional(),
    artworkAlt: z.string(),
    audio: z.string().optional(),
    spotifyUrl: z.string().url().optional(),
    appleMusicUrl: z.string().url().optional(),
    amazonMusicUrl: z.string().url().optional(),
    youtubeMusicUrl: z.string().url().optional()
  })
});

const shows = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    city: z.string(),
    venue: z.string(),
    notes: z.string().optional(),
    ticketUrl: z.string().url().optional()
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    file: z.string(),
    type: z.enum(["zip", "pdf"])
  })
});

export const collections = {
  releases,
  shows,
  resources
};
