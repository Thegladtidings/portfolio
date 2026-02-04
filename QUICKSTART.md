# Quick Start Guide

Get your MERN portfolio running in 5 minutes.

## Step 1: MongoDB Atlas Setup (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free
3. Create a new cluster (select "M0 Free" tier)
4. Wait for cluster to deploy (about 5-10 minutes)
5. Click "Connect" button
6. Copy your connection string (looks like: `mongodb+srv://username:password@cluster0.mongodb.net/...`)
7. Replace `username` and `password` with your actual credentials

## Step 2: Start Backend (1 minute)

```bash
cd server
npm install
```

Create `/server/.env` file:
```
MONGODB_URI=your_connection_string_here
PORT=5000
NODE_ENV=development
```

Run these commands:
```bash
npm run seed
npm run dev
```

**You should see:** "Server running on port 5000" and "MongoDB connected successfully"

## Step 3: Start Frontend (1 minute)

In a new terminal (keep backend running):

```bash
npm install
npm run dev
```

**You should see:** "Ready in X ms"

## Step 4: Test Your Portfolio

1. Open http://localhost:3000 in your browser
2. Check if your projects and skills load from the database
3. Scroll to Contact section and send a test message
4. Message should appear in MongoDB

## Common Issues

**"MongoDB connection error"**
- Check your MONGODB_URI in .env
- Make sure your IP is whitelisted in MongoDB Atlas (use 0.0.0.0 for development)

**"Cannot GET /api/projects"**
- Make sure backend is running on port 5000
- Check console for errors

**"Failed to fetch"**
- Frontend can't reach backend
- Verify backend is running
- Check if port 5000 is available

## Next Steps

### Add Your Real Projects
Send POST request to update projects:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "VTU App",
    "description": "App for buying airtime",
    "image": "image-url",
    "tags": ["React Native", "Expo", "Node.js"],
    "link": "https://myapp.com",
    "github": "https://github.com/username/repo"
  }'
```

### Deploy to Production
1. Backend: Deploy to Render, Railway, or Heroku
2. Frontend: Deploy to Vercel
3. Update API URLs in components

## Useful Commands

```bash
# Backend
cd server
npm run dev      # Start with auto-reload
npm run seed     # Populate database
npm start        # Run without auto-reload

# Frontend
npm run dev      # Development server
npm run build    # Production build
npm run start    # Run production build
```

## File Locations to Remember

- Backend code: `/server/`
- Frontend code: `/app/`, `/components/`
- MongoDB connection: `/server/.env`
- Your contact info: `/components/Contact.jsx`
- Your projects: MongoDB database (see how to add them above)

## Need Help?

1. Check the full README.md
2. Review the code comments
3. Check MongoDB Atlas console for data
4. Check browser console for frontend errors
5. Check terminal for backend errors

You're all set! Your MERN portfolio is now running!
