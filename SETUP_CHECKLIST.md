# MERN Portfolio Setup Checklist

Complete these steps in order to get your portfolio running.

## Phase 1: MongoDB Setup (Do First)

- [ ] Go to https://www.mongodb.com/cloud/atlas
- [ ] Create a free account (use your email)
- [ ] Create a new project
- [ ] Create a free cluster (M0 tier)
- [ ] Wait for cluster to deploy (5-10 minutes)
- [ ] Click "Database" in sidebar
- [ ] Click "Connect" button
- [ ] Choose "Connect your application"
- [ ] Select "Node.js" and version "4.x or later"
- [ ] Copy your connection string
- [ ] Save it somewhere safe (you'll need it next)

### Connection String Format
```
mongodb+srv://username:password@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Phase 2: Backend Setup

- [ ] Open terminal/command prompt
- [ ] Navigate to project folder: `cd path/to/project`
- [ ] Go to server folder: `cd server`
- [ ] Run: `npm install` (wait for completion)
- [ ] Create `.env` file: `cp .env.example .env`
- [ ] Open `.env` file in text editor
- [ ] Paste your MongoDB connection string
- [ ] Save `.env` file
- [ ] Run: `npm run seed` (should see "Database seeding completed!")
- [ ] Run: `npm run dev`
- [ ] Check terminal output for: "Server running on port 5000"
- [ ] Check terminal output for: "MongoDB connected successfully"

### Verification
```bash
# In new terminal, test API
curl http://localhost:5000/api/projects
# Should return array with 2 projects
```

## Phase 3: Frontend Setup

- [ ] Open new terminal/command prompt
- [ ] Go to project root: `cd path/to/project` (one level up)
- [ ] Run: `npm install` (wait for completion)
- [ ] Run: `npm run dev`
- [ ] Check terminal output for: "Ready in Xs"
- [ ] Open browser to: http://localhost:3000
- [ ] You should see your portfolio loading

### Verification in Browser
- [ ] Can you see the hero section with your name?
- [ ] Can you see "MERN Stack Specialist" badge?
- [ ] Can you scroll down?
- [ ] Do you see the Projects section loading?
- [ ] Do you see the Skills section?
- [ ] Do you see the Contact form?

## Phase 4: Test All Features

### Test Projects Section
- [ ] Projects page loads
- [ ] Can see VTU App project
- [ ] Can see QR Code Attendance project
- [ ] Images load
- [ ] Tags display correctly

### Test Skills Section
- [ ] Skills page loads
- [ ] Can see all 6 skill categories
- [ ] Skills list under each category
- [ ] No errors in console

### Test Contact Form
- [ ] Scroll to contact section
- [ ] Fill in name: "Test User"
- [ ] Fill in email: "test@example.com"
- [ ] Fill in message: "This is a test"
- [ ] Click "Send Message"
- [ ] See success message appear
- [ ] Open MongoDB Atlas
- [ ] Go to Collections → messages
- [ ] Your test message should appear there!

### Test Navigation
- [ ] Click on header links
- [ ] Page scrolls to sections smoothly
- [ ] All sections accessible

## Phase 5: Customize (Optional)

- [ ] Edit `/components/Hero.jsx` - Update tagline
- [ ] Edit `/components/Contact.jsx` - Update contact info
- [ ] Edit `/app/globals.css` - Change theme colors
- [ ] Add real project images:
  ```bash
  curl -X POST http://localhost:5000/api/projects \
    -H "Content-Type: application/json" \
    -d '{
      "title": "Your Project Title",
      "description": "Description",
      "image": "https://image-url.jpg",
      "tags": ["Tag1", "Tag2"],
      "link": "https://project.com",
      "github": "https://github.com/repo"
    }'
  ```

## Phase 6: Deployment (When Ready)

### Backend Deployment (Render.com)
- [ ] Create Render.com account
- [ ] Connect GitHub repository
- [ ] Create new Web Service
- [ ] Select your repository
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Add environment variable: `MONGODB_URI` = your connection string
- [ ] Deploy
- [ ] Copy your Render URL

### Frontend Deployment (Vercel.com)
- [ ] Create Vercel.com account
- [ ] Connect GitHub repository
- [ ] Project imports automatically
- [ ] Add environment variable: `NEXT_PUBLIC_API_URL` = your Render URL
- [ ] Deploy
- [ ] Your portfolio is live!

## Troubleshooting Checklist

### Backend won't start
- [ ] Check Node.js installed: `node --version`
- [ ] Check npm installed: `npm --version`
- [ ] Check .env file exists in /server folder
- [ ] Check MONGODB_URI is correct (no spaces, full URL)
- [ ] Check internet connection
- [ ] Try: `npm install` again in /server
- [ ] Check MongoDB Atlas status (is cluster running?)
- [ ] Check if port 5000 is already in use

### Frontend won't start
- [ ] Check Node.js installed
- [ ] Check npm installed
- [ ] Try: `npm install` again
- [ ] Delete `node_modules` folder and `.next` folder
- [ ] Run: `npm install` then `npm run dev`
- [ ] Check if port 3000 is already in use

### Projects don't load
- [ ] Is backend running? (terminal should say "Server running on port 5000")
- [ ] Did you run `npm run seed`?
- [ ] Check browser console (F12 → Console tab)
- [ ] Check network tab (F12 → Network tab)
- [ ] Try: `curl http://localhost:5000/api/projects` in another terminal
- [ ] Restart both servers

