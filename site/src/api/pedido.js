 import { API_URL } from '../../src/constants.js';

 import axios from 'axios'
 const api = axios.create({
     baseURL: API_URL
})


export async function PedidoAdd(idCliente, produtoId) {
    const r = await api.post('/pedido', {
        idCliente: idCliente,
        produtoId: produtoId
    });

    return r.data
}


export async function MostrarPedidosUsuario(id) {
    const resposta = await api.get(`/pedido/usuario/${id}`)
    return resposta.data;
}
 