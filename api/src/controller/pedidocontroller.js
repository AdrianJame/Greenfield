import { Router } from "express";
import { inserirPedidoItem, inserirPagamento, inserirPedido, ListarPedido } from "../repository/pedidorepository.js";
import { criarNovoPedido } from "../service/novoPedidoService.js";
import {ListarProdutosPorId} from "../repository/produtosrepository.js"


const endpoints = Router();

endpoints.post('/pedido/:idCliente/', async (req, resp) => {
    try {
        const { idCliente } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idCliente, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await ListarProdutosPorId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.preco);
        }

        resp.status(204).send();

    }
    catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/pedido', async (req, resp) => {
    try {
        const pedidos = req.body;
        const resposta = await inserirPedido(pedidos);

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoints.get('/pedido/', async (req, resp) => {
    
    try{
        let dados = await ListarPedido()
        resp.send(dados);
    }
    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };

})
export default endpoints