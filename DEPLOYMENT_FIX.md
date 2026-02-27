# Deployment Fix Guide

## Issues Fixed
1. ✅ Resume moved to `public/` folder
2. ✅ Environment variable template updated

## What You Need to Do

### Step 1: Deploy Your Backend
Your backend needs to be deployed first. Options:
- **Render** (Free): https://render.com
- **Railway** (Free tier): https://railway.app
- **Heroku** (Paid): https://heroku.com
- **AWS/Azure/GCP**

### Step 2: Update Frontend Environment Variable
After deploying your backend, update `Frontend/.env`:

```env
VITE_API_URL=https://your-actual-backend-url.com
```

Replace `https://your-actual-backend-url.com` with your deployed backend URL.

### Step 3: Rebuild and Redeploy Frontend
```bash
cd Frontend
npm run build
```

Then redeploy your frontend with the new build.

## Important Notes
- The `.env` file is NOT included in your build by default
- Environment variables must be set in your deployment platform (Vercel/Netlify/etc.)
- For Vercel: Add `VITE_API_URL` in Project Settings → Environment Variables
- For Netlify: Add in Site Settings → Environment Variables

## Testing Locally
To test with your deployed backend locally:
```bash
cd Frontend
# Update .env with deployed backend URL
npm run dev
```
