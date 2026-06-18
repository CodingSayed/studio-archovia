# Studio Archovia Decisions

This file records the decisions made during the initial planning and MVP creation session.

## Confirmed Decisions

### Language

The website will be in English.

### Brand Role

Studio Archovia should feel like a standalone publication, while still making the founder visible.

Founder credit for now:

`Gratto Grattjoes, Founder & Curator`

### Site Purpose

The website is the official home base for Studio Archovia.

TikTok and LinkedIn are the main audience growth channels. The website should support those channels by giving the brand a polished, credible, and organized destination.

### Visual Direction

The site should be magazine-style, spacious, editorial, and luxurious.

The design should not feel like a generic blog, startup landing page, or corporate portfolio.

### Logo

Use the current Studio Archovia logo image.

The logo uses royal blue and cream. The royal blue should appear on the website, but only as a controlled accent for UX and brand moments.

### Layout Direction

The MVP should use a spacious layout rather than a dense Dezeen-style news grid.

Dezeen remains a useful reference for editorial credibility, but the current direction is calmer and more luxury-magazine inspired.

### Content Style

The site should support a mix of content types:

- Short curated posts
- Longer editorial articles
- Image-led visual essays
- Project notes
- Archive-style entries

Placeholder content is acceptable for the MVP.

### Author Display

Posts should show the founder name for now, with the title `Founder & Curator`.

### MVP Scope

The first version should be publishable soon.

The current MVP is intentionally static and lightweight. It does not include a full-stack backend yet.

### Social Links

TikTok:

`https://www.tiktok.com/@studioarchovia`

LinkedIn:

`https://www.linkedin.com/company/studio-archovia`

### Contact

The MVP may include social links plus placeholder email/contact form text.

A real email address and working contact form can be added later.

## Deferred Decisions

### Admin Dashboard

Deferred.

An admin dashboard or CMS can be added later after the content model and publishing rhythm are clearer.

### Reblogging

Deferred.

Tumblr-style reblogging is interesting, but it should not be included in the MVP. It may become a later social/community feature.

### Submissions

Deferred.

Project submissions from studios or designers may be useful later, but they are not part of the MVP.

### Full-Stack Architecture

Deferred.

Possible future paths include Astro, Next.js, a headless CMS, or a custom backend. The current version stays dependency-free until the next technical direction is chosen.

### Real Content and Images

Deferred.

The MVP uses placeholders. Before publishing widely, replace placeholder content and external placeholder images with real, credited, licensed, or owned material.

## Current Implementation Decisions

### Project Location

`C:\Projects\professional_projects\studio_archovia`

### Current File Structure

- `index.html`
- `styles.css`
- `README.md`
- `PLANNING.md`
- `DECISIONS.md`
- `assets/logo.jpeg`

### Current Tech

- Static HTML
- CSS
- No JavaScript required
- No build step
- No package dependencies

### Verification Performed

The current layout was visually checked with headless Microsoft Edge at desktop and mobile viewport sizes.

Issues fixed during review:

- Header logo was too small and hard to read.
- Hero text overlapped the feature card on desktop.
- Hero text caused horizontal overflow on mobile.
- LinkedIn URL was added.
- External links were updated with `noopener noreferrer`.
- Keyboard focus styling was added.

## Do Not Change Without Rechecking

- Keep the current luxury editorial direction unless the founder prefers a denser daily-digest layout.
- Keep royal blue as an accent, not the dominant background color.
- Keep the MVP simple until there is a clear need for a CMS or admin dashboard.
- Do not add reblogging, accounts, or submissions until the brand and content workflow are validated.
