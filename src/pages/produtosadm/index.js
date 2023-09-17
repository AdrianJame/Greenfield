import './index.scss'
import Menuadm from '../../components/menuadm'
import { useState } from 'react';

export default function Produtosadm(){

const[listar, setListar] = useState([]);

    async function Listarprodutos(){
        let r = await axios.get('http://localhost:5000/produtos');
        setListar(r.data);
    }

    useEffect(() => {
        Listarprodutos()
      }, [])

    return(
        <div className='produtosadm'>
            <Menuadm/>
            <section className='produtosadm-body'>
                <h1>Produtos</h1>

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

                        <section className='card-s2-maisproduto'>
                            <img src='/assets/images/maisproduto.svg'/>
                           
                            <p>Produto</p>
                        </section>
                    </div>
                </div>


                <div className='tipos-listar'>
                    <img src='/assets/images/estrelabranca.svg'/>

                    <p>Produto</p>
                    <p>Categoria</p>
                    <p>estoque</p>
                    <p>preço</p>
                    <p>catálogo</p>
                </div>
            </section>

            {listar.map(item => 
                <div className=''>
                    <img src=''/>
                    <img src=''/>
                    <p>{item.nm_produto}</p>
                    <p>{item.nm_categoria}</p>
                    <p>{item.vl_preco}</p>
                    <p>{item.vl_preco}</p>

                    <p>Editar <img src='/assets/images/'/></p>
                    <p>Editar <img src='/assets/images/'/></p>
                </div> 
            )}
        </div>
    )
}