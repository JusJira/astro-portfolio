import { defineCollection, z } from "astro:content";

const iconNames = ["link", "bus", "qrCode", "disc3"] as const;

// Derive a TypeScript type from the array
export type IconName = (typeof iconNames)[number];

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    iconName: z.enum(iconNames).optional(),
    description: z.string(),
    shortDescription: z.string(),
    featured: z.boolean(),
    githubUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.date(),
    featured: z.boolean(),
    heroImage: z.string(),
  }),
});

export const collections = { projects, blog };
