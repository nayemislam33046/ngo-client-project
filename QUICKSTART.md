# Quick Start Guide - ASH Foundation Website

## 🚀 Get Started in 3 Steps

### Step 1: View the Website Now
1. Open `index.html` in your web browser
2. The website is fully functional (images will show as placeholders)

### Step 2: Add Images from Figma
1. Visit: https://www.figma.com/design/Bd7PQoqma2RmpzLNrejTXQ/Alhaj-Shamsul-Haque-Foundation?node-id=220-767
2. Download images and save to `assets/` folder
3. Refresh the browser to see the complete design

### Step 3: Deploy (Optional)
Choose your hosting platform:

#### Option A: Netlify (Easiest)
```bash
# Drag & drop your folder to netlify.com/drop
```

#### Option B: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
# Enable GitHub Pages in repository settings
```

#### Option C: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Project Files

```
New ashf/
├── index.html              ← Main website file
├── styles.css              ← All styling
├── script.js               ← Interactive features
├── assets/                 ← Place images here
├── README.md               ← Full documentation
├── PROJECT_SUMMARY.md      ← What's been built
└── QUICKSTART.md          ← This file
```

## 🖼️ Required Images

### Essential (Logo & Flags)
- `logo.png` (51×50px)
- `flag-bd.png` (22×15px)

### Hero & About
- `hero-image.jpg` (472×444px)
- `about-image.jpg` (472×444px)

### Donation Funds (6 images, 368×248px)
- `fund-general.jpg`
- `fund-gaza.jpg`
- `fund-zakat.jpg`
- `fund-guest-house.jpg`
- `fund-medical.jpg`
- `fund-rehabilitation.jpg`

### Projects (3 images, 368×248px)
- `project-solar.jpg`
- `project-tubewell.jpg`
- `project-mosque.jpg`

### Blog (3 images, 342×254px)
- `blog-1.jpg`
- `blog-2.jpg`
- `blog-3.jpg`

### Events (3 images, 368×200px)
- `event-1.jpg`
- `event-2.jpg`
- `event-3.jpg`

### Videos (3 images, 368×207px)
- `video-1.jpg`
- `video-2.jpg`
- `video-3.jpg`

### Gallery (8 images, 268×179-201px)
- `gallery-1.jpg` through `gallery-8.jpg`

### Map & Icons
- `world-map.jpg`
- `facebook.svg`, `twitter.svg`, `instagram.svg`, `youtube.svg`

## 🎨 How to Export from Figma

1. **Select Image Layer** in Figma
2. **Export Panel** appears on right →
3. Choose **PNG** (for photos) or **SVG** (for icons)
4. Click **Export [name]**
5. Save to `assets/` folder

### Quick Export Tips:
- **Logo**: Select node 220:771, export as PNG
- **Hero Image**: Select node 220:833, export as JPG
- **Flags**: Select nodes 220:775-789, export as PNG

## ✅ Testing Checklist

- [ ] Website opens in browser
- [ ] Navigation menu works
- [ ] Donation form accepts input
- [ ] Images load (after adding to assets)
- [ ] Mobile menu toggles (resize browser)
- [ ] Scroll to top button appears
- [ ] Gallery images open in modal
- [ ] Live chat button is visible

## 🔧 Customization

### Change Colors
Edit `styles.css`, search for:
- `#3D82CF` (Primary Blue)
- `#002556` (Dark Blue)
- `#F5F5F5` (Light Gray)

### Update Text
Edit `index.html` and search for text you want to change

### Add New Section
1. Copy existing section in `index.html`
2. Update content
3. Add styling in `styles.css`
4. Add functionality in `script.js` (if needed)

## 🐛 Troubleshooting

### Images Not Showing?
- Check file names match exactly
- Ensure images are in `assets/` folder
- Check browser console for errors (F12)

### Layout Broken on Mobile?
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different browsers
- Check responsive mode (F12 → Device toolbar)

### JavaScript Not Working?
- Open browser console (F12)
- Check for error messages
- Ensure `script.js` is linked in HTML

## 📱 Browser Support

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Partial Support:**
- Internet Explorer 11 (basic functionality)
- Older mobile browsers (some features may not work)

## 🌐 Going Live

### Before Launch:
- [ ] Add all images
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Test donation form
- [ ] Verify contact information
- [ ] Test loading speed
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Set up analytics
- [ ] Configure SSL certificate

### After Launch:
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Regular updates

## 💡 Pro Tips

1. **Performance**: Compress images before uploading (use tinypng.com)
2. **SEO**: Add meta descriptions in HTML head
3. **Security**: Use HTTPS for production
4. **Backup**: Keep regular backups of your site
5. **Updates**: Test changes on a staging site first

## 📞 Need Help?

- **Documentation**: Read `README.md` for details
- **Email**: shamsulhoquefoundation@gmail.com
- **Phone**: +88 01841 040544

## 🎉 You're Ready!

Your website is complete and ready to use. Just add the images and you're good to go!

**Estimated time to complete:**
- Adding images: 30-45 minutes
- Testing: 15-30 minutes
- Deployment: 5-10 minutes
- **Total: ~1-1.5 hours**

---

**Happy launching! 🚀**

