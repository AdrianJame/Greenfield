import { Cadastrarendereco } from "../repository/enderecorepository";

import { Router } from "express";

const endpoints = Router();


endpoints.post('/endereco', async (req, resp) => {
    try{
        const enderecos = req.body
        
        if(!enderecos.logra)
            throw new Error('⚠ enderecos obrigatório')

        if(!enderecos.num)
            throw new Error('⚠ email obrigatório')

        if(!enderecos.bairro)
            throw new Error('⚠ telefone obrigatorio')

        if(!enderecos.cidade)
            throw new Error('⚠ cpf obrigatorio')

        if(!enderecos.uf)
            throw new Error('⚠ senha obrigatorio')

        const dados = await Cadastrarendereco(enderecos)
        resp.send(dados)
    }

    catch (err){
        resp.status(400).send({
            erro: err.message
        });
    }
})