# EnterNet

A small static movie-streaming website prototype — think a mini Netflix clone built with plain HTML, CSS, and JavaScript. Good for learning how multi-page front-end sites fit together.

## What it does

- **Login page** (`index.html`): username/password form with a "remember me" option. Remembered credentials are stored in `localStorage`; a hardcoded demo account logs you in and redirects to the home page.
- **Home page** (`home.html`): "EnterNet" branding, top nav (Home, Account, History, Settings), featured-title cards, and scrolling movie rows ("Top Movies", "Hollywood Movies", "Bollywood Movies"). Has separate desktop and mobile layouts with a hamburger side menu.
- **Watch page** (`watch.html`): HTML5 video player that plays `sample-30s.mp4`, plus a "Similar Movies" thumbnail grid.
- **History page** (`history.html`): a static list of previously watched movies with watched-on dates.
- **Account page** (`account.html`): a profile page showing a user avatar and details (name, username, email, address, phone).
- **Settings page** (`setting.html`): placeholder page (currently empty).
- Menu toggles are handled in vanilla JS (`home.js`, `watch.js`, `history.js`); decorative animated grids are drawn with JS too (`account.js`, `index.html`).

## Tech stack

- HTML5, CSS3, vanilla JavaScript — no build step, no frameworks
- [Font Awesome 6.5.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) via CDN (icons in the mobile nav)

## Project structure

```
EnterNet/
├── index.html      # Login page (entry point)
├── home.html       # Home / browse page
├── watch.html      # Video player page
├── history.html    # Watch history page
├── account.html    # User profile page
├── setting.html    # Settings placeholder (empty)
├── s.js            # Login logic (localStorage + demo credentials)
├── home.js         # Mobile nav toggle for home page
├── watch.js        # Mobile nav toggle for watch page
├── history.js      # Mobile nav toggle for history page
├── account.js      # Animated grid generator for account page
├── st.css          # Login page styles
├── s.css           # Home page styles
├── watch.css       # Watch page styles
├── history.css     # History page styles
├── account.css     # Account page styles
├── sample-30s.mp4  # Demo video played on the watch page
└── *.jpg           # Movie poster thumbnails
```

## Run it locally

There is no build step and no server required — just open `index.html` in a browser. For the smoothest experience (video + relative links), serve the folder with any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`.

## Notes

- This is a front-end-only learning project: there is no backend, database, or real authentication. The login accepts the demo credentials coded in `s.js` and everything else is static placeholder content.
