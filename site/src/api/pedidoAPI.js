import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
})

export async function StatusAlterar(status, id) {
    const r = await api.put(`/pedido/status/${id}`, {
        IdStatus: status
    })
    return r.data
}


export async function PedidoAdd(IDuser, produtoId) {
    const r = await api.post('/pedido', {
        IdUser: IDuser,
        IDInstrumentos: produtoId
    });

    return r.data
}

export async function MostrarPedidos() {
    const resposta = await api.get('/pedido/admin')
    return resposta.data

}


export async function MostrarPedidosUsuario(id) {
    const resposta = await api.get(`/pedidos/usuario/${id}`)
    return resposta.data;
}

export async function salvarNovoPedido(idCliente, novoPedido) {
    const r = await api.post('/api/pedido/' + idCliente, novoPedido);
    return r.data;
}