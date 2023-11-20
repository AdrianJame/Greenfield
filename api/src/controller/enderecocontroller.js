import { Cadastrarendereco } from "../repository/enderecorepository";

import { Router } from "express";

const endpoints = Router();


endpoints.post('/api/:id/endereco', async (req, resp) => {
    try{
        const enderecos = req.body
        
        if(!enderecos.logra)
            throw new Error('⚠ enderecos obrigatório')

        if(!enderecos.num)
            throw new Error('⚠ numero obrigatório')

        if(!enderecos.bairro)
            throw new Error('⚠ bairro obrigatorio')

        if(!enderecos.cidade)
            throw new Error('⚠ cidade obrigatorio')

        if(!enderecos.estado)
            throw new Error('⚠ estado obrigatorio')


        const dados = await Cadastrarendereco(enderecos)
        resp.send(dados)
    }
    
    catch (err){
        resp.status(400).send({
            erro: err.message
        });
    }
})