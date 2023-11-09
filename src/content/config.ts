import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		shortDescription: z.string(),
		// Transform string to Date object
		featured: z.boolean(),
		githubUrl: z.string().optional(),
		websiteUrl: z.string().optional()
	}),
});

export const collections = { projects };
