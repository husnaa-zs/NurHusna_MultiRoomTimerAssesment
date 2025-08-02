<template>
  <div class="container">
    <h1>Multi-Room Countdown Timer</h1>

    <div v-for="(timer, key) in timers" :key="key" class="room">
      <h2>{{ key.toUpperCase() }}</h2>
      <p>{{ formatTime(timer.remaining) }}</p>
      <button @click="startTimer(key)">Start</button>
      <button @click="stopTimer(key)">Stop</button>
      <button @click="resetTimer(key)">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { $socket } = useNuxtApp()

const timers = ref({
  room1: { remaining: 300 },
  room2: { remaining: 300 },
  room3: { remaining: 300 },
})

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function startTimer(room) {
  $socket.emit('start', room)
}

function stopTimer(room) {
  $socket.emit('stop', room)
}

function resetTimer(room) {
  $socket.emit('reset', room)
}

onMounted(() => {
  $socket.on('initial-state', (data) => {
    timers.value = data
  })

  $socket.on('timer-update', ({ room, remaining }) => {
    timers.value[room].remaining = remaining
  })

  $socket.on('timer-finished', ({ room }) => {
    alert(`${room} timer finished!`)
    const audio = new Audio('/alarm.mp3')
    audio.play()
  })
})
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
}
.room {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: inline-block;
}
button {
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
