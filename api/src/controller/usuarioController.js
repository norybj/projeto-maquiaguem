import { login, cadastrarUsuario, alterarUsuario, filtrarUsuarioPorId, filtrarUsuarioPorEmail } from "../repository/usuarioRepository.js";

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

server.put('/usuario/:id', async(req, resp) => {
    try{

        const { id } = req.params;
        const usuario = req.body;

        const resposta = await alterarUsuario(usuario, id);
        if(resposta != 1)
            throw new Error("Error: Maquiagem não pode ser atualizada");

        resp.status(200).send({
            message: 'Usuário atualizado com sucesso'
        });

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});

server.get('/usuario/:id', async(req, resp) => {
    try{

        const { id } = req.params;
        const resposta = await filtrarUsuarioPorId(id);
        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});

server.get('/usuario/email/:email', async(req, resp) => {
    try{

        const { email } = req.params;
        const resposta = await filtrarUsuarioPorEmail(email);
        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});
export default server;