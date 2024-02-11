import { z, defineCollection } from "astro:content"

const postsCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.string(),
  })
})

export const collections = {
  posts: postsCollections,
}