import type { APIContext } from "astro";
import { getCollection, getEntryBySlug } from 'astro:content';
import { getOgImage } from "@/components/OgImage";

export async function getStaticPaths() {
  const posts = await getCollection("post");

  return posts.map((post: { slug: string; }) => ({
    params: { slug: post.slug },
  }));
}

export async function GET({ params }: APIContext) {
  const { slug } = params
  if (!slug) return { status: 404 };

  const post = await getEntryBySlug("post", slug);
  if (!post) return { status: 404 };
  const body = await getOgImage(post.data);

  return new Response(body, {
    headers: {
      "Content-Type": "image/png",
    }
  })
}