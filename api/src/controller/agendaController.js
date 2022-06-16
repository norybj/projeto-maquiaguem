import { listarAgenda, criarAgenda, deletarAgenda, alterarAgenda } from "../repository/agendaRepository.js";

import { Router } from "express";
const server = Router();

// Listar Agenda
server.get('/agenda', async(req, resp) => {
    try{

        const resposta = await listarAgenda();
        resp.send(resposta);

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Criar Agenda
server.post('/agenda', async(req, resp) => {
    try{

        const resposta = await criarAgenda(req.body);
        resp.send(resposta);

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Deletar Agenda
server.delete('/agenda/:id', async(req, resp) => {
    try{
        const { id } = req.params;
        const resposta = await deletarAgenda(id);

        if(resposta != 1)
            throw new Error("ERROR: A agenda não pode ser removida.");

        resp.status(200).send({
            message: `Agenda ${id} deletada com sucesso`
        });

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Alterar agenda
server.put('/agenda/:id', async(req, resp) => {
    try {
        
        const { id } = req.params;
        const agenda = req.body;

        const resposta = await alterarAgenda(id, agenda);

        if(resposta != 1)
            throw new Error("Error: Agenda não pode ser atualizada");

        resp.status(200).send({
            message: 'Agenda atualizada com sucesso'
        });

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default server;