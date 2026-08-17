<<<<<<< HEAD
# Portfolio
Personal Portfolio for all of my work both in Computer Science and Private Projects
=======
# Portfolio Site

A static portfolio site — no build step, no dependencies. Just HTML, CSS, and vanilla JS.

## Structure

```
index.html          — page structure
css/style.css        — all styling (design tokens at the top)
js/content.js         — YOUR CONTENT LIVES HERE — name, projects, videos, about, contact
js/script.js          — renders content.js into the page + interactions
```

## Editing your content

Open `js/content.js`. Every piece of text on the site — your name, role, project
list, video list, about paragraph, email, and social links — is defined there as
plain JavaScript objects. Edit the values, save, refresh the page. You never need
to touch the HTML or CSS to update your work.

To add a project, copy an existing entry inside the `projects` array in
`content.js` and change the fields. Same for `videos`.

## Adding real images

The current design is intentionally text/typography-led (no project thumbnails),
matching the reference look you asked for. If you'd like to add preview images
per project:

1. Drop image files into `assets/` (e.g. `assets/kinetic.jpg`).
2. Add an `image: "assets/kinetic.jpg"` field to the relevant project in
   `content.js`.
3. In `script.js`, inside the `projects.forEach` loop, add an `<img>` using
   `p.image` and show/hide it on hover via CSS — ask me and I can wire this up
   for you directly.

## Running locally

No build tools needed. Just open `index.html` in a browser, or for a local
server (recommended, avoids some browser file:// quirks):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Push this folder's contents to the repo's root (or to a `docs/` folder —
   see step 4).
3. In your terminal, from inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. On GitHub: go to **Settings → Pages**.
   - Under "Build and deployment", set **Source** to "Deploy from a branch".
   - Set **Branch** to `main` and folder to `/ (root)` (or `/docs` if you
     pushed there instead).
   - Save.
5. GitHub will publish your site at:
   `https://<your-username>.github.io/<your-repo>/`
   (This can take 1–2 minutes on first deploy.)

If you want the site at the root of `<your-username>.github.io` (no repo name
in the URL), name the repository exactly `<your-username>.github.io` and push
to its `main` branch — no Pages settings needed, it deploys automatically.

## Notes

- Fonts (Fraunces, JetBrains Mono, Inter) load from Google Fonts via `<link>`
  tags in `index.html` — no local font files needed, but the site does require
  an internet connection to render the intended type.
- The terminal hero has a typing animation. It automatically respects
  `prefers-reduced-motion` for anyone who has that OS setting on.
>>>>>>> origin/master
