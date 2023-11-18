import { Router } from "express";
import { inserirPedidoItem, inserirPagamento, inserirPedido } from "../repository/pedidorepository.js";
import { criarNovoPedido } from "../service/novoPedidoService.js";
import { Listarporid } from "../repository/produtosrepository.js";

const endpoints = Router();

endpoints.post('/api/pedido/:idCliente/', async (req, resp) => {
    try {
        const { idCliente } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idCliente, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await Listarporid(item.id);
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


export default endpoints