import { Router } from "express";
import { AdicionarPedido, AlterarStatusPedido, MostrarPedidoUsuario, MostrarPedidosPorIdUsuario, MostrarPedidosUsuarios, inserirPagamento, inserirPedido, inserirPedidoItem } from "../repository/pedidorepository.js";
import { criarNovoPedido } from "../service/novoPedidoService.js";
import { Listarporid } from "../repository/produtosrepository.js";



const endpoints = Router();

endpoints.put('/pedido/status/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const pedido = req.body;

        const resposta = await AlterarStatusPedido(pedido, id);

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

endpoints.post('/pedido', async (req, resp) => {
    try {
        const pedidos = req.body;
        const resposta = await AdicionarPedido(pedidos);

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

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

endpoints.get('/pedido/usuario/:id', async (req, resp) => {
    try {

        const { id } = req.params

        const resposta = await MostrarPedidoUsuario(id)
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


endpoints.get('/pedidos/usuario/:id', async (req, resp) => {
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









endpoints.post('/api/pedido/:idCliente', async (req, resp) => {
    try {
        const { idCliente } = req.params;
        const info = req.body;


        
        const novoPedido = criarNovoPedido(idCliente, info);
        

        const idPedidoCriado = await inserirPedido(novoPedido);
        const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);
        


        for (let item of info.produtos) {
            const prod = await Listarporid(item.info.id);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.info.id, item.info.qtd, prod.info.preco);
            
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





export default endpoints ;