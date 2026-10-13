# Sara Ghanbari — Portfolio

React and Vite portfolio for front-end development and applied machine learning.

## Development

Requires Node.js 22. Run `npm ci`, then `npm run dev`.

- `npm run lint`: lint JavaScript and React.
- `npm run build`: create the production site in `dist/`.
- `npm run preview`: preview the production build.

## Organization

- `src/components/sections`: introduction, about, projects, experience, and contact.
- `src/components/projects`: shared cards, gallery, and accessible details dialog.
- `src/components/visuals`: SVG illustrations, landscape, and interactive stars.
- `src/data`: profile, projects, and career content.
- `src/hooks`: gallery measurement, section navigation, clipboard, and pointer effects.
- `src/styles`: component styles and responsive layouts, imported through `App.css`.
- `public/images` and `public/resumes`: portrait and downloadable PDFs.

Edit personal information in `src/data/profile.js`, projects in `src/data/portfolio.js`, and education/career entries in `src/data/experience.js`. Project artwork is conceptual, not client screenshots.

The desktop navigation rail sits left of the profile sidebar. Mobile profile details appear in the introduction. Navigation keeps the URL fragment synchronized with the visible section. Galleries scroll only when their cards overflow. Motion respects the reduced-motion preference.

## Deployment

The repository is published at https://sara-ghanbari.github.io/ through GitHub Pages.
In repository **Settings → Pages**, select **GitHub Actions** as the source.
Pushing to `main` runs `.github/workflows/deploy.yml`: install locked dependencies, lint, build, and deploy `dist/`.

The Vite base path is `/` because this repository hosts the account's root website. Never commit `node_modules`, `dist`, credentials, or local environment files.
