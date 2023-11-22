import { cadastrarEndereco, listar } from "../repository/enderecorepository.js";

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


        // if(!enderecos.logra)
        //     throw new Error('⚠ enderecos obrigatório')

        // if(!enderecos.num)
        //     throw new Error('⚠ numero obrigatório')

        // if(!enderecos.bairro)
        //     throw new Error('⚠ bairro obrigatorio')

        // if(!enderecos.cidade)
        //     throw new Error('⚠ cidade obrigatorio')

        // if(!enderecos.estado)
        //     throw new Error('⚠ estado obrigatorio')

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