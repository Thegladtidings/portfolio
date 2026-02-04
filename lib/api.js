// API Configuration
// This file contains the base URL for API calls

// Change this based on your environment
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-deployed-backend.com' // Replace with your deployed backend URL
  : 'http://localhost:5000';

export default API_BASE_URL;
