"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const socketServer_1 = require("./socketServer");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const httpServer = (0, http_1.createServer)(app);
// Initialize Socket.IO
const io = (0, socketServer_1.initializeSocketServer)(httpServer);
// Default route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Socket.IO Server</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            h1 {
                color: #4a4a4a;
            }
            .info {
                background-color: #f4f4f4;
                border-left: 5px solid #5c6bc0;
                padding: 15px;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to the Socket.IO Server</h1>
        <div class="info">
            <p>This server is running and ready to accept WebSocket connections.</p>
            <p>To connect to this server from your client application, use:</p>
            <code>const socket = io('http://localhost:5000');</code>
        </div>
    </body>
    </html>
  `);
});
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});