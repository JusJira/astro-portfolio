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

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		featured: z.boolean(),
		heroImage: z.string(),
	}),
});

export const collections = { projects, blog };
