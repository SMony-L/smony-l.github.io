# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js. This project provides a clean, professional platform to showcase your experience, education, skills, and projects with a beautiful dark-themed UI.

![React](https://img.shields.io/badge/React-16.8.6-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen.svg)

## 🌟 Features

- **Modern Dark Theme**: Eye-friendly dark color scheme with gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Easy Customization**: Update content via a single JSON file
- **Smooth Animations**: Elegant transitions and scroll effects
- **SEO Friendly**: Semantic HTML structure for better discoverability
- **Fast Performance**: Optimized React components for quick load times
- **GitHub Pages Ready**: One-command deployment to GitHub Pages

## 🛠️ Technology Stack

- **Frontend Framework**: [React.js](https://reactjs.org/) (v16.8.6)
- **Styling**: CSS3 with modern features (Grid, Flexbox, Custom Properties)
- **Icons**: [FontAwesome](https://fontawesome.com/) for scalable vector icons
- **Fonts**: Google Fonts (Inter & Space Grotesk)
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

Replace the file at `src/Assets/profile.jpg` with your photo. Keep the same filename or update the import in `src/Components/Sidebar.jsx`.

### 3. Customize Colors

Modify CSS variables in `src/App.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --dark-bg: #0f1419;
  --card-bg: #1a1f2e;
  --text-primary: #e4e6eb;
  --text-secondary: #b0b3b8;
}
```

### 4. Configure Custom Domain

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
│   ├── favicon.ico        # Site favicon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   ├── index.jsx          # Entry point
│   ├── index.css          # Base styles
│   ├── profileData.json   # Your content (EDIT THIS!)
│   ├── Components/        # React components
│   │   ├── Sidebar.jsx    # Navigation sidebar
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

- **Clean & Minimal**: Focus on content without visual clutter
- **Dark Theme**: Reduces eye strain and creates a professional look
- **Gradient Accents**: Adds visual interest without overwhelming
- **Responsive First**: Mobile-friendly design that scales beautifully
- **Smooth Animations**: Enhances user experience without being distracting

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
- Icons by [FontAwesome](https://fontawesome.com/)
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
