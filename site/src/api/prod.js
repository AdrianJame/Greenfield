import axios from "axios";
import { API_URL } from "../constants.js";


const api = axios.create({
    baseURL: API_URL
});

export async function EnviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('produtosIma', imagem)
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


export async function Cadastrarproduto(nome, fabricante, categoriaselecionada, preco, estoque, garantia, descricao, dimensoes, material, extra, imagem) {
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
                extra: extra,
                imagem: imagem

    });

    return resposta.data

}

