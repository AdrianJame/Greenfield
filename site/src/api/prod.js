import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
});

export async function EnviarImagem(imagem, id) {
    const formData = new FormData();
    formData.append('fotosProdutos', imagem)
    const resposta = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })

    return resposta.status; 
}


export function BuscarImagem(imagem) {
    console.log(`${api.getUri()}/${imagem}`);

    return `${api.getUri()}/${imagem}`
}


export async function Cadastrarproduto(nome, fabricante, categoriaselecionada, preco, estoque, garantia, descricao, dimensoes, material, extra) {
    const resposta = await api.post('/produto', {
                nome: nome,
                fabri: fabricante,
                categoria: categoriaselecionada,
                preco: preco,
                estoque: estoque,
                garantia: garantia,
                descricao: descricao,
                dimensoes: dimensoes,
                material: material,
                extra: extra

    });

    return resposta.data

}

