const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg); 
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
