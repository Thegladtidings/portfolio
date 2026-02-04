# Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        USER'S BROWSER                        │
│                     http://localhost:3000                    │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                  FRONTEND (React)                    │   │
│  │                                                      │   │
│  │  Header.jsx → Hero.jsx → Projects.jsx → Skills.jsx  │   │
│  │  ↓                                                   │   │
│  │  Contact.jsx (Form) → Footer.jsx                    │   │
│  │                                                      │   │
│  │  All styled with Tailwind CSS + globals.css         │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│                    fetch() / API Calls                       │
│                          ↓                                   │
└─────────────────────────────────────────────────────────────┘
         HTTP Request (JSON)
                  ↓
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (Express.js)                       │
│                    http://localhost:5000                     │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              API Routes & Controllers                │   │
│  │                                                      │   │
│  │  GET    /api/projects      → Send all projects     │   │
│  │  GET    /api/projects/:id  → Send one project      │   │
│  │  POST   /api/projects      → Save new project      │   │
│  │  PATCH  /api/projects/:id  → Update project        │   │
│  │  DELETE /api/projects/:id  → Delete project        │   │
│  │                                                      │   │
│  │  GET    /api/skills        → Send all skills       │   │
│  │  POST   /api/skills        → Save new skill        │   │
│  │  PATCH  /api/skills/:id    → Update skill          │   │
│  │  DELETE /api/skills/:id    → Delete skill          │   │
│  │                                                      │   │
│  │  GET    /api/messages      → Send all messages     │   │
│  │  POST   /api/messages      → Save new message      │   │
│  │  DELETE /api/messages/:id  → Delete message        │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Mongoose (Database ODM)                   │   │
│  │                                                      │   │
│  │  Project Model → projects collection                │   │
│  │  Skill Model   → skills collection                  │   │
│  │  Message Model → messages collection                │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                   │
└─────────────────────────────────────────────────────────────┘
         MongoDB Protocol (BSON)
                  ↓
┌─────────────────────────────────────────────────────────────┐
│                  MongoDB Atlas (Cloud)                       │
│                                                               │
│  ┌─── portfolio Database ────────────────────────────────┐  │
│  │                                                       │  │
│  │  projects collection:                                │  │
│  │  ├─ {_id, title, description, image, tags, ...}     │  │
│  │  ├─ {_id, title, description, image, tags, ...}     │  │
│  │  └─ {_id, title, description, image, tags, ...}     │  │
│  │                                                       │  │
│  │  skills collection:                                  │  │
│  │  ├─ {_id, category, skills[], createdAt}            │  │
│  │  ├─ {_id, category, skills[], createdAt}            │  │
│  │  └─ {_id, category, skills[], createdAt}            │  │
│  │                                                       │  │
│  │  messages collection:                                │  │
│  │  ├─ {_id, name, email, message, createdAt}          │  │
│  │  ├─ {_id, name, email, message, createdAt}          │  │
│  │  └─ {_id, name, email, message, createdAt}          │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow Examples

### 1. Loading Projects on Page Load

```
Browser Loads Page (localhost:3000)
    ↓
React Component Mounts (Projects.jsx)
    ↓
useEffect Hook Runs
    ↓
fetch('http://localhost:5000/api/projects')
    ↓
Express GET /api/projects Handler
    ↓
Mongoose queries 'projects' collection
    ↓
MongoDB returns array of project documents
    ↓
Express sends JSON response
    ↓
React receives data
    ↓
setProjects(data) updates state
    ↓
Component re-renders with project data
    ↓
User sees projects on screen
```

### 2. Submitting Contact Form

```
User Fills Form
    ↓
User Clicks "Send Message" Button
    ↓
handleSubmit(e) function runs
    ↓
fetch(POST, '/api/messages', formData)
    ↓
Express POST /api/messages Handler
    ↓
Extract name, email, message from request body
    ↓
Mongoose creates new Message document
    ↓
MongoDB saves document to 'messages' collection
    ↓
Express sends success response
    ↓
React receives response
    ↓
Form clears, success message shows
    ↓
User sees "Thanks for reaching out!"
```

### 3. Adding a New Project

```
You create POST request with cURL:
    ↓
curl -X POST /api/projects -d {project data}
    ↓
Express POST /api/projects Handler
    ↓
Create new Project from request body
    ↓
Validate all required fields
    ↓
Save to MongoDB
    ↓
Return created project with _id
    ↓
You see success response
    ↓
Reload portfolio page
    ↓
New project fetches and displays
```

## Technology Stack Layers

```
┌──────────────────────────────────────────┐
│          PRESENTATION LAYER               │
│  (What user sees in browser)              │
│  • HTML structure                         │
│  • Tailwind CSS styling                   │
│  • React components rendering             │
└──────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────┐
│         APPLICATION LAYER                 │
│  (Logic and state management)             │
│  • React components (JSX)                 │
│  • useState, useEffect hooks              │
│  • Fetch API calls                        │
│  • Form handling                          │
└──────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────┐
│          API/ROUTING LAYER                │
│  (HTTP endpoints)                         │
│  • Express Router                         │
│  • Route handlers                         │
│  • Request/response handling              │
│  • CORS middleware                        │
└──────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────┐
│         BUSINESS LOGIC LAYER              │
│  (Data processing)                        │
│  • Database queries                       │
│  • Data validation                        │
│  • Error handling                         │
│  • Mongoose models                        │
└──────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────┐
│       PERSISTENCE/DATA LAYER              │
│  (Data storage)                           │
│  • MongoDB collections                    │
│  • Document storage                       │
│  • Data indexing                          │
│  • Backups                                │
└──────────────────────────────────────────┘
```

## File Dependencies

```
app/page.jsx (Main Page)
    ↓
    Imports:
    ├─ components/Header.jsx
    ├─ components/Hero.jsx
    ├─ components/Projects.jsx
    │   └─ Fetches: GET /api/projects
    ├─ components/Skills.jsx
    │   └─ Fetches: GET /api/skills
    ├─ components/Contact.jsx
    │   └─ Posts: POST /api/messages
    ├─ components/Footer.jsx
    └─ app/globals.css
        └─ Applies: Tailwind CSS + theme colors


server/server.js (Main Server)
    ↓
    Imports:
    ├─ routes/projects.js
    │   ├─ Uses: models/Project.js (Mongoose model)
    │   └─ Connects to: MongoDB projects collection
    ├─ routes/skills.js
    │   ├─ Uses: models/Skill.js (Mongoose model)
    │   └─ Connects to: MongoDB skills collection
    └─ routes/messages.js
        ├─ Uses: models/Message.js (Mongoose model)
        └─ Connects to: MongoDB messages collection
```

## Request/Response Flow

### GET Request (Loading Data)

```
Browser:
GET http://localhost:5000/api/projects

Express Server Receives:
{
  method: 'GET',
  url: '/api/projects'
}

Express Router Processes:
✓ Route matched to GET /api/projects
✓ Handler executes

Handler:
const projects = await Project.find();

MongoDB Returns:
[
  { _id: "...", title: "VTU App", ... },
  { _id: "...", title: "QR Code App", ... }
]

Express Sends Response:
HTTP 200 OK
[
  { _id: "...", title: "VTU App", ... },
  { _id: "...", title: "QR Code App", ... }
]

Browser Receives:
JavaScript parses JSON
React state updates
Component re-renders
User sees projects
```

### POST Request (Saving Data)

```
Browser sends:
POST http://localhost:5000/api/messages
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com",
  "message": "Your work is great!"
}

Express Server Receives:
{
  method: 'POST',
  url: '/api/messages',
  body: { name, email, message }
}

Express Router Processes:
✓ Route matched to POST /api/messages
✓ CORS check passed
✓ Body parsed as JSON

Handler:
const message = new Message({
  name: req.body.name,
  email: req.body.email,
  message: req.body.message
});
await message.save();

MongoDB Saves:
{
  _id: ObjectId("..."),
  name: "John",
  email: "john@example.com",
  message: "Your work is great!",
  createdAt: ISODate("2024-02-03T...")
}

MongoDB Returns:
{ _id: "...", name: "John", ... }

Express Sends Response:
HTTP 201 Created
{ _id: "...", name: "John", ... }

Browser Receives:
JavaScript processes response
Shows success message
Form clears
User sees confirmation
```

## CORS (Cross-Origin Resource Sharing)

```
Browser                              Express Server
(localhost:3000)                    (localhost:5000)
    ↓
    Makes API call
    ↓
    Browser checks: "Can I call this origin?"
    ↓
    Sends OPTIONS pre-flight request
    ↓
                                    Express CORS middleware
                                    Checks origin
                                    ↓
                                    Origin is allowed
                                    ↓
                                    Sends CORS headers
    ↓
    Browser receives CORS headers
    ↓
    Yes, I can proceed!
    ↓
    Sends actual GET/POST request
    ↓
                                    Processes request normally
    ↓
    Browser receives response
    ↓
    JavaScript processes data
```

## Environment Setup

```
Your Computer
│
├─ MongoDB URI (in .env)
│   └─ Connects to MongoDB Atlas Cloud
│
├─ Frontend Server (npm run dev)
│   └─ Runs on localhost:3000
│
└─ Backend Server (npm run dev)
    └─ Runs on localhost:5000
       └─ Connects to MongoDB via URI

When Deployed:
├─ Frontend (Vercel)
│   └─ myportfolio.vercel.app
│       └─ Makes API calls to backend
│
├─ Backend (Render)
│   └─ mybackend.onrender.com
│       └─ Connects to same MongoDB Atlas
│
└─ MongoDB Atlas (Cloud)
    └─ Accessible from anywhere
```

## Component Communication

```
App
│
├─ Header (Navigation)
├─ Hero (Welcome section)
├─ Projects (Fetches & displays)
│   └─ State: [projects, loading, error]
│   └─ Effect: fetch on mount
│   └─ Render: map projects
├─ Skills (Fetches & displays)
│   └─ State: [skills, loading, error]
│   └─ Effect: fetch on mount
│   └─ Render: map skills
├─ Contact (Form submission)
│   └─ State: [formData, submitted]
│   └─ Handler: submit to API
│   └─ Render: form + success message
├─ Footer (Links)
└─ globals.css (Theme applied to all)
```

---

This architecture ensures clean separation of concerns:
- Frontend handles UI/presentation
- Backend handles business logic and data
- MongoDB handles persistent storage
- They communicate via REST API with JSON

Each part can be developed, tested, and deployed independently!
