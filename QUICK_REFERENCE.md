# Quick Reference Card

Keep this handy while working on your portfolio!

## Essential Commands

```bash
# Backend Setup & Running
cd server
npm install
npm run seed
npm run dev

# Frontend Setup & Running
npm install
npm run dev

# Testing API
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/skills
curl http://localhost:5000/api/messages
```

## Important URLs

| Service | URL |
|---------|-----|
| Portfolio (local) | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| MongoDB Atlas | https://cloud.mongodb.com |
| React Docs | https://react.dev |
| Next.js Docs | https://nextjs.org |

## API Endpoints

### Projects
```
GET  /api/projects       - Get all
GET  /api/projects/:id   - Get one
POST /api/projects       - Create
PATCH /api/projects/:id  - Update
DELETE /api/projects/:id - Delete
```

### Skills
```
GET  /api/skills         - Get all
POST /api/skills         - Create
PATCH /api/skills/:id    - Update
DELETE /api/skills/:id   - Delete
```

### Messages
```
GET  /api/messages       - Get all
POST /api/messages       - Create
DELETE /api/messages/:id - Delete
```

## Important Files

| File | What It Does |
|------|--------------|
| `/server/server.js` | Backend entry point |
| `/server/.env` | MongoDB connection |
| `/server/models/` | Database schemas |
| `/server/routes/` | API endpoints |
| `/components/Projects.jsx` | Shows projects |
| `/components/Skills.jsx` | Shows skills |
| `/components/Contact.jsx` | Contact form |
| `/app/page.jsx` | Main page |
| `/app/globals.css` | Theme & colors |

## Your Information

- **Name:** Bashir Musa Olanrewaju
- **Email:** thegladtidings15@gmail.com
- **Phone:** +234 903 261 8938
- **Location:** Nigeria
- **Education:** Ahmadu Bello University (CS)
- **Stack:** MERN (MongoDB, Express, React, Node)

## File Structure

```
project/
├── server/              (Backend)
│   ├── server.js
│   ├── .env
│   ├── models/
│   ├── routes/
│   └── package.json
├── components/          (React)
│   ├── Header.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── app/                 (Next.js)
│   ├── page.jsx
│   ├── layout.jsx
│   └── globals.css
├── lib/
│   └── api.js
└── package.json
```

## Environment Variables

**In `/server/.env`:**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=development
```

## cURL Examples

### Get all projects
```bash
curl http://localhost:5000/api/projects
```

### Create project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Description",
    "image": "url",
    "tags": ["tag"],
    "link": "url",
    "github": "url"
  }'
```

### Submit message
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "message": "Hello"
  }'
```

## Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| "MongoDB connection error" | Check `.env` file has correct URI |
| "Cannot GET /api/projects" | Backend not running on 5000 |
| "Cannot fetch" | Check backend is running |
| Database empty | Run `npm run seed` |
| Port already in use | Change PORT in `.env` |
| CORS error | Check backend CORS setup |

## Technology Stack

**Frontend:** React, Next.js, Tailwind CSS, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas)  
**Hosting:** Vercel (frontend), Render (backend)

## Browser DevTools (F12)

- **Console tab** - See errors
- **Network tab** - See API calls
- **Elements tab** - See HTML structure
- **Sources tab** - Debug JavaScript

## Database Schema

### Project
```javascript
{
  title: String,
  description: String,
  image: String,
  tags: [String],
  link: String,
  github: String,
  createdAt: Date
}
```

### Skill
```javascript
{
  category: String,
  skills: [String],
  createdAt: Date
}
```

### Message
```javascript
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

## React Hooks Used

- `useState()` - Manage component state
- `useEffect()` - Run code on mount/update
- `fetch()` - Make API calls

## Tailwind Classes

- `bg-background` - Background color
- `text-foreground` - Text color
- `text-primary` - Primary color (pink)
- `bg-card` - Card background
- `border-border` - Border color
- `text-muted-foreground` - Muted text

## Git Commands

```bash
git add .
git commit -m "Your message"
git push origin main
```

## NPM Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Create production build
npm run seed         # (Backend) Seed database
npm start            # (Backend) Start server
```

## Testing Checklist

- [ ] Backend runs without errors
- [ ] Frontend loads in browser
- [ ] Projects display
- [ ] Skills display
- [ ] Contact form submits
- [ ] Messages appear in MongoDB
- [ ] No console errors
- [ ] Navigation works
- [ ] Mobile responsive

## Before Deployment

- [ ] Update component API URLs from localhost to production
- [ ] Remove debug console.logs
- [ ] Test all features work
- [ ] Check for console errors
- [ ] Verify MongoDB data
- [ ] Update CORS settings
- [ ] Add environment variables to hosting

## Deployment URLs

- **Frontend:** https://vercel.com
- **Backend:** https://render.com
- **Database:** https://cloud.mongodb.com

## Help & Documentation

- MongoDB Docs: https://docs.mongodb.com
- Express Docs: https://expressjs.com
- React Docs: https://react.dev
- Next.js Docs: https://nextjs.org

## Your Project Files

**Read first:**
- START_HERE.md
- QUICKSTART.md

**Reference:**
- README.md
- IMPLEMENTATION_SUMMARY.md
- ARCHITECTURE.md

**Setup:**
- SETUP_CHECKLIST.md

**Deployment:**
- DEPLOYMENT.md

**API Testing:**
- server/API_TESTING.md

---

**Bookmark this file!** Keep it open while working on the project.

Last updated: 2024
