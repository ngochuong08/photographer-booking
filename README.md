Photographer Booking — React scaffold

This repository contains a minimal Vite + React scaffold for a photographer booking platform. It's intentionally small so you can drop your existing HTML/CSS theme into `public/theme` and wire classes into components.

Quick start

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Importing your theme

- Copy the template into `public/theme` manually OR run the helper script:

```bash
# from project root
./scripts/import-theme.sh /Users/mac/Documents/photographer_booking/Photographer/doccure.dreamstechnologies.com/html/template
```

This script copies the theme `assets/` (CSS/JS/img/fonts) into `public/theme/assets` and also copies HTML files so you can inspect them. The Next layout already links common CSS/JS under `/theme/assets`.

Where to put your theme

- Copy your theme files into `public/theme`. Keep CSS and JS files there and reference them from `index.html` or import into components.
- `src/components/Layout.jsx` contains the top-level layout; replace markup and class names to match your theme.

Next steps

- Hook up an API (recommended: /api) and replace placeholder data in `src/pages/Search.jsx`.
- Implement authentication and booking state.
- Add tests and CI when ready.
