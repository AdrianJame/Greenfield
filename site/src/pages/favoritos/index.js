import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import localStorage from 'local-storage';
import { BuscarImagem } from '../../api/prod';

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


    useEffect(() => {
        ListarFavorito()
        Pegarid()
    }, [])

    return(
        <div className='pagina-favoritos'>
            <Cabesemdgd/>

            <section className='conteudo-favorito'>
                <h1>Produtos favoritos</h1>

                <div className='card-favoritos'>
                    {favorito.map(item => 
                        <div className='card-produtos'>
                            <img className='img-produto' src={BuscarImagem(item.ds_img1)}/>

                            <div className='nome-preco'>
                                <p className='nome'>{item.nm_produto}</p>
                                <p className='preco'>R$ {item.vl_preco.toFixed(2)}</p>
                            </div>
                                <a>Adicionar ao Carrinho</a>

                                <img className='excluir' onClick={() => Deletar(item.id_favorito)} src='/assets/images/xcarrinho.svg'/>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}