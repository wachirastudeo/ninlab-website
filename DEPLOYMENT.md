# Ninlab Website - Vercel Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd /Users/pae/photoapp/photoraw/website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ninlab website"

# Create GitHub repo and push
# (Create a new repo on GitHub first, then:)
git remote add origin https://github.com/YOUR_USERNAME/ninlab-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `ninlab-website` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Step 3: Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 📋 Pre-Deployment Checklist

- [x] `.gitignore` configured
- [ ] Add real app screenshots to `/public/screenshots/`
- [ ] Update Buy Me a Coffee link in Hero.tsx
- [ ] Update email links (if needed)
- [ ] Test build locally: `npm run build`

---

## 🔧 Local Testing

```bash
# Development
npm run dev

# Production build test
npm run build
npm start
```

---

## 📝 Environment Variables (if needed)

If you need any API keys or secrets, add them in Vercel:
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

---

## ✅ Your website will be live at:
- **Vercel URL**: `https://ninlab-website.vercel.app`
- **Custom Domain**: (if configured)

Good luck! 🎉
