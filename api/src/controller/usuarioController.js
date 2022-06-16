import { login } from "../repository/usuarioRepository";

import { Router } from "express";
const server = Router();


server.post('/usuario/login', async (req, resp) => {
    try{
        const { email , senha } = req.body;
        console.log(email)
        const resposta = await login( email, senha);
        resp.send(resposta)

    }catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        });
    }
})

export default server;