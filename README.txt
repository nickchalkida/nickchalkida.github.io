Euclid Elements static pages — Chalkis 28px + Lato bold + diagrams at 1.2x

Contents:
- Elements-Book-01.html through Elements-Book-13.html
- Elements-Index.html
- sitemap.xml
- Chalkis.ttf
- Lato-Bold.ttf
- LATO-LICENSE.txt
- generate_elements_pages_chalkis_120_lato.py

Install:
1. Copy the generated HTML files, sitemap.xml, Chalkis.ttf, and Lato-Bold.ttf into the
   root of the nickchalkida.github.io repository, alongside your existing Elements.html,
   ET1234.js, and images directory.
2. Commit and push the changes.

Typography:
- Regular text: Chalkis, 28px, line-height 1.20.
- Bold inline text: Lato Bold, with Chalkis fallback for unsupported glyphs.
- Diagrams on desktop: 1.2 times each image's intrinsic pixel width, floated right so text
  flows alongside; constrained to 55% of content width only when needed to prevent overflow.
- On screens 760px wide or narrower, diagrams return to normal flow and fit the screen.

Regenerate later:
  python3 generate_elements_pages_chalkis_120_lato.py ET1234.js .

The source file is read only. Existing Elements.html and ET1234.js are not modified.
Images are expected to remain at their existing relative paths under images/elements/.
