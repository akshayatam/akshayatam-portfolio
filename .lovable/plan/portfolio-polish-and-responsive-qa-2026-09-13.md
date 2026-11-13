# Portfolio polish and responsive QA

## Scope
- Preserve the current palette, typography, spacing, navigation structure, animation style, and card language.
- Correct the journal thumbnail and lightbox framing without changing the journal’s visual identity.
- Make the About technology ticker icon-only while retaining accessible names and smooth motion.
- Give every existing blog post a unique required cover image and reuse it on archive, Home, and article pages.
- Add reusable external research references that render only when a post has references.
- Refine the existing site-wide not-found experience, add a concise Privacy page, and simplify the footer.
- Add a minimal Akshay monogram favicon set plus light/dark theme-color metadata.
- Ensure the existing drawer navigation works through tablet widths, includes the theme control, closes after navigation, and remains keyboard accessible.

## Implementation details
- Extend the blog model with required `coverImage`, `coverImageAlt`, and optional typed `researchPapers` data.
- Generate five additional cohesive editorial cover images so all six demo posts remain visually distinct.
- Add a reusable reference-list component supporting arXiv, PDF, GitHub, documentation, and external links with appropriate icons and external-link behavior.
- Use the existing Dialog and Sheet foundations for focus trapping, Escape handling, overlays, and scroll locking; refine layout and timing only.
- Add `/privacy` as a separate content route with route-specific metadata, and keep unmatched URLs in the root not-found view with portfolio navigation.
- Add SVG, ICO, and Apple touch icon files under `public`, referenced from the root head.
- Tighten mobile constraints for images, grids, controls, tags, pagination, tables, and code blocks without altering desktop presentation unnecessarily.

## Validation
- Check 1440, 1280, 1024, 768, 430, 390, and 375 pixel widths.
- Verify journal preview containment/centering and lightbox centering.
- Verify icon-only ticker, all blog covers, conditional references, external paper links, unknown-route 404, favicon responses, privacy link, and mobile/tablet drawer behavior.
- Verify theme switching, menu auto-close, keyboard/Escape behavior, horizontal overflow, code scrolling, image proportions, tags, pagination, and tap target sizes.