### Form doesn't submit
- [ ] Is backend running?
- [ ] Check browser console for errors
- [ ] Check MongoDB connection in .env
- [ ] Try submitting again
- [ ] Check MongoDB Atlas for new messages

### MongoDB connection fails
- [ ] Copy connection string again from MongoDB Atlas
- [ ] Make sure it has `<password>` replaced with your real password
- [ ] Add your IP to MongoDB Atlas whitelist (or use 0.0.0.0)
- [ ] Check internet connection
- [ ] Try: `npm run seed` again

## Quick Test After Setup

```bash
# In terminal 1 (backend):
cd server
npm run dev

# In terminal 2 (frontend):
npm run dev

# In browser:
Visit http://localhost:3000

# In terminal 3 (test API):
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/skills
curl http://localhost:5000/api/messages
```

All three should show data! ✅

## Important Reminders

- ⚠️ Keep .env file private (don't share it)
- ⚠️ Don't commit .env to GitHub
- ⚠️ MongoDB URI contains your password
- ⚠️ Keep MongoDB Atlas tab open for reference
- ⚠️ Use localhost:3000 for frontend, :5000 for backend
- ⚠️ Always run backend BEFORE frontend

## Success Indicators

You're successful when:
- ✅ Backend shows "MongoDB connected successfully"
- ✅ Frontend shows "Ready in Xs"
- ✅ Browser displays your portfolio at localhost:3000
- ✅ Projects load from database
- ✅ Skills load from database
- ✅ Contact form submits successfully
- ✅ Messages appear in MongoDB Atlas

## What to Do Next

1. **Local Testing** - Make sure everything works locally
2. **Add Your Content** - Update projects with your real work
3. **Customize Design** - Adjust colors, fonts, text
4. **Deploy** - Follow Phase 6 to deploy to internet
5. **Share** - Give your portfolio URL to employers/clients

## Need Help?

Read these files in this order:
1. START_HERE.md (overview)
2. QUICKSTART.md (setup instructions)
3. README.md (detailed documentation)
4. IMPLEMENTATION_SUMMARY.md (what was built)
5. ARCHITECTURE.md (how it works)

**Check console for error messages** - they'll tell you what's wrong!

---

✅ **All items checked? Congratulations!**

Your MERN stack portfolio is complete and running! 🎉

Now customize it with your real content and deploy it to the world!
