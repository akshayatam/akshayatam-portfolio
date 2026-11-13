# Targeted portfolio refinement plan

## Preserve the approved design
- Keep the current palette, type system, spacing, cards, navigation, responsive behavior, and editorial tone.
- Add only the requested refinements, using the existing visual tokens and button patterns.

## Profile and About actions
- Generate one temporary square professional portrait and reuse it on Home and About through a shared `ProfileImage` component.
- Adjust the existing Home hero into a balanced text/image layout without increasing its overall scale.
- Give About a distinct editorial image placement beside its introduction.
- Add accessible Download Resume and Copy Email buttons; Copy Email will show a quiet “Copied!” state for two seconds.
- Create a polished one-page placeholder `public/resume.pdf` that can later be replaced at the same path.

## Journal and Blog images
- Extend the centralized Journal model with optional image, alt text, and caption fields; extend Blog with cover-image alt text.
- Add realistic sample images to selected entries only, preserving polished text-only states.
- Add reusable responsive thumbnail and profile-image components with fixed aspect ratios, dimensions, lazy loading, and appropriate eager loading for the Home portrait.
- Build an accessible reusable image lightbox with close button, outside click, Escape handling, focus management, scroll locking, mobile sizing, and reduced-motion support.

## Open source contributions
- Add a centralized `OpenSourceContribution` model and mock contribution data designed for later GitHub API replacement.
- Add reusable contribution cards and compact semantic status badges.
- Add an “Open Source Contributions” section to About using the existing border-led editorial layout.

## Technology icons
- Add a lightweight Iconify React integration and replace abbreviation marks with real technology logos through one reusable `TechIcon` component.
- Keep accessible names/tooltips and use brand color selectively while maintaining light/dark legibility.

## Transitions and code blocks
- Add short route-entry and targeted theme color transitions without changing navigation behavior or causing first-load theme flashes.
- Respect reduced-motion settings throughout.
- Add a reliable SSR-compatible syntax-highlighting layer for current rich-content code languages.
- Build a reusable themed `CodeBlock` with a language label, nonintrusive Copy/Copied control, horizontal scrolling, and coordinated light/dark syntax colors.

## Validation
- Verify Home, About, Blog, Journal, Project, and Tech Stack pages at desktop, tablet, and mobile sizes.
- Test light/dark themes, keyboard focus, Copy Email, code copy, resume download, lightbox close methods and scroll lock, and browser back/forward navigation.
- Confirm image and text-only Blog/Journal entries both render correctly, with no layout shift or console errors.
