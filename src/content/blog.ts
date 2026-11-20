import { createServerFn } from "@tanstack/react-start";
import { contentProjection, fetchPublished } from "@/content/sanity";
import type { BlogPost } from "@/content/types";

const query = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
  title, "slug": slug.current, excerpt, publishedAt, updatedAt, readingTime,
  "featured": coalesce(featured, false),
  "tags": coalesce(tags, []),
  "coverImage": coverImage.asset->url, coverImageAlt, imageCaption, researchPapers,
  seo{title, description, "image": image.asset->url},
  markdown,
    ${contentProjection}
}`;

export const getBlogPosts = createServerFn({ method: "GET" }).handler(
  async () => (await fetchPublished<BlogPost>(query)) ?? [],
);
