import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import localStorage from 'local-storage';
import { BuscarImagem } from '../../api/prod';
import RodapeGreenfield from '../../components/rodape';
import { toast, ToastContainer } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
export default function Favorito(){

    const[favorito, setFavorito] = useState([])

    const[idc, setIdc] = useState();

    function Pegarid(){
        let idc = '';
        if(localStorage('usuario-logado')){
            const usuariologado = localStorage('usuario-logado')
            idc = usuariologado.id_cliente
        }
        return idc
    }

    async function ListarFavorito(){
        let r = await axios.get(API_URL + '/itemfavorito/' + Pegarid())
        setFavorito(r.data)
        
        console.log(r.data)
    }

    async function Deletar(id){
         let r = await axios.delete(API_URL + '/deletarfavorito/' + id)
         window.location.reload()
    }

    function AdicionarCarrinho(id){
        let carrinho = [];

        if(localStorage('carrinho')){
            carrinho = localStorage('carrinho')
        }

        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })
            localStorage('carrinho', carrinho);
            toast.success('Produto adicionado ao carrinho')
        }
    }


    useEffect(() => {
        ListarFavorito()
        Pegarid()
    }, [])

    return(
        <div className='pagina-favoritos'>
            <Cabesemdgd/>

            <section className='conteudo-favorito'>
                <h1>Produtos favoritos <img src='/assets/images/coracao.svg'/></h1>

                <div className='card-favoritos'>
                    {favorito.map(item => 
                        <div className='card-produtos'>
                            <img className='img-produto' src={BuscarImagem(item.ds_img1)}/>

                            <div className='nome-preco'>
                                <p className='nome'>{item.nm_produto}</p>
                                <p className='preco'>R$ {item.vl_preco.toFixed(2)}</p>
                            </div>
                                <ToastContainer/>
                                <a onClick={() => AdicionarCarrinho(item.id_produto)}>Adicionar ao Carrinho</a>

                                <img className='excluir' onClick={() => Deletar(item.id_favorito)} src='/assets/images/xcarrinho.svg'/>
                        </div>
                    )}
                </div>
            </section>
            <RodapeGreenfield/>
        </div>
    )
}