import { API_URL } from '../constants';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async function listarProdutosInicio() {
    const r = await api.get('/api/produto');
    return r.data;
}


export async function buscarProdutoPorId(id) {
    const r = await api.get('/produto/' + id);
    return r.data;
}

