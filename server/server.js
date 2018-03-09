  // server.js
const WebSocket = require('ws');
const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

const connectedClients = [];
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  connectedClients.push(ws);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({clientTotal: connectedClients.length, type: "userTotal"}));
    };
  });


  ws.on('message', (data) => {
    const message = JSON.parse(data);
    message.id = uuid.v4();

  /* Broadcast messages to all connected clients */
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      };
    });
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');

    connectedClients.forEach((client, index) => {
      if (client === ws) {
        connectedClients.splice(index, 1);
      };
    });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({clientTotal: connectedClients.length, type: "userTotal"}));
      };
    });
  });

  ws.on('error', () => console.log('errored'));
});



