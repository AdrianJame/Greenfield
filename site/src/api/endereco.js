import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
});

export async function salvar(idCliente, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/api/usuario/' + idCliente + '/endereco', { referencia, cep, logradouro, bairro, cidade, estado, numero, complemento });
    return r.data;
}


export async function listar(idCliente) {
    const r = await api.get('/endereco/' + idCliente);
    return r.data;
}


