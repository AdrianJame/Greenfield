import './index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants';
import { Link, useParams } from 'react-router-dom';

export default function Produto(){
    const[produto, setProduto] = useState()

    const id = useParams().id;

     async function Listarprodutos(){
         let r = await axios.get(API_URL + '/produto/:id' + id);
         setProduto(r.data);
     }

    useEffect(() => {
        Listarprodutos()
}, [])

    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>
            <section className='conteudo-pagina'>

                {produto.map(item => 
                    <div className='card-produto'>
                            <section className='cabe-card'>
                                <p>Categoria</p>

                                <img src=''/>
                            </section>

                                <section className='conteudo-card'>
                                    <div className='imagens-card'>
                                        <img src=''/>
                                        <section>
                                            <img src=''/>
                                            <img src=''/>
                                        </section>
                                    </div>

                                    <div className='descricao-produto'>
                                        <div className='info-produto'>
                                            <p className='nome-produto'>{item.nm_produto}</p>
                                            <p className='fabri'>Fabricante: <span>{item.ds_fabricante}</span></p>

                                            <p className='maisven'>Mais vendido</p>

                                            <p className='vendido'>Vendido por: <span>Greenfield</span></p>
                                        </div>

                                        <div className='info-paga'>
                                            <section className='antigop'>
                                                <img src='/assets/images/boleto.svg'/>
                                                <p>De {item.vl_preco} <span>por:</span></p>
                                            </section>

                                            <section className='preco'>
                                                <p className='valor'>R$55,99</p>
                                                <p>à vista no boleto</p>
                                            </section>

                                            <section className='parcela'>
                                                <div className='pag-cartao'><img src='/assets/images/cartao.svg'/> <p>{item.vl_preco}</p></div>
                                                <p>3x de R$ 2,19 sem Juros no cartão</p>
                                            </section>
                                        </div>

                                        <div className='botao-comprar'>
                                            <Link> Comprar</Link>
                                        </div>
                                    </div>
                                </section>

                    </div>
                )}    
                {produto.map(item => 
                    <div>
                        <div className='linha'></div>

                        <div className='card-produto'>
                            <h1 className='titulo'>Descrição do Produto</h1>

                            <p>{ds_produto}</p>
                        </div>

                        <div className='linha'></div>

                        <div className='card-produto'>
                            <h1 className='titulo'>Informações do Produto</h1>

                            <p></p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}