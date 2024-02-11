import { getCollection } from "astro:content";

export async function queryTags() {
  const posts = await getCollection('posts');
  const tags = posts.flatMap((post) => post.data.tags);
  return [...new Set(tags)];
}