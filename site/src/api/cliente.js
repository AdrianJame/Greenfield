import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
});

export async function salvarCartao(idCliente, nome, numero, vencimento, codSeguranca, parcelas ) {
    const r = await api.post('/cadastro/cartao' + idCliente + '/endereco', { nome, numero, vencimento, codSeguranca, parcelas });
    return r.data;
}