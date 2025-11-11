# AGENTS.md

## Repository Overview
This is a personal GitHub profile repository containing a profile README.md file, an HTML resume page, and a portfolio website with GitHub Pages deployment.

## Tech Stack
- Markdown (GitHub profile README)
- HTML5 with embedded CSS
- SVG assets
- GitHub Actions (Pages deployment)

## Repo Structure
```
.
├── README.md                        # GitHub profile README
├── index.html                       # Portfolio website
├── AGENTS.md                        # This file
├── .github/
│   └── workflows/
│       └── pages.yml               # GitHub Pages deployment workflow
├── .gitignore                      # Git ignore patterns
└── assets/
    ├── README.md                   # Asset documentation
    ├── favicon.svg                 # Site favicon
    ├── favicon.ico                 # ICO format favicon
    ├── images/
    │   ├── profile-placeholder.svg
    │   ├── project-screenshot-1.svg
    │   ├── project-screenshot-2.svg
    │   └── project-screenshot-3.svg
    └── icons/
        ├── github.svg
        ├── linkedin.svg
        ├── email.svg
        └── web.svg
```

## Commands

**Initial Setup:**
```bash
# No setup required - static HTML/CSS
```

**Build:** Not configured (static site, no build needed)

**Lint:** Not configured

**Test:** Not configured

**Dev Server:** 
To preview locally, use any static server:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

## Architecture

Repository contains static content:
- README.md: GitHub profile information with stats and trophies
- index.html: Complete portfolio website with:
  - Responsive design (mobile-first)
  - Embedded CSS (no external dependencies)
  - Profile section with photo placeholder
  - About Me section
  - Projects showcase (3 cards)
  - GitHub Stats integration
  - Social links section
- assets/: Optimized SVG images (all < 2KB each)
- .github/workflows/pages.yml: Automated GitHub Pages deployment

**GitHub Pages Deployment:**
- Automatic deployment on push to main branch
- Requires Pages source set to "GitHub Actions" in repository settings
- Uses official GitHub Actions: checkout, configure-pages, upload-pages-artifact, deploy-pages

## Code Style

Follow standard conventions:
- Markdown: Standard GitHub-flavored Markdown
- HTML: Semantic HTML5 structure with proper accessibility attributes
- CSS: Embedded in HTML, mobile-first responsive design
- SVG: ViewBox-based (no fixed dimensions), optimized for web
- Icons: Stroke-based with currentColor for theming

## Next Steps

1. **Enable GitHub Pages**: Repository Settings → Pages → Source: "GitHub Actions"
2. **Customize content**:
   - Replace `assets/images/profile-placeholder.svg` with actual photo
   - Update project cards in index.html with real projects
   - Add real descriptions and links
   - Update social links (LinkedIn URL, email address)
3. **Deploy**: Push to main branch (automatic via GitHub Actions)
4. **Verify**: Check Actions tab for deployment status
