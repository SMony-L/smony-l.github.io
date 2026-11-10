# Quick Reference Guide

## 🚀 Running Your Portfolio

Use Node.js 24 LTS and install the committed dependency versions with `npm ci`.

### Development
```bash
npm start
```
Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 Updating Content

The main profile content comes from `src/profileData.json`. Update these sections:

### 1. Personal Info (landing)
```json
{
  "landing": {
    "firstName": "Your First Name",
    "lastName": "Your Last Name",
    "phoneNumber": "(123) 456-7890",
    "bio": "Your bio text...",
    "email": "your@email.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### 2. Experience
```json
{
  "experience": [{
    "position": "Job Title",
    "organization": "Company Name",
    "aboutWork": "Description...",
    "fromDate": "January 2023",
    "toDate": "Present"
  }]
}
```

### 3. Education
```json
{
  "education": [{
    "university": "University Name",
    "degree": "Bachelor of Science",
    "major": "Your Major",
    "fromDate": "2015",
    "toDate": "2019"
  }]
}
```

### 4. Skills
```json
{
  "skills": [
    { "name": "JavaScript" },
    { "name": "Python" },
    { "name": "React" }
  ]
}
```

### 5. Projects
```json
{
  "projects": [{
    "title": "Project Name",
    "projectLang": "Technologies Used",
    "aboutProject": "Description..."
  }]
}
```

## 🎨 Customizing Colors

Edit `src/App.css` and change these CSS variables:

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

The project, skills, portrait, and footer surfaces also have component-specific colors in their respective CSS files. Keep the theme colors in `index.html` and `public/manifest.json` aligned with `--page-bg`; if `--accent` changes, update `public/favicon.svg` and regenerate the ICO and PNG icons. Check text contrast when changing the palette.

### Update the Highlights

The existing figures in the "At a glance" strip are in `src/Components/AIStats.jsx`, rather than the JSON file. Review them separately when your experience changes.

### Update Browser Branding

Edit the title in `index.html`, the name in `public/manifest.json`, and the monogram in `public/favicon.svg` when personalizing the site. Regenerate the ICO and PNG icon files from the updated SVG.

## 🖼️ Changing Profile Picture

Replace `src/Assets/profile.jpg` with your photo. Keep the same filename or update the import in `Landing.jsx`.

## 🔧 Common Tasks

### Add New Section
1. Create component in `src/Components/`
2. Import in `App.jsx`
3. Add to render method
4. Add navigation link in `Sidebar.jsx`

### Change Fonts
Edit the `@import` in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

Then update:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

### Adjust Animations
The portrait orbit is defined in `src/Components/Landing.css`. Reduced-motion behavior is in `src/App.css`.

## 📱 Testing Responsive Design

In browser DevTools:
- Press `F12` or `Cmd+Option+I` (Mac)
- Click device toolbar icon
- Test different screen sizes

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill
```

### Reinstall locked dependencies
```bash
npm ci
```

### Build errors
```bash
npm run build
# Check for errors in console
```

## 📚 File Structure

```
src/
├── App.jsx             # Main app component
├── App.css            # Global styles
├── index.jsx          # Entry point
├── index.css          # Base styles
├── profileData.json   # YOUR CONTENT HERE
├── Components/
│   ├── Sidebar.jsx    # Navigation
│   ├── Landing.jsx    # Hero section
│   ├── Experience.jsx # Work history
│   ├── Education.jsx  # Education
│   ├── Skills.jsx     # Skills grid
│   └── Projects.jsx   # Projects
└── Assets/
    └── profile.jpg    # Your photo
```

## ✅ Pre-Deployment Checklist

- [ ] Update all content in `profileData.json`
- [ ] Replace profile picture
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify contact information
- [ ] Update Google Analytics ID (if needed)
- [ ] Test production build locally
- [ ] Deploy to GitHub Pages

## 🌐 After Deployment

Your site will be live at: `https://yourusername.github.io`

Or your custom domain as configured in `package.json` homepage field.

## 💡 Tips

1. Keep descriptions concise and impactful
2. Use high-quality profile photo
3. Update regularly with new projects
4. Test on multiple devices
5. Get feedback from others

## 🎯 Next Steps

1. Fill in `profileData.json` with your information
2. Add your profile picture to `src/Assets/`
3. Test locally with `npm start`
4. Deploy with `npm run deploy`
5. Share your portfolio!

---

Need help? Check `DESIGN_NOTES.md` for detailed design documentation.
