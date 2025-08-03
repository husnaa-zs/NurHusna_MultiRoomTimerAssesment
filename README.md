Multi-Room Countdown Timer
A real-time multi-room countdown timer built with Node.js (Express + Socket.IO) for the backend and Nuxt 3 (Vue) for the frontend.
This app allows multiple rooms (room1, room2, room3) to run independent countdown timers simultaneously.

Features
Multi-room timers: Separate timers for each room
Real-time updates: Sync across clients using Socket.IO
Alarm notification: Plays sound when timer reaches zero
Simple UI: Basic design focused on functionality

Tech Stack
 • Frontend
 • Nuxt 3
 • Vue 3
 • Socket.IO Client

Backend
• Node.js
• Express
• Socket.IO

Screenshots
<img width="1909" height="627" alt="Screenshot 2025-08-03 013458" src="https://github.com/user-attachments/assets/b9fc0bce-601b-4ea8-8949-8b12fe569df6" />

How to Run Locally
1. Clone the repository
   git clone <your-repo-link>
   cd interview-question
   
2. Setup Backend
   • cd backend
   • npm install
   • node app.js
   Backend will run on: http://localhost:5000
   
4. Setup Frontend
   • cd frontend
   • npm install
   • npm run dev
   Frontend will run on: http://localhost:3000
   
Usage
1.Open http://localhost:3000 in your browser
2.Click Start to begin countdown, Stop to pause, or Reset to restart
3.A sound alert will play when timer finishes

About This Project

This was created as part of an interview assessment to demonstrate:

1.Setting up a real-time backend using Socket.IO

2.Connecting a Nuxt frontend with live data updates

3.Building basic interactive UI components in Vue

Next Steps

•Add individual room management (names, durations)

•Improve UI design

•Deploy to cloud (Vercel/Netlify for frontend, Render/Heroku for backend)
