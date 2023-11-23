import { Router } from "express";
import { MostrarPedidosUsuarios, AdicionarPedido, MostrarPedidosPorIdUsuario, adicionarProdutoPedido } from "../repository/pedidorepository.js";


const endpoints = Router();

endpoints.get('/pedido/admin', async (req, resp) => {
    try {
        const resposta = await MostrarPedidosUsuarios()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

endpoints.post('/pedido', async (req, resp) => {
    try {

        let infoPedido = req.body;

        let produtos = infoPedido.produtos;

        let pedidoCriado = await AdicionarPedido(infoPedido);

        for (let i = 0; i < produtos.length; i++) {
            await adicionarProdutoPedido(pedidoCriado.id, produtos[i]);
        }

        resp.send(pedidoCriado);

    } catch (error) {
        resp.status(500).send(error.message);
    }
})

endpoints.get('/pedido/usuario/:id', async (req, resp) => {
    try {

        const { id } = req.params
        const resposta = await MostrarPedidosPorIdUsuario(id)
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})
export default endpoints