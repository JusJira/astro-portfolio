import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const iconNames = ["link", "bus", "qrCode", "disc3"] as const;

// Derive a TypeScript type from the array
export type IconName = (typeof iconNames)[number];

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    iconName: z.enum(iconNames).optional(),
    description: z.string(),
    // Optional longer meta description used only in the <head>; falls back to description.
    metaDescription: z.string().optional(),
    shortDescription: z.string(),
    featured: z.boolean(),
    githubUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    // Optional longer meta description used only in the <head>; falls back to description.
    metaDescription: z.string().optional(),
    // Optional descriptive alt text for the hero image; falls back to the post title.
    heroAlt: z.string().optional(),
    datePublished: z.date(),
    featured: z.boolean(),
    heroImage: z.string(),
    published: z.boolean(),
  }),
});

export const collections = { projects, blog };
