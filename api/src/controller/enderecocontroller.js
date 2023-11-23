import { cadastrarEndereco, listar } from "../repository/enderecorepository.js";

import { Router } from "express";

const endpoints = Router();


endpoints.get('/endereco', async (req, resp) => {
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



endpoints.post('/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;


         if(!endereco.logradouro)
             throw new Error('⚠ logradouro obrigatório')

         if(!endereco.numero)
             throw new Error('⚠ numero obrigatório')

         if(!endereco.bairro)
             throw new Error('⚠ bairro obrigatorio')

         if(!endereco.cidade)
             throw new Error('⚠ cidade obrigatorio')

         if(!endereco.estado)
             throw new Error('⚠ estado obrigatorio')

        const r = await cadastrarEndereco(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;