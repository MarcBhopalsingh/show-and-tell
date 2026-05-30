import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.enum(["software", "pi", "automation"]),
		tags: z.array(z.string()).default([]),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
		link: z.url().optional(),
		repo: z.url().optional(),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, blog };
