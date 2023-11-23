 import { API_URL } from '../../src/constants.js';

 import axios from 'axios'
 const api = axios.create({
     baseURL: API_URL
})


export async function PedidoAdd(idCliente, idEndereco, data, valor, tipo) {
    const r = await api.post('/pedido', {
        idCliente: idCliente,
        idEndereco: idEndereco,
        valor: valor,
        tipo: tipo
    });

    return r.data
}


export async function MostrarPedidosUsuario(id) {
    const resposta = await api.get(`/pedido/usuario/${id}`)
    return resposta.data;
}
 