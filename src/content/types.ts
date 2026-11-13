export type SeoMeta = { title: string; description: string; image?: string }
export type ContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; code: string; language?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string }
export type Project = { title: string; slug: string; description: string; content: ContentBlock[]; thumbnail?: string; thumbnailAlt?: string; tags: string[]; date: string; featured: boolean; status: string; githubUrl?: string; liveUrl?: string; seo: SeoMeta }
export type ReferenceType = "arxiv" | "pdf" | "github" | "documentation" | "website"
export type ExternalReference = { title: string; authors?: string; url: string; source: string; type: ReferenceType }
export type BlogPost = { title: string; slug: string; excerpt: string; content: ContentBlock[]; coverImage: string; coverImageAlt: string; researchPapers?: ExternalReference[]; tags: string[]; publishedAt: string; updatedAt?: string; readingTime: number; featured: boolean; seo: SeoMeta }
export type JournalType = "Thought" | "Learning" | "Building" | "Life" | "Photo" | "Instagram" | "Note"
export type JournalEntry = { title?: string | undefined; slug?: string | undefined; content: ContentBlock[]; date: string; type: JournalType; tags?: string[] | undefined; image?: string | undefined; imageAlt?: string | undefined; imageCaption?: string | undefined; externalUrl?: string | undefined; externalPlatform?: string | undefined }
export type Technology = { name: string; category: string; detail?: string; icon: string }
export type ContributionType = "pull-request" | "issue" | "documentation" | "feature" | "bug-fix"
export type ContributionStatus = "merged" | "open" | "closed" | "approved" | "in-review"
export interface OpenSourceContribution { repository:string; organization?:string; title:string; description:string; type:ContributionType; githubUrl:string; status:ContributionStatus; date:string; pullRequestNumber?:number; issueNumber?:number }
