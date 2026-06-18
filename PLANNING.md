# Studio Archovia Planning

## Project Summary

Studio Archovia is an English-language magazine-style home base for a curated architecture and interior design publication.

The site should support the brand as a serious editorial platform while TikTok and LinkedIn remain the main growth channels. The first version is intended to feel publishable soon, not like a disposable prototype.

## Brand Positioning

Studio Archovia is a curated daily digest of architecture and design.

The publication explores the built world through a selective lens, featuring projects, concepts, interiors, urbanism, materials, and visual ideas that shape how people live, move, and experience space.

Core qualities:

- Curated
- Editorial
- Spacious
- Refined
- Image-led
- Architecture and interiors focused
- Clear, consistent, and selective
- Luxurious without becoming visually loud

## Primary Goals

- Create a polished public website for Studio Archovia.
- Establish the brand as a credible architecture and design publication.
- Support growth of TikTok and LinkedIn.
- Provide a home base for curated posts, article previews, and visual archive content.
- Keep the MVP simple enough to publish soon.
- Leave a clean path toward a future CMS, admin dashboard, submissions, and social features.

## Audience

The website should work for several audience types:

- Architecture and interior design enthusiasts
- Designers, architects, and studios
- Potential collaborators
- People discovering the brand from TikTok
- LinkedIn visitors checking the legitimacy of the publication
- Future employers, clients, or partners
- General design lovers looking for inspiration

## MVP Scope

The current MVP is a static site with:

- Homepage hero
- Featured editorial story
- Journal / latest selections section
- Visual archive section
- Founder / curator highlight
- About section
- Contact placeholders
- TikTok and LinkedIn links
- Placeholder content and imagery

The MVP does not include:

- Admin dashboard
- CMS
- Database
- User accounts
- Comments
- Reblogging
- Submissions
- Newsletter backend
- Real contact form backend

## Current Pages / Sections

### Home

The first screen should feel like a refined magazine front page. It uses large editorial typography, a strong featured image, and restrained brand color.

### Journal

A preview of latest curated selections. This can later become a dedicated article listing page.

### Archive

A visual browsing area for architecture, interiors, urbanism, objects, and related categories.

### Founder / Curator

Highlights that Studio Archovia is curated by Gratto Grattjoes, Founder & Curator.

### About

Explains the publication and its editorial purpose.

### Contact

Currently includes placeholder email/contact text plus TikTok and LinkedIn links.

## Content Types

The site should eventually support multiple post formats:

- Feature: longer editorial article
- Daily Selection: short curated post
- Visual Essay: image-led post with limited text
- Project Note: structured post about a project, architect, designer, studio, or place
- Material Focus: design idea centered around materials and finishes
- Trend / Theme: editorial post about a broader spatial or design movement

## Suggested Content Fields

Future posts could include:

- Title
- Subtitle
- Slug
- Excerpt
- Category
- Tags
- Main image
- Gallery images
- Architect / designer / studio
- Location
- Year
- Source credit
- Image credit
- Author / curator
- Founder title
- Published date
- Featured status
- Post type

## Design Direction

The design should remain:

- Spacious
- Editorial
- Luxury magazine inspired
- Image-forward
- Mostly neutral
- Legible and accessible
- Calm enough for repeated browsing

The royal blue from the logo should remain an accent rather than the dominant page color.

Recommended visual system:

- Ivory / warm off-white background
- Near-black text
- Royal blue accent
- Cream logo tone
- Subtle borders
- Large serif headlines
- Clean sans-serif navigation and metadata
- Generous whitespace

## Technical Direction

Current implementation:

- Static HTML
- CSS
- Local logo asset
- External placeholder images
- No dependencies

This is intentional for the first MVP because it is easy to open, host, and iterate.

Possible future technical paths:

- Keep static and expand manually for a very lightweight publication.
- Move to Astro for content collections and fast static publishing.
- Move to Next.js if the project needs richer app behavior.
- Add a headless CMS when content management becomes necessary.
- Add a custom backend/admin area later if the platform becomes more advanced.

## Roadmap

### Phase 1: Static Publishable MVP

- Refine visual design
- Replace placeholder text with real brand copy
- Replace placeholder images with licensed or owned images
- Add proper metadata and SEO
- Add social preview image
- Add real email/contact destination
- Add analytics if needed

### Phase 2: Content System

- Add real posts
- Add categories and tags
- Add article detail pages
- Improve archive filtering
- Add search
- Add CMS or content files

### Phase 3: Editorial Platform

- Add newsletter signup
- Add submissions page
- Add image credits and source structure
- Add saved posts or collections
- Add richer article layouts

### Phase 4: Community / Social Layer

- Add user accounts
- Add saved boards
- Add Tumblr-style reposting or reblogging
- Add public collections
- Add moderation tools
- Add notifications if needed

## Next Session Priorities

Good next tasks:

- Review the current MVP with Gratto Grattjoes.
- Decide whether the site should remain static or move into Astro/Next.js.
- Replace placeholder copy with real launch copy.
- Decide on a real email address and contact flow.
- Decide whether to add separate article detail pages now.
- Choose 6 to 12 real or demo article topics for launch.
- Create social preview metadata and favicon assets.
