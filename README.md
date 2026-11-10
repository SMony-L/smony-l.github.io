# Personal Portfolio Website

A responsive personal portfolio built with React.js. A portrait-led, AI-inspired visual style showcases experience, education, skills, and projects while keeping the content easy to explore.

![React](https://img.shields.io/badge/React-16.8.6-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen.svg)

## 🌟 Features

- **AI-Inspired Design**: A portrait-led introduction with an orbital illustration and a black, white, and electric-blue palette
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Easy Customization**: Update the main profile content via a single JSON file
- **Accessible Navigation**: Keyboard-friendly navigation and support for reduced motion
- **SEO Friendly**: Semantic HTML structure for better discoverability
- **Fast Performance**: Optimized React components for quick load times
- **GitHub Pages Ready**: One-command deployment to GitHub Pages

## 🛠️ Technology Stack

- **Frontend Framework**: [React.js](https://reactjs.org/) (v16.8.6)
- **Styling**: CSS3 with modern features (Grid, Flexbox, Custom Properties)
- **Graphics**: Inline SVG and CSS
- **Fonts**: Google Fonts (Manrope & Sora)
- **Build Tool**: [Vite](https://vite.dev/)
- **Tests**: [Vitest](https://vitest.dev/) with jsdom
- **Deployment**: GitHub Pages via gh-pages
- **Analytics**: React GA for Google Analytics integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (24 LTS recommended; supported versions are listed in `package.json`) - [Download](https://nodejs.org/)
- **npm** - Comes with Node.js; use npm and the committed `package-lock.json`, not Yarn
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. **Install Dependencies**
   ```bash
   npm ci
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

## 💻 Usage

### Development

Run the development server with hot-reloading:
```bash
npm start
```

### Building for Production

Create an optimized production build:
```bash
npm run build
```

### Running Tests

Execute the test suite:
```bash
npm test
```

Use `npm run test:watch` for watch mode and `npm run preview` to preview the
production build. Build output remains in `build/` for GitHub Pages and Netlify.

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📝 Customization

### 1. Update Your Profile Information

Edit `src/profileData.json` to add your personal information:

```json
{
  "landing": {
    "firstName": "Your First Name",
    "lastName": "Your Last Name",
    "phoneNumber": "(123) 456-7890",
    "bio": "Your professional bio...",
    "email": "your@email.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  },
  "experience": [...],
  "education": [...],
  "skills": [...],
  "projects": [...]
}
```

### 2. Replace Profile Picture

Replace the file at `src/Assets/profile.jpg` with your photo. Keep the same filename or update the import in `src/Components/Landing.jsx`.

### 3. Customize Colors

Modify CSS variables in `src/App.css`:

```css
:root {
  --page-bg: #080b10;
  --surface: #11161e;
  --text-primary: #f5f8fc;
  --text-secondary: #c4ccd7;
  --accent: #52a8ff;
  --accent-cool: #a9d8ff;
  --on-accent: #071321;
}
```

Keep the theme colors in `index.html` and `public/manifest.json` aligned with
`--page-bg`. If you change `--accent`, update `public/favicon.svg` and
regenerate the ICO and PNG icons to match.

### 4. Update Portfolio Highlights

The four existing "At a glance" figures are defined in `src/Components/AIStats.jsx`.
Review and update them separately when your experience changes.

### 5. Update Browser Branding

The browser title is in `index.html`, and the installed-site name is in
`public/manifest.json`. The monogram source is `public/favicon.svg`; update the
ICO and PNG icon files as well if you replace it.

### 6. Configure Custom Domain

Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourdomain.com/"
```

Vite uses the pathname of `homepage` as the asset base. Set `PUBLIC_URL=/` to
override it for root-hosted deployments, as Netlify does. The HTML entry point
is `index.html` at the repository root; static assets remain in `public/`.

For detailed customization instructions, see [QUICK_START.md](QUICK_START.md).

## 📁 Project Structure

```
.
├── index.html             # Vite HTML entry point
├── vite.config.mjs        # Build and test configuration
├── public/                 # Static files
│   ├── favicon.svg        # Monogram icon source
│   ├── favicon.ico        # Browser fallback icon
│   ├── icon-192.png       # Installed-site and Apple touch icon
│   ├── icon-512.png       # Installed-site icon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   ├── index.jsx          # Entry point
│   ├── index.css          # Base styles
│   ├── profileData.json   # Your content (EDIT THIS!)
│   ├── Components/        # React components
│   │   ├── Sidebar.jsx    # Responsive header navigation
│   │   ├── Landing.jsx    # Hero/landing section
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Education.jsx  # Education section
│   │   ├── Skills.jsx     # Skills grid
│   │   └── Projects.jsx   # Projects showcase
│   └── Assets/            # Images and media
│       └── profile.jpg    # Your profile picture
├── package.json           # Project dependencies
├── QUICK_START.md         # Quick reference guide
├── DESIGN_NOTES.md        # Design documentation
└── README.md              # This file
```

## 🎨 Design Philosophy

This portfolio follows modern web design principles:

- **Personal First**: The introduction leads with the profile, current role, and portrait
- **AI-Inspired, Not AI-Dependent**: Orbital graphics suggest connected ideas without implying that the site contains a live assistant
- **Responsive First**: The navigation and layout adapt to desktop and mobile
- **Thoughtful Motion**: Decorative motion respects the visitor's reduced-motion preference

For detailed design documentation, see [DESIGN_NOTES.md](DESIGN_NOTES.md).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and structure
- Test your changes thoroughly
- Update documentation as needed
- Keep commits focused and descriptive

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# On macOS/Linux
lsof -ti:3000 | xargs kill

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Reinstall Locked Dependencies
```bash
npm ci
```

### Build Errors
Check the console output and ensure all dependencies are installed correctly.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vite.dev/) and [React](https://react.dev/)
- Orbital artwork and monogram rendered as SVG
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspired by modern portfolio design trends

## 📞 Support

If you encounter any issues or have questions:

1. Check the [QUICK_START.md](QUICK_START.md) guide
2. Review [DESIGN_NOTES.md](DESIGN_NOTES.md) for design details
3. Open an issue on GitHub
4. Contact the repository maintainer

## 🌐 Live Demo

Visit the live site at: [https://sovanmonylim.me/](https://sovanmonylim.me/)

---

**Happy Building!** 🚀 Don't forget to star ⭐ this repository if you find it helpful!
