"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('change-value', ({ value }) => {
        socket.broadcast.emit('change-value', { value });
    });
});
server.listen(3001, () => {
    console.log('listening on *:3001');
});
