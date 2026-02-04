# Bashir Musa Portfolio - Plain React + CSS

A complete portfolio website built with plain React and pure CSS, with a MERN stack backend (MongoDB, Express, React, Node.js) showcasing your mobile app and web development projects.

## Project Structure

```
/
├── /src                          # Frontend source code
│   ├── index.jsx                # React entry point
│   ├── App.jsx                  # Main app component
│   ├── /components              # React components
│   │   ├── Header.jsx           # Navigation
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   └── /styles                  # Pure CSS files
│       ├── main.css             # Global styles
│       ├── header.css           # Header component styles
│       ├── hero.css             # Hero section styles
│       ├── projects.css         # Projects section styles
│       ├── skills.css           # Skills section styles
│       ├── contact.css          # Contact section styles
│       └── footer.css           # Footer styles
│
├── /server                      # Express.js backend
│   ├── server.js               # Main server entry point
│   ├── package.json            # Backend dependencies
│   ├── .env.example            # Environment variables template
│   ├── /models                 # MongoDB schemas
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Message.js
│   ├── /routes                 # API endpoints
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── messages.js
│   └── /scripts
│       └── seedDatabase.js     # Populate database with initial data
│
├── index.html                   # HTML entry point
├── vite.config.js               # Vite configuration
├── package.json                 # Frontend dependencies
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (free tier available)
- Git

## Quick Start

### 1. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
```

### 2. MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Get your connection string from "Connect" button
5. Copy it for later use

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with your MongoDB URI
# Copy from .env.example
cp .env.example .env

# Edit .env and add your MongoDB connection string
# MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/portfolio

# Seed the database with initial projects and skills
npm run seed

# Start the server (development mode with nodemon)
npm run dev

# Or start without nodemon
npm start
```

Server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# In the root directory
npm install

# Start the development server
npm run dev
```

Frontend will run on `http://localhost:3000`

## Backend API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (requires JSON body)
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill category
- `PATCH /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Messages
- `GET /api/messages` - Get all messages (contact form submissions)
- `POST /api/messages` - Submit a message
- `DELETE /api/messages/:id` - Delete message

## Example API Requests

### Create a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My App",
    "description": "Description here",
    "image": "image-url",
    "tags": ["React Native", "MongoDB"],
    "link": "https://example.com",
    "github": "https://github.com"
  }'
```

### Submit a Message
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "message": "Your message here"
  }'
```

## Technology Stack

**Frontend:**
- React.js
- Next.js (App Router)
- Tailwind CSS
- JavaScript (no TypeScript)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

**Other:**
- CORS for cross-origin requests
- dotenv for environment variables

## Your Portfolio Information

- **Name:** Bashir Musa Olanrewaju
- **Email:** thegladtidings15@gmail.com
- **Phone:** +234 903 261 8938
- **Education:** Computer Science Graduate, Ahmadu Bello University
- **Specialization:** MERN Stack Development

### Your Projects
1. **VTU App** - Mobile app for buying airtime and trading gift cards
2. **QR Code Attendance System** - Teacher-friendly exam attendance tracker

## Deployment

### Deploy Backend (Render, Railway, or Heroku)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables on hosting platform
4. Deploy

### Deploy Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Update API endpoint in components to match deployed backend URL
3. Deploy

## Important Notes

- The frontend expects the backend to run on `http://localhost:5000` during development
- Update the fetch URLs in components when deploying to production
- Ensure CORS is properly configured on the backend
- Keep your `.env` file secure and never commit it to version control

## Customization

### Update Projects
Submit new projects via the backend API or directly through MongoDB Atlas UI.

### Update Skills
Modify skills by sending POST/PATCH requests to the `/api/skills` endpoint.

### Contact Information
Edit the Contact.jsx component or update the data in the database.

## Support

For questions about the MERN stack:
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Documentation](https://expressjs.com)

## License

This project is open source and available under the MIT License.
