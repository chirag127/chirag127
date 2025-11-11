# Assets Directory

This directory contains optimized assets for the website and GitHub profile.

## Structure

```
assets/
├── favicon.ico          # Standard favicon (16x16 ICO format)
├── favicon.svg          # Scalable favicon (optimized SVG)
├── images/
│   ├── profile-placeholder.svg     # Profile photo placeholder (optimized SVG)
│   ├── project-screenshot-1.svg    # Project screenshot/preview 1
│   ├── project-screenshot-2.svg    # Project screenshot/preview 2
│   └── project-screenshot-3.svg    # Project screenshot/preview 3
└── icons/
    ├── github.svg       # GitHub icon (optimized SVG)
    ├── linkedin.svg     # LinkedIn icon (optimized SVG)
    ├── email.svg        # Email icon (optimized SVG)
    └── web.svg          # Website icon (optimized SVG)
```

## Optimization

All images are created as SVG files for optimal web performance:
- **Scalable**: SVGs scale to any size without quality loss
- **Small file size**: Text-based format results in minimal bandwidth usage
- **Fast loading**: Lightweight files load quickly even on slow connections
- **Inline-able**: Can be embedded directly in HTML for fewer HTTP requests
- **Accessible**: Can be styled with CSS and made accessible with ARIA labels

## Usage

### In HTML
```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="alternate icon" href="assets/favicon.ico">

<!-- Profile Image -->
<img src="assets/images/profile-placeholder.svg" alt="Profile Photo" width="200" height="200">

<!-- Icons -->
<img src="assets/icons/github.svg" alt="GitHub" width="24" height="24">
```

### In Markdown
```markdown
![Profile](assets/images/profile-placeholder.svg)
![Project Screenshot](assets/images/project-screenshot-1.svg)
```

## Replacing Placeholders

To replace the placeholder images with your own:

1. **Profile Photo**: Replace `profile-placeholder.svg` with your actual photo
   - Recommended format: SVG, PNG, or JPEG
   - Recommended size: 400x400px or larger
   - Optimize using tools like [TinyPNG](https://tinypng.com/) or [SVGOMG](https://jakearchibald.github.io/svgomg/)

2. **Project Screenshots**: Replace the screenshot SVGs with actual project images
   - Recommended format: SVG, PNG, or JPEG
   - Recommended size: 800x600px or larger
   - Use [Squoosh](https://squoosh.app/) for optimization

3. **Favicon**: Customize the existing SVG or create your own
   - Keep it simple for small sizes (16x16, 32x32)
   - Generate ICO from SVG using [RealFaviconGenerator](https://realfavicongenerator.net/)

## Best Practices

- Keep file sizes under 500KB for images
- Use descriptive, lowercase filenames with hyphens
- Include alt text for all images
- Test images on different devices and screen sizes
- Consider dark mode compatibility for icons
