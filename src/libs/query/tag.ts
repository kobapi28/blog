import { getCollection } from 'astro:content'

export async function queryTags() {
  const posts = await getCollection('post')
  const tags = posts.flatMap(post => post.data.tags)
  return [...new Set(tags)]
}
