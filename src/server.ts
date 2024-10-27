import { WebSocketServer, WebSocket } from 'ws';
import * as http from 'http';
import * as url from 'url';

const PORT = 8080;
const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
    const location = url.parse(req.url!, true);
    console.log(`WebSocket connection set from ${location.href}`);

    ws.on('message', (message: string) => {
        console.log(`Received message: ${message}`);
        const data = JSON.parse(message);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

server.listen(PORT, () => {
    console.log(`WebSocket server is listening on ws://localhost:${PORT}`);
});
