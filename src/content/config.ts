import { defineCollection, z } from 'astro:content';

const products = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		roastLevel: z.enum(['light', 'medium', 'dark']),
	}),
});

export const collections = {
	products,
};
