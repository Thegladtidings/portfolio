# Plain React Portfolio - Setup Guide

This is a plain React portfolio with pure CSS (no Tailwind, no Next.js).

## What's Different from Before?

- **No Next.js** - Pure React with Vite
- **No Tailwind** - Pure CSS files for styling
- **Clean Setup** - Only React and React DOM dependencies
- **Backend** - Express.js + MongoDB (unchanged)

## Setup Steps

### Step 1: Install Frontend Dependencies

```bash
npm install
```

### Step 2: Setup Backend

1. Navigate to server folder:
   ```bash
   cd server
   npm install
   ```

2. Create `.env` file in `/server` folder:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. Seed the database with your projects and skills:
   ```bash
   npm run seed
   ```

4. Start the backend:
   ```bash
   npm run dev
   ```

### Step 3: Start Frontend

In the root directory (in a new terminal):

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## File Structure

All components are in `/src/components/`:
- `Header.jsx` - Navigation bar
- `Hero.jsx` - Hero section with badge and CTA
- `Projects.jsx` - Fetches projects from MongoDB
- `Skills.jsx` - Fetches skills from MongoDB
- `Contact.jsx` - Contact form that saves to MongoDB
- `Footer.jsx` - Footer

All styles are in `/src/styles/`:
- `main.css` - Global styles and utilities
- Component-specific CSS files (header.css, hero.css, etc.)

## Customizing Your Portfolio

### Update Your Info

1. **Hero Section** (`/src/components/Hero.jsx`):
   - Name: "Bashir Musa Olanrewaju"
   - Tagline and description
   - Statistics (50+, 8+, 30+)

2. **Contact Info** (`/src/components/Contact.jsx`):
   - Email: thegladtidings15@gmail.com
   - Phone: +234 903 261 8938
   - Location: Nigeria

### Add Your Projects

Update `/server/scripts/seedDatabase.js` with your actual projects:

```javascript
const projects = [
  {
    title: "VTU App",
    description: "App for buying airtime and trading giftcards",
    tags: ["React Native", "Expo", "Node.js"],
    image: "..."
  },
  // Add more projects
]
```

### Add Your Skills

Update the skills in `seedDatabase.js`:

```javascript
const skills = [
  {
    category: "Mobile Development",
    skills: ["React Native", "Expo", ...]
  },
  // Add more skill categories
]
```

## Styling

All CSS is organized and uses CSS custom properties (variables) for colors:

```css
:root {
  --primary: #c73866;
  --background: #1a1a2e;
  --surface: #16213e;
  --text-primary: #f0f0f0;
  --text-secondary: #b0b0b0;
}
```

To change colors, edit `/src/styles/main.css` and update the color values.

## Deployment

### Deploy Backend

You can deploy the backend to:
- Render.com (free)
- Railway.app (free)
- Heroku (paid)

### Deploy Frontend

You can deploy to:
- Vercel (free)
- Netlify (free)
- GitHub Pages (free)

## API Endpoints

When you start the backend, you get these endpoints:

- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `POST /api/messages` - Submit contact form

By default, the frontend looks for the backend at `http://localhost:5000`. To change this for production, update the API URLs in each component.

## Troubleshooting

### MongoDB Connection Error

Make sure your `.env` file in `/server` has the correct MongoDB URI.

### Port Already in Use

If port 3000 or 5000 is already in use:
- Frontend: Vite will try to use port 3001 automatically
- Backend: Change the PORT in `/server/.env`

### API Not Found

Make sure the backend is running on port 5000 before starting the frontend.
