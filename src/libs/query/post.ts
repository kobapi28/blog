import { getCollection } from "astro:content";
import type { Post } from "../schema/post";

export async function queryPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.map((post) => post.data).sort((a, b) => a.publishedAt > b.publishedAt ? -1 : 1)
}