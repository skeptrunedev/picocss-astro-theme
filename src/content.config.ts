import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogPosts = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog-posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      summary: z.string(),
      author: z.string().optional(),
      categories: z.array(z.string()),
      coverImage: image().optional(),
      isFeatured: z.boolean().optional(),
      isDraft: z.boolean().optional(),
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
