import { Listarcategoria } from "../repository/categoriarepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/categoria', async (req, resp) => {
    try{
        let dados = await Listarcategoria();
        resp.send(dados);
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})

export default endpoints;