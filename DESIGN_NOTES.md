# Portfolio Design Notes

## Direction

The portfolio leads with the person's name, current role, biography, and portrait. An orbital illustration and a black, white, and electric-blue palette give the site an AI-inspired character without presenting decorative graphics as a working AI assistant.

The first screen pairs the introduction and contact actions with the portrait. Visitors can continue into projects, experience, skills, education, and a contact footer. Project and career descriptions remain sourced from `src/profileData.json`.

## Visual system

- **Colors:** Shared page, text, line, and accent variables live in `src/App.css`. Dark neutral surfaces, blue accents, and a blue footer carry the palette across the page; the portrait is displayed in grayscale.
- **Typography:** Sora is used for headings and Manrope for body copy, with system fallbacks in `src/index.css`.
- **Layout:** A sticky header replaces the fixed sidebar. Projects use a two-column showcase on wider screens; experience and education use readable, separated rows.
- **Motion:** The portrait orbit is decorative. The global reduced-motion rule stops it and minimizes transitions when the visitor requests less motion.

## Content and links

- Edit profile, experience, education, skills, and projects in `src/profileData.json`.
- The existing "At a glance" figures are maintained separately in `src/Components/AIStats.jsx`; verify them when updating the profile.
- The project footer links to the GitHub URL in the landing data. Email, phone, LinkedIn, and GitHub links also use the profile data.
- Replace `src/Assets/profile.jpg` to update the portrait. Its import is in `src/Components/Landing.jsx`.
- Browser and installed-site branding uses the monogram in `public/favicon.svg` and its ICO/PNG versions, with the site name in `index.html` and `public/manifest.json`.

## Responsive and accessibility details

The header collapses to a menu at 1000px, and the main layouts stack on smaller screens. The menu exposes its expanded state, closes on Escape or link selection, and returns focus to its button when dismissed with Escape. Sections remain addressable by their original fragment identifiers.
