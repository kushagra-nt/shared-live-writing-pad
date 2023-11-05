const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);

import {Server} from 'socket.io';

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

type Point = {
    x: number,
    y: number,
}

type DrawLine = {
    value: string
}

io.on('connection', (socket: { on: (arg0: string, arg1: ({ value }: DrawLine) => void) => void; broadcast: { emit: (arg0: string, arg1: { value: string; }) => void; }; }) => {
    console.log('a user connected');
    socket.on('change-value', ({value}: DrawLine) => {
        socket.broadcast.emit('change-value', {value});
    })
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});