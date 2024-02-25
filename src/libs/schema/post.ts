import { z } from 'astro:content'

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  publishedAt: z.string(),
  isDraft: z.boolean()
})

export type Post = z.infer<typeof postSchema> & {
  slug: string
}
