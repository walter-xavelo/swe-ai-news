# Agent Guidelines for SWE AI News

This document outlines the standard operating procedures and technical implementation guidelines for AI agents and automated assistants operating within this repository. 

Follow these rules strictly to ensure consistency and prevent regressions across the codebase.

## 1. Adding News Items

All news logs are stored as Markdown documents enriched with YAML frontmatter.

### Location and Naming
*   **Directory:** `src/content/news/`
*   **Filename Format:** `YYYYMMDD-concise-kebab-case-title.md` (e.g., `20260328-new-ai-model-released.md`)

### Frontmatter Schema
Every news Markdown file MUST include the following frontmatter fields:

```yaml
---
title: "A clear, engaging title representing the news"
pubDate: YYYY-MM-DD # Ensure exact 10-digit ISO 8601 formatting for the publication date
tags: ["UPPERCASE_TAG_1", "UPPERCASE_TAG_2"] # e.g., "SOFTWARE_ENGINEERING", "AI", "INDUSTRY"
sourceUrl: "https://www.original-source-link.com"
summary: "A concise 1-2 sentence overview encapsulating the core value of the news item."
---
```

### Content Guidelines
*   Write clear, structured Markdown utilizing headers (`##`) for readability.
*   Prioritize highly informative, objective language appropriate for software engineers.
*   Avoid excessively verbose introductions. Lead with the core technical value.

---

## 2. Implementing Website Changes

The site is a simple but highly performant Static Site Generator (SSG) app.

### Core Architecture
*   **Framework:** Astro
*   **Styling:** Tailwind CSS (Vanilla utilities)
*   **Interactivity:** Vanilla JavaScript utilizing native `<script>` tags within `.astro` files.

### Design Standards & Styling
*   **Theme:** The site uses a very strict dark-mode aesthetic. 
*   **Backgrounds:** Primary background is `bg-[#0a0a0a]`. Components/Cards utilize `bg-neutral-900` or `bg-neutral-900/40`.
*   **Borders:** Use `border-neutral-800` or `border-neutral-800/60` for subtle structural lines.
*   **Typography:** The standard font is `font-sans` (Inter) for copy, and `font-mono` (JetBrains Mono) for tech-centric data, labels, tags, and secondary metadata. Text generally defaults to `text-neutral-300` or `text-neutral-400`.
*   **Accents:** The primary accent is basic Tailwind blue (e.g., `text-blue-400`, `bg-blue-500/10`).

### Interactive Logic (Filtering & Pagination)
*   Client-side interactions are largely handled by Vanilla JS within Astro pages (mostly inside `src/pages/index.astro`).
*   **CRITICAL:** When implementing features involving tag identification or string matching against the DOM, **always compare normalized strings**. 
    *   *Example:* User URL inputs or `activeTag` values must be `.toLowerCase().trim()` matched against DOM datasets (`data-tags={tags.join(',')}`). Do not assume case-perfect matches from the URL parameters.
*   Pagination relies on the `?page=` URL parameter so that state persists naturally without breaking back buttons. Ensure URL parameters stack correctly (e.g., using `URLSearchParams` to carry over existing filters when paginating).

### Astro Conventions
*   Layout wrapping is standard: always import `src/layouts/Layout.astro` and wrap page structures appropriately.
*   Images/Icons should ideally be SVG path strings directly embedded to avoid layout shifts and minimize network requests, especially for simple UI interactions like "Clear Filters" or tag indicators.
