import { defineArrayMember, defineField, defineType } from "sanity";
import { CodeInput } from "./CodeInput";

const title = defineField({
  name: "title",
  description: "Enter a clear title readers will recognize.",
  type: "string",
  validation: (rule) => rule.required(),
});
const slug = defineField({
  name: "slug",
  description: "Generate the URL from the title. Keep it stable after publishing.",
  type: "slug",
  options: { source: "title" },
});
const requiredSlug = defineField({ ...slug, validation: (rule) => rule.required() });
const date = defineField({
  name: "date",
  description: "Choose the date associated with this entry.",
  type: "date",
  validation: (rule) => rule.required(),
});
const tags = defineField({
  name: "tags",
  description: "Add topics readers can use to filter or find this entry.",
  type: "array",
  of: [defineArrayMember({ type: "string" })],
  options: { layout: "tags" },
});
const featured = defineField({
  name: "featured",
  description: "Show this entry in featured placements where supported.",
  type: "boolean",
  initialValue: false,
});
const description = defineField({
  name: "description",
  description: "Summarize the entry in one or two sentences.",
  type: "text",
  validation: (rule) => rule.required(),
});
const githubUrl = defineField({
  name: "githubUrl",
  description: "Paste the GitHub link for this work.",
  title: "GitHub URL",
  type: "url",
});
const image = defineField({
  name: "image",
  description: "Upload an image that illustrates this entry.",
  type: "image",
  options: { hotspot: true },
});
const imageAlt = defineField({
  name: "imageAlt",
  description: "Describe what the image shows for readers using assistive technology.",
  title: "Alternative text",
  type: "string",
});
const imageCaption = defineField({
  name: "imageCaption",
  description: "Add a caption or credit displayed below the image.",
  type: "string",
});
const text = defineField({
  name: "text",
  description: "Enter the text for this block.",
  type: "text",
  validation: (rule) => rule.required(),
});

const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      ...title,
      description: "Write the page title for search results and shared links.",
    }),
    defineField({
      ...description,
      description: "Write a short, self-contained summary for search results and shared links.",
    }),
    defineField({
      ...image,
      description: "Upload the preview image you want to associate with this page.",
    }),
  ],
});

const codeBlock = defineType({
  name: "code",
  title: "Code block",
  type: "object",
  fields: [
    defineField({
      name: "language",
      description: "Select the language for syntax highlighting.",
      type: "string",
      options: {
        list: [
          "text",
          "bash",
          "css",
          "html",
          "javascript",
          "json",
          "markdown",
          "python",
          "rust",
          "sql",
          "typescript",
          "tsx",
          "jsx",
          "xml",
        ],
      },
    }),
    defineField({
      name: "code",
      description: "Paste the snippet here. Use Copy code to copy it.",
      type: "text",
      rows: 10,
      components: { input: CodeInput },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "language", subtitle: "code" },
    prepare: ({ title, subtitle }) => ({
      title: title ? `Code block (${title})` : "Code block",
      subtitle: subtitle?.split("\n")[0],
    }),
  },
});

const content = defineField({
  name: "content",
  description: "Add paragraphs, headings, images, or other blocks to build the journal entry.",
  type: "array",
  of: [
    defineArrayMember({
      name: "heading",
      type: "object",
      fields: [
        text,
        defineField({
          name: "level",
          description: "Choose the heading level for this section.",
          type: "number",
          initialValue: 2,
          options: { list: [2, 3] },
        }),
      ],
    }),
    defineArrayMember({ name: "paragraph", type: "object", fields: [text] }),
    defineArrayMember({
      name: "list",
      type: "object",
      fields: [
        defineField({
          name: "items",
          description: "Add each list entry on its own line in the list editor.",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineArrayMember({ name: "quote", type: "object", fields: [text] }),
    defineArrayMember({ type: "code" }),
    defineArrayMember({
      name: "table",
      type: "object",
      fields: [
        defineField({
          name: "headers",
          description: "Enter the label for each table column in order.",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "rows",
          description: "Add the table rows in the order they should appear.",
          type: "array",
          of: [
            defineArrayMember({
              name: "row",
              type: "object",
              fields: [
                defineField({
                  name: "cells",
                  description: "Enter one value per column in header order.",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineArrayMember({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          description: "Describe what the image shows for readers using assistive technology.",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
});

const markdown = defineField({
  name: "markdown",
  title: "Content",
  type: "text",
  rows: 18,
  description:
    "Paste or write Markdown here. Use backticks for inline code and triple backticks for code blocks.",
});

const legacyContent = defineField({ ...content, hidden: true, readOnly: true });

const project = defineType({
  name: "project",
  type: "document",
  fields: [
    title,
    requiredSlug,
    defineField({
      ...description,
      description:
        "Summarize what you built and what it does for the project card and page header.",
    }),
    markdown,
    legacyContent,
    defineField({ ...image, name: "thumbnail" }),
    defineField({
      ...imageAlt,
      name: "thumbnailAlt",
      description: "Describe what the project thumbnail shows.",
      validation: (rule) =>
        rule.custom((value, context) =>
          !context.document?.thumbnail || value?.trim()
            ? true
            : "Add alternative text for the thumbnail.",
        ),
    }),
    imageCaption,
    tags,
    date,
    featured,
    defineField({
      name: "status",
      description: "Enter the current status of the project.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    githubUrl,
    defineField({
      name: "liveUrl",
      description: "Paste the URL of the live project or demo, if available.",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      description: "Set the title, summary, and image for search results and shared links.",
      validation: (rule) => rule.required(),
    }),
  ],
});

const externalReference = defineType({
  name: "externalReference",
  type: "object",
  fields: [
    title,
    defineField({
      name: "authors",
      description: "List the authors credited on the source.",
      type: "string",
    }),
    defineField({
      name: "url",
      description: "Paste the direct link to the reference.",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      description: "Enter the publication, organization, or website that hosts the reference.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      description: "Choose the category that best describes this entry.",
      type: "string",
      options: { list: ["arxiv", "pdf", "github", "documentation", "website"] },
      validation: (rule) => rule.required(),
    }),
  ],
});

const blogPost = defineType({
  name: "blogPost",
  type: "document",
  fields: [
    title,
    requiredSlug,
    defineField({ ...description, name: "excerpt" }),
    markdown,
    legacyContent,
    defineField({
      ...image,
      name: "coverImage",
      description: "Upload the main image for this post.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...imageAlt,
      name: "coverImageAlt",
      description: "Describe what the cover image shows.",
      validation: (rule) => rule.required(),
    }),
    imageCaption,
    defineField({
      name: "researchPapers",
      description: "Add papers and other sources cited in this post.",
      type: "array",
      of: [defineArrayMember({ type: "externalReference" })],
    }),
    tags,
    defineField({ ...date, name: "publishedAt" }),
    defineField({
      name: "updatedAt",
      description: "Choose the date of the most recent substantial revision, if applicable.",
      type: "date",
    }),
    defineField({
      name: "readingTime",
      description: "Estimate how many minutes the post takes to read.",
      title: "Reading time (minutes)",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    featured,
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      description: "Set the title, summary, and image for search results and shared links.",
      validation: (rule) => rule.required(),
    }),
  ],
});

const journalEntry = defineType({
  name: "journalEntry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      description: "Enter a clear title readers will recognize.",
      type: "string",
    }),
    slug,
    content,
    date,
    defineField({
      name: "type",
      description: "Choose the category that best describes this entry.",
      title: "Entry type",
      type: "string",
      options: { list: ["Thought", "Learning", "Building", "Life", "Photo", "Instagram", "Note"] },
      validation: (rule) => rule.required(),
    }),
    tags,
    image,
    defineField({
      ...imageAlt,
      validation: (rule) =>
        rule.custom((value, context) =>
          !context.document?.image || value?.trim() ? true : "Add alternative text for the image.",
        ),
    }),
    imageCaption,
    defineField({
      name: "externalUrl",
      description: "Paste the link to the related external post or resource.",
      title: "External URL",
      type: "url",
    }),
    defineField({
      name: "externalPlatform",
      description: "Enter the name of the platform hosting the linked content.",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", date: "date", type: "type", media: "image" },
    prepare: ({ title, date, type, media }) => ({
      title: title || type || "Journal entry",
      subtitle: date,
      media,
    }),
  },
});

const openSourceContribution = defineType({
  name: "openSourceContribution",
  type: "document",
  fields: [
    defineField({
      name: "repository",
      description: "Enter the repository name as it appears on GitHub.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "organization",
      description: "Enter the GitHub owner or organization, if relevant.",
      type: "string",
    }),
    title,
    defineField({
      ...description,
      description: "Summarize what you contributed and why it mattered.",
    }),
    defineField({
      name: "type",
      description: "Choose the category that best describes this entry.",
      type: "string",
      options: { list: ["pull-request", "issue", "documentation", "feature", "bug-fix"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ ...githubUrl, validation: (rule) => rule.required() }),
    defineField({
      name: "status",
      description: "Choose the current status of the contribution.",
      type: "string",
      options: { list: ["merged", "open", "closed", "approved", "in-review"] },
      validation: (rule) => rule.required(),
    }),
    date,
    defineField({
      name: "pullRequestNumber",
      description: "Enter the GitHub pull request number, if applicable.",
      type: "number",
      validation: (rule) => rule.integer().min(1),
    }),
    defineField({
      name: "issueNumber",
      description: "Enter the GitHub issue number, if applicable.",
      type: "number",
      validation: (rule) => rule.integer().min(1),
    }),
  ],
  preview: {
    select: { repository: "repository", title: "title" },
    prepare: ({ repository, title }) => ({ title: repository || "Contribution", subtitle: title }),
  },
});

export const schemaTypes = [
  project,
  blogPost,
  journalEntry,
  openSourceContribution,
  seo,
  codeBlock,
  externalReference,
];
