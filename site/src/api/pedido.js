 import { API_URL } from '../../src/constants.js';

 import axios from 'axios'
 const api = axios.create({
     baseURL: API_URL
})


 export async function salvarNovoPedido(idCliente, novoPedido) {
     const r = await api.post('/api/pedido/' + idCliente, novoPedido);
    return r.data;
 }

 