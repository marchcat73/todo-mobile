import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { apolloServer } from './graphql/index.js';
import { init } from './middlewares/index.js';
import { connectDatabase } from './database/index.js';
import { Task } from './graphql/models/index.js';
const PORT = parseInt(process.env.PORT || '4000', 10);
const app = express();
await connectDatabase();
// Set up our Express middleware to handle CORS, body parsing,
init(app);
const httpServer = http.createServer(app);
const server = apolloServer(httpServer);
// Ensure we wait for our server to start
await server.start();
app.use('/graphql', 
// expressMiddleware accepts the same arguments:
// an Apollo Server instance and optional configuration options
expressMiddleware(server, {
    context: async () => ({
        models: {
            Task: new Task(mongoose.model('Task')),
        },
    }),
}));
// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
console.info(`🚀 Server ready at http://localhost:${PORT}/`);
