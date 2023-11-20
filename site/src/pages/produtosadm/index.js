import './index.scss'
import Menuadm from '../../components/menuadm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { BuscarImagem } from '../../api/prod.js';


export default function Produtosadm(){
    const[favorito, setFavorito] = useState(false)
    const[id, setId] = useState(0);
    const[nome, setNome] = useState('');

const navigate = useNavigate();

const[listar, setListar] = useState([]);

    async function Listarprodutos(){
        let r = await axios.get(API_URL + '/produtos');
        setListar(r.data);
    }

    async function Buscarpornome(){  
        let r = await axios.get(API_URL + '/produto/nome?nome=' + nome)
        setListar(r.data)

    }

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Buscarpornome();
        }}

useEffect(() => {
    Listarprodutos()
    if(!storage('adm-logado')){
        navigate('/erro')
      }
}, [])


async function Deletarfavopro(id){
    let x = await axios.delete(API_URL + '/deletarfavoritoporprod/' + id);
    Deletar(id)
}



async function Deletar(id){
    confirmAlert({
      title: 'PRODUTO',
      message: 'Tem certeza que deseja remover?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete(API_URL + '/deletarproduto/' + id);
            alert('Produto removido');
            Listarprodutos();
          }
        },
        {
          label: 'Não'
        }
      ]
    });
    
  } 


  async function Fav(id, favoritado){
    let fav = {
        favorito: favoritado
    }
     
    let x = await axios.put(API_URL + '/favorito/' + id, fav)
    Listarprodutos();
  }


    return(
        <div className='produtosadm'>
            <Menuadm/>
            <section className='produtosadm-body'>
                <h2>Produtos</h2>

                <div className='card'>
                    <div className='card-s1'>
                        <section className='card-input'>
                            <input placeholder='Buscar por Nome' onKeyUp={teclaEnter} value={nome} onChange={e => setNome(e.target.value)}/>
                            <img onClick={Buscarpornome} src='/assets/images/lupaadm.svg'/>
                        </section>

                        <section className='card-filtro'>
                            <img src='/assets/images/filtro.svg'/>
                            <p>Filtro</p>
                        </section>
                    </div>

                    <div className='card-s2'>
                        <section className='card-s2-categoria'>
                            <img src='/assets/images/categoriaadm.svg'/>

                            <p>Categorias</p>
                        </section>

                        <Link to={'/cadastroproduto'} className='card-s2-maisproduto'>
                            <img src='/assets/images/maisproduto.svg'/>
                           
                            <p>Produto</p>
                        </Link>
                    </div>
                </div>


                <div className='tipos-listar'>
                    <img src='/assets/images/estrelabranca.svg'/>

                    <p className='img'>Img</p>
                    <p>Produto</p>
                    <p>Categoria</p>
                    <p>estoque</p>
                    <p>preço</p>
                </div>

                {listar.map(item => 
                    <div className='listarprodutos'>
                        <img className='fav' onClick={() => Fav(item.id_produto, item.bt_favorito == 1 ? false : true)} src={item.bt_favorito ? '/assets/images/image.png' : '/assets/images/estrelabranca.svg'}/>
                        <img src= {BuscarImagem(item.ds_img1)}/>
                        
                        <p title={item.nm_produto}>{item.nm_produto}</p>
                        <p>{item.nm_categoria}</p>
                        <p>{item.qtd_estoque}</p>
                        <p>{item.vl_preco}</p>

                        <a onClick={() => navigate('/altpro/' + item.id_produto)}  className='editarexcluir'>Editar <img src='/assets/images/editar.svg'/></a>
                        <p onClick={() => Deletarfavopro(item.id_produto)} className='editarexcluir'>Excluir <img src='/assets/images/excluir.svg'/></p>
                    </div> 
                )}
            </section>
        </div>
    )
}