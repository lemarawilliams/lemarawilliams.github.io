# Research Website

A clean academic research website built with Next.js, deploying to GitHub Pages.

## Setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # builds to /out
```

## Customizing your site

**All content lives in one file: `data/site.js`**

Edit it to update:
- Your name, title, institution, email, office
- Bio (separate paragraphs with a blank line)
- External profile links (Scholar, GitHub, ORCID, etc.)
- News items
- Publications

### Adding a photo

Drop `photo.jpg` into `public/`, then in `app/page.js` replace:
```jsx
{researcher.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
```
with:
```jsx
<img src="/photo.jpg" alt={researcher.name} />
```

### Adding your CV

Drop your CV PDF at `public/cv.pdf`. The CV page will embed and offer a download link automatically.

### Adding a new page (e.g. Projects)

1. Create `app/projects/page.js`
2. Add a link in `components/Nav.js`
3. Add any data to `data/site.js`

## Deploying to GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

## Tech

- Next.js 15 (static export)
- EB Garamond + Crimson Pro (Google Fonts)
- Zero dependencies beyond Next.js
- One workflow file, all Node.js 24-compatible actions
