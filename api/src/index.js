import 'dotenv/config';

import agendaController from './controller/agendaController.js';
import usuarioController from './controller/usuarioController.js';
import maquiagemController from './controller/maquiagemController.js';

import cors    from 'cors';
import express from 'express';

const server = express();
server.use(cors());
server.use(express.json());

server.use(agendaController);
server.use(usuarioController);
server.use(maquiagemController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));