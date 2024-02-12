import { postSchema } from '@/libs/schema/post'
import { defineCollection } from 'astro:content'

const postsCollections = defineCollection({
  type: 'content',
  schema: postSchema,
})

export const collections = {
  post: postsCollections,
}
