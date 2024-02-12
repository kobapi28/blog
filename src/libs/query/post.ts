import { getCollection } from 'astro:content'
import type { Post } from '../schema/post'

export async function queryPosts(): Promise<Post[]> {
  const posts = await getCollection('post')
  return posts.map((post) => {
    const { title, description, tags, publishedAt } = post.data
    return {
      slug: post.slug,
      title,
      description,
      tags,
      publishedAt,
    }
  }).sort((a, b) => a.publishedAt > b.publishedAt ? -1 : 1)
}
