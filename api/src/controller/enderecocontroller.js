import { listar, salvar } from "../repository/enderecorepository.js";

import { Router } from "express";

const endpoints = Router();


endpoints.get('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listar(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        const r = await salvar(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;