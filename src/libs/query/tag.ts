import { queryFilteredPost } from './post'

export async function queryTags() {
  const posts = await queryFilteredPost()
  const tags = posts.flatMap(post => post.tags)

  return [...new Set(tags)]
}
