import './index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants';


export default function Pesquisar(){

    const[listar, setListar] = useState([]);
    const[nome, setNome] = useState();
    
    async function Buscarpornome(){  
            let r = await axios.get(API_URL + '/produto/nome?nome=' + nome)
            setListar(r.data)
    }

    async function Listarprodutos(){
        let r = await axios.get(API_URL + '/produtos');
        setListar(r.data);
    }

    useEffect(() => {
        Listarprodutos()
    }, [])

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Buscarpornome();
        }}

    return(
        <div className='Pagina-Pesquisa'>
            <Cabesemdgd/>

            <section className='buscar'>
                <h1>Busque o produto que deseja</h1>

                <div className='div-input-select'>
                    <div className='borda'>
                        <section className='div-input'>
                            <input onKeyUp={teclaEnter} value={nome} onChange={e => setNome(e.target.value)}/>
                            <img onClick={Buscarpornome} src='/assets/images/lupa.svg'/>
                        </section>
                    </div>
                </div>
            </section>

            <div className='listar-produtos'>
                <h1>Resultados da busca</h1>

                {listar.map(item =>
                    <div className='tudo'>
                        <div className='listar-produtosf'> 
                            <img/>
                            <div className='produtos-desc'>
                                <p className='produtos-nome'>{item.nm_produto}</p>
                                <p className='produtos-preco'>R$ {item.vl_preco}</p>
                            </div>
                        </div>

                        <button><img src='/assets/images/carrinho-branco.png'/> Comprar</button>
                    </div>
                )}
            </div>
        </div> 
    )
}