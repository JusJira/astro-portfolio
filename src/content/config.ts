import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		shortDescription: z.string(),
		featured: z.boolean(),
		githubUrl: z.string().optional(),
		websiteUrl: z.string().optional()
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
