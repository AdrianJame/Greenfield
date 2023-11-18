import { Router } from "express";
import { inserirPagamento, inserirPedido, inserirPedidoItem } from "../repository/pedidorepository.js";
import { buscarProdutoPorId } from "../repository/produtorepository.js";
import {criarNovoPedido, criarNotaFiscal } from "../service/novoProdutoService.js";
const endpoints = Router();

endpoints.post('/api/pedido/:idUsuario/', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idUsuario, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await buscarProdutoPorId(item.id);
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



export default endpoints;