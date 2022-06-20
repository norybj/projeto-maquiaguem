import { alterarMaquiagem, criarMaquiagem, filtrarMaquiagemPorId, filtrarMaquiagemPorNome } from "../repository/maquiagemRepository.js";

import { Router } from "express";
const server = Router();

server.post('/maquiagem', async(req, resp) => {
    try{

        const resposta = await criarMaquiagem(req.body);
        resp.send(resposta);

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.get('/maquiagem/:id', async(req, resp) => {
    try{
        
        const { id } = req.params;
        const resposta = await filtrarMaquiagem(id);
        resp.send(resposta);

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.get('/maquiagem/nome/:nome', async(req, resp) => {
    try{

        const { nome } = req.params;
        const resposta = await filtrarMaquiagemPorNome(nome);
        resp.send(resposta);

    }catch (err) {

        resp.status(400).send({
            erro: err.message
        });

    }
});

server.put('/maquiagem/:id', async(req, resp) => {
    try{
        
        const { id } = req.params;
        const maquiagem = req.body;

        const resposta = await alterarMaquiagem(id, maquiagem);
        if(resposta != 1)
            throw new Error("Error: Maquiagem não pode ser atualizada");

        resp.status(200).send({
            message: 'Maquiagem atualizada com sucesso'
        });

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default server;