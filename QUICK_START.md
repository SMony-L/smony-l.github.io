# Quick Reference Guide

## 🚀 Running Your Portfolio

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

All content comes from `profileData.json`. Update these sections:

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
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --dark-bg: #0f1419;
  --card-bg: #1a1f2e;
  --text-primary: #e4e6eb;
  --text-secondary: #b0b3b8;
}
```

### Popular Color Schemes

**Blue Theme:**
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #4facfe 100%);
```

**Orange/Red Theme:**
```css
--primary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Green Theme:**
```css
--primary-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
```

**Cyan Theme:**
```css
--primary-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

## 🖼️ Changing Profile Picture

Replace `src/Assets/profile.jpg` with your photo. Keep the same filename or update the import in `Sidebar.js`.

## 🔧 Common Tasks

### Add New Section
1. Create component in `src/Components/`
2. Import in `App.js`
3. Add to render method
4. Add navigation link in `Sidebar.js`

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
Change animation delays in components:
```jsx
style={{ animationDelay: `${index * 0.1}s` }}
```

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

### Clear cache
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check for errors in console
```

## 📚 File Structure

```
src/
├── App.js              # Main app component
├── App.css            # Global styles
├── index.js           # Entry point
├── index.css          # Base styles
├── profileData.json   # YOUR CONTENT HERE
├── Components/
│   ├── Sidebar.js     # Navigation
│   ├── Landing.js     # Hero section
│   ├── Experience.js  # Work history
│   ├── Education.js   # Education
│   ├── Skills.js      # Skills grid
│   └── Projects.js    # Projects
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
