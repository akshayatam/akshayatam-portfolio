import { createServerFn } from "@tanstack/react-start";
import { contentProjection, fetchPublished } from "@/content/sanity";
import type { JournalEntry, OpenSourceContribution, Project } from "@/content/types";

export const getProjects = createServerFn({ method: "GET" }).handler(async () => {
  const published =
    await fetchPublished<Project>(`*[_type == "project" && defined(slug.current)] | order(date desc){
    title, "slug": slug.current, description, date, status, githubUrl, liveUrl,
    "featured": coalesce(featured, false), "tags": coalesce(tags, []),
    "thumbnail": thumbnail.asset->url, thumbnailAlt, imageCaption,
    seo{title, description, "image": image.asset->url},
    markdown,
    ${contentProjection}
  }`);
  return published ?? [];
});

export const getJournalEntries = createServerFn({ method: "GET" }).handler(async () => {
  const published =
    await fetchPublished<JournalEntry>(`*[_type == "journalEntry"] | order(date desc){
    title, "slug": slug.current, date, type, tags,
    "image": image.asset->url, imageAlt, imageCaption, externalUrl, externalPlatform,
    ${contentProjection}
  }`);
  return published ?? [];
});

export const getContributions = createServerFn({ method: "GET" }).handler(async () => {
  const published =
    await fetchPublished<OpenSourceContribution>(`*[_type == "openSourceContribution"] | order(date desc){
    repository, organization, title, description, type, githubUrl, status, date,
    pullRequestNumber, issueNumber
  }`);
  return published ?? [];
});
