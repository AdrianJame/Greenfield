import './index.scss'
import Menuadm from '../../components/menuadm'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

export default function Produtosadm(){

const navigate = useNavigate();

const[listar, setListar] = useState([]);

    async function Listarprodutos(){
        let r = await axios.get('http://localhost:5000/produtos');
        setListar(r.data);
    }

useEffect(() => {
    Listarprodutos()
    if(!storage('adm-logado')){
        navigate('/erro')
      }
}, [])


async function Deletar(id){
    confirmAlert({
      title: 'PRODUTO',
      message: 'Tem certeza que deseja remover?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete('http://localhost:5000/deletarproduto/' + id);
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


    return(
        <div className='produtosadm'>
            <Menuadm/>
            <section className='produtosadm-body'>
                <h2>Produtos</h2>

                <div className='card'>
                    <div className='card-s1'>
                        <section className='card-input'>
                            <input placeholder='Nome, preço ou codigo'/>
                            <img src='/assets/images/lupaadm.svg'/>
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

                    <p>Produto</p>
                    <p>Categoria</p>
                    <p>estoque</p>
                    <p>preço</p>
                </div>

                {listar.map(item => 
                    <div className='listarprodutos'>
                        <img src=''/>
                        
                        <p>{item.nm_produto}</p>
                        <p>{item.nm_categoria}</p>
                        <p>{item.vl_preco}</p>
                        <p>{item.vl_preco}</p>

                        <Link to={'/cadastroproduto'} className='editarexcluir'>Editar <img src='/assets/images/editar.svg'/></Link>
                        <p onClick={() => Deletar(item.id_produto)} className='editarexcluir'>Excluir <img src='/assets/images/excluir.svg'/></p>
                    </div> 
                )}
            </section>
        </div>
    )
}