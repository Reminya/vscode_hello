# TypeScript Hello World Webpage

This is a simple TypeScript project that compiles a `Hello, world!` script and includes a basic HTML page to load it.

## Setup

1. Run `npm install` to install dependencies (TypeScript).
2. Run `npm run build` to compile the TypeScript source in `src/` to JavaScript in `dist/`.

> ⚠️ Network errors may prevent package installation. Ensure you have internet connectivity or install dependencies manually.

## Running

- You can open `public/index.html` in a browser after building.
- Or use a simple static server, e.g., `npx http-server public`.

## Deployment

Because this project is just static HTML/JavaScript, it can be hosted on any
static‑site provider. A few easy options:

1. **GitHub Pages** – push the repo to GitHub and then run the built-in
   deploy script. Set your `homepage` field in `package.json` to
   `https://<your-username>.github.io/<repo-name>` (replace placeholders) and
   make sure the repo is public.
   
   ```bash
   git init                     # if you haven't already
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git add .
   git commit -m "initial"
   git push -u origin main     # or master
   npm run deploy              # builds and publishes `public/` to gh-pages branch
   ```
   
   After a few moments your site should be live at the `homepage` URL above.

2. **Netlify / Vercel** – connect your GitHub repo and set the build command to
   `npm run build` with `public/` or `dist/` as the publish directory.

3. **Any static hosting** – upload the contents of `public/` (and the
   generated `dist/` JS file) to AWS S3, Azure Storage, Firebase Hosting, etc.

> 🔒 Make sure to run `npm run build` before deploying so `dist/index.js` is up
> to date.

## File Structure

- `src/` - TypeScript source code
- `dist/` - Compiled JavaScript output
- `public/` - HTML page referencing the compiled script

