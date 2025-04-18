import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogPosts = defineCollection({
  loader: glob({
    pattern: "**/*.mdoc",
    base: "./src/content/blog-posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      author: z.string().optional(),
      categories: z.array(z.string()),
      coverImage: image().optional(),
      isDraft: z.boolean(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
});

const blogCategories = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/blog-categories",
  }),
  schema: () =>
    z.object({
      name: z.string(),
    }),
});

export const collections = {
  blogPosts,
  blogCategories,
};
