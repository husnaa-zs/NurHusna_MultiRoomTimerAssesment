// start programming~
console.log("App.js started...");

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Timer states
let rooms = {
  room1: { remaining: 300, running: false, interval: null },
  room2: { remaining: 300, running: false, interval: null },
  room3: { remaining: 300, running: false, interval: null },
};

// **Function to send safe data (exclude interval)**
function getSafeRooms() {
  return {
    room1: { remaining: rooms.room1.remaining, running: rooms.room1.running },
    room2: { remaining: rooms.room2.remaining, running: rooms.room2.running },
    room3: { remaining: rooms.room3.remaining, running: rooms.room3.running },
  };
}

function startTimer(roomName) {
  if (rooms[roomName].running) return;
  rooms[roomName].running = true;

  rooms[roomName].interval = setInterval(() => {
    if (rooms[roomName].remaining > 0) {
      rooms[roomName].remaining--;
      io.emit('timer-update', { room: roomName, remaining: rooms[roomName].remaining });
    } else {
      clearInterval(rooms[roomName].interval);
      rooms[roomName].running = false;
      io.emit('timer-finished', { room: roomName });
    }
  }, 1000);
}

function stopTimer(roomName) {
  clearInterval(rooms[roomName].interval);
  rooms[roomName].running = false;
}

function resetTimer(roomName) {
  stopTimer(roomName);
  rooms[roomName].remaining = 300;
  io.emit('timer-update', { room: roomName, remaining: 300 });
}

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('Client connected');

  // Send safe state to client
  socket.emit('initial-state', getSafeRooms());

  socket.on('start', (room) => startTimer(room));
  socket.on('stop', (room) => stopTimer(room));
  socket.on('reset', (room) => resetTimer(room));
});

server.listen(5000, () => console.log('Server running on http://localhost:5000'));
