import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
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

export const collections = { blog, project };
