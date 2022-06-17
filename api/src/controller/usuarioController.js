import { login, cadastrarUsuario, filtrarUsuario } from "../repository/usuarioRepository.js";

import { Router } from "express";
const server = Router();

server.post('/usuario/login', async(req, resp) => {
    try{

        const { email , senha } = req.body;
        const resposta = await login(email, senha);

        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});

server.post('/usuario', async(req, resp) => {
    try{

        const resposta = await cadastrarUsuario(req.body);
        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});

server.get('/usuario/:id', async(req, resp) => {
    try{

        const { id } = req.params;
        const resposta = await filtrarUsuario(id);

        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
})
export default server;