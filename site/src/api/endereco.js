import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
});

export async function salvarEndereco(idCliente, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/api/' + idCliente + '/endereco', {
         referencia, cep, logradouro, bairro, cidade, estado, numero, complemento });
    return r.data;
}


