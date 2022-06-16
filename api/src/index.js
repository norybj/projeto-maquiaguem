import 'dotenv/config';
import usuarioController from './controller/usuarioController.js';

import cors    from 'cors';
import express from 'express';

const server = express();
server.use(cors());
server.use(express.json());

server.use(usuarioController);
server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));