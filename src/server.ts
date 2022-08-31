import express from 'express';
import cors from 'cors';
import router from './routers/index.js';

const server = express();
server.use(cors(), express.json());
server.use(router);

const PORT: number = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`))