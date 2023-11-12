import { Listartodos, Cadastrarproduto, Editarproduto, deletarproduto, Favorito, Listarnome, Listarporcategoria, Listarporid, Listarfavo, alterarImagem } from "../repository/produtosrepository.js";
import { Router } from "express";

import multer from 'multer';

const upload = multer({ dest: 'storage/fotosProdutos' });

const endpoints = Router();

endpoints.get('/produtos', async (req, resp) => {
    try{
        let dados = await Listartodos()
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})

endpoints.get('/produto/nome', async (req, resp) => {
    try{
        const {nome} = req.query
        let dados = await Listarnome(nome)
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ err: err.message})
    };
})

endpoints.get('/favoritado/id', async (req, resp) => {
    try{
        const {id} = req.query
        let dados = await Listarfavo(id)
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ err: err.message})
    };
})

endpoints.get('/categoria/:id', async (req, resp) => {
    try{
        const {id} = req.params
        let dados = await Listarporcategoria(id)
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ err: err.message})
    };
})

endpoints.get('/produto/:id', async (req, resp) => {
    try{
        const {id} = req.params
        let dados = await Listarporid(id)
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ err: err.message})
    };
})

endpoints.post('/produtos', async (req, resp) => {
    try{
        let produtos = req.body
        let dados = await Cadastrarproduto(produtos)
        resp.send(dados)
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.put('/alterarproduto/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let produtos = req.body;
        let r = await Editarproduto(id, produtos);
        resp.send()
    }

    catch(err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.put('/favorito/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let produtos = req.body;
        let r = await Favorito(id, produtos);
        resp.send()
    }

    catch(err){
        console.log(err)
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.delete('/deletarproduto/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let produtos = req.body;
        let r = await deletarproduto(id, produtos);
        resp.send()
    }
    catch(err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

export default endpoints;

endpoints.put('/produto/:id/imagem', upload.single('produtosIma'), async (req, resp) => {
    try {

        if (!req.file) {
            throw new Error('Imagem do produto Obrigatória')
        }

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id)
        if (resposta != 1) {
            throw new Error('imagem não pode ser salva')
        }

        resp.status(204).send()
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});