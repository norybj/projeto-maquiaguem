import { criarmaquiagem } from "../repository/maquiagemRepository.js";


import { Router } from "express";
const server = Router();


server.post('/maquiagem', async(req, resp) => {
    try{

        const resposta = await criarmaquiagem(req.body);
        resp.send(resposta);

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});