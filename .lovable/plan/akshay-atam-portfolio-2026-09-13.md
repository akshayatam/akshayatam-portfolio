# Akshay Atam Portfolio

## Goal
Build a polished, responsive portfolio for Akshay Atam that presents engineering work, writing, learning, and personal notes with a restrained editorial feel in light and dark themes.

## Pages and navigation
- Create persistent desktop navigation and an accessible mobile menu for Home, Projects, Journal, Blog, Tech Stack, About, and Contact.
- Add theme detection, a persistent light/dark toggle, active-page styling, shared footer, and subtle page-entry motion.
- Build archive pages at `/projects`, `/journal`, and `/blog`, plus detail pages at `/projects/[slug]`, `/journal/[slug]`, and `/blog/[slug]`.
- Add distinct SEO metadata, canonical URLs, social metadata, semantic headings, keyboard focus states, and useful missing-content states to every public page.

## Content system
- Define reusable TypeScript models for projects, blog posts, journal entries, rich content sections, SEO, experience, education, and technologies.
- Keep realistic sample content in a centralized repository module with query helpers, leaving UI components independent from the eventual CMS source.
- Support structured headings, prose, lists, quotes, code, images, tables, and links in project and article bodies.

## Discovery and archives
- Build reusable search, tag/type filters, chips, and accessible pagination driven by URL search parameters.
- Make filters compose with search, reset pagination when changed, and support a growing collection rather than fixed item counts.
- Add related-content and previous/next navigation to detail pages based on tags and ordering.

## Visual system and reusable UI
- Establish a neutral ink/paper design system with a restrained warm accent, editorial typography, subtle borders, compact radii, and accessible light/dark values.
- Build reusable header, footer, buttons, social links, content headers, cards/list rows, filters, pagination, rich-content renderer, timeline items, and technology items.
- Add a compact smoothly moving technology strip, responsive archive layouts, tasteful project cover artwork, and reduced-motion support.

## Contact behavior
- Build an accessible contact form with validation and clear loading, error, and success states.
- Keep it portable and backend-free for now; validated submission will open the visitor’s email client with the message prefilled.

## Validation
- Verify the important desktop and mobile layouts, theme switching and persistence, mobile navigation, filters, pagination, search, archive/detail navigation, contact states, missing slugs, and console cleanliness.

## Assumptions
- Use “Akshay Atam” as the public name.
- Use clearly centralized sample biography, projects, writing, experience, education, contact address, and social URLs until Akshay supplies final details; no CMS or database is added.
