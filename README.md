# Multi-Room Countdown Timer

A real-time multi-room countdown timer built with **Node.js (Express + Socket.IO)** for the backend and **Nuxt 3 (Vue)** for the frontend.  
This app allows multiple rooms (`room1`, `room2`, `room3`) to run independent countdown timers simultaneously.

---

## Features

- **Multi-room timers** – Separate countdowns for each room  
- **Real-time updates** – Syncs instantly across connected clients using Socket.IO  
- **Alarm notifications** – Plays sound when timer reaches zero  
- **Simple UI** – Clean and basic interface focused on core functionality  

---

## Tech Stack

### Frontend
- Nuxt 3  
- Vue 3  
- Socket.IO Client  

### Backend
- Node.js  
- Express  
- Socket.IO  

---

## Screenshot

<img width="1909" height="627" alt="Screenshot 2025-08-03 013458" src="https://github.com/user-attachments/assets/b9fc0bce-601b-4ea8-8949-8b12fe569df6" />

---

## How to Run Locally

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd interview-question
```

### 2. Setup Backend
```bash
cd backend
npm install
node app.js
```
Backend will run on: **http://localhost:5000**

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on: **http://localhost:3000**

---

## Usage

1. Open **http://localhost:3000** in your browser  
2. Click **Start** to begin countdown, **Stop** to pause, or **Reset** to restart  
3. A sound alert will play when timer finishes  

---

## About This Project

This project was created as part of an **interview assessment** to demonstrate:  
- Setting up a real-time backend using Socket.IO  
- Connecting a Nuxt frontend with live data updates  
- Building basic interactive UI components in Vue  

---

## Next Steps

- **Add individual room management**  
  Allow setting custom room names and durations.

- **Improve UI design**  
  Enhance the interface for better usability and aesthetics.

- **Deploy the project**  
  - Frontend: Host on [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com)  
  - Backend: Host on [Render](https://render.com) or [Heroku](https://www.heroku.com)  
