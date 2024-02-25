import { getCollection } from 'astro:content'
import type { Post } from '../schema/post'

export async function queryFilteredPost(): Promise<Post[]> {
  const posts = await getCollection('post')

  return posts.map(post => {
    const { title, description, tags, publishedAt, isDraft } = post.data

    return {
      slug: post.slug,
      title,
      description,
      tags,
      publishedAt,
      isDraft
    }
  }).filter(post => !post.isDraft)
}

export async function queryPosts(): Promise<Post[]> {
  return (await queryFilteredPost())
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
}
