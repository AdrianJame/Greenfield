import './index.scss';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { BuscarImagem } from '../../api/prod';
import localStorage from 'local-storage';
import { toast } from 'react-toastify'

export default function Produto(){
    const[produtos, setProdutos] = useState([])
    const [idCliente, setIdCliente] = useState('');

    const  id  = useParams().id;

    async function Listarproduto(){
         let r = await axios.get(API_URL + '/produto/' + id);
         setProdutos(r.data);
    }

    function AdicionarCarrinho(){
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
        }
    }


    function Parce(preco){
        let parcela = preco / 3;
        return parcela.toFixed(2);
    }

    function Desconto(preco){
        let i = preco * 0.10;
        let desconto = preco - i;

        return desconto.toFixed(2);
    }

     
    // function AdicionarCarrinho(){
    //     let carrinho = [];

    //     if(localStorage('carrinho')){
    //         carrinho = localStorage('carrinho')
    //     }

    //     if(!carrinho.find(item => item.id === id)){
    //         carrinho.push({
    //             id: id,
    //             qtd: 1
    //         })
    //         localStorage('carrinho', carrinho);
    //     }
    // }




    useEffect(() => {
        Listarproduto()
        Parce()
        if(localStorage('usuario-logado')){
            const usuariologado = localStorage('usuario-logado')
            setIdCliente(usuariologado.id_cliente)
        }

}, [])

    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>
            <section className='conteudo-pagina'>

                    <div className='card-produto'>
                            <section className='cabe-card'>
                                <p>{produtos.nm_categoria}</p>

                               <p className='fav'>Adicionar favorito</p>
                            </section>

                                <section className='conteudo-card'>
                                    <div className='imagens-card'>
                                        <img src={BuscarImagem(produtos.ds_img1)}/>

                                    </div>

                                    <div className='descricao-produto'>
                                        <div className='info-produto'>
                                            <p className='nome-produto'>{produtos.nm_produto}</p>
                                            <p className='fabri'>Fabricante: <span>{produtos.ds_fabricante}</span></p>

                                            <p className='maisven'>Mais vendido</p>

                                            <p className='vendido'>Vendido por: <span>Greenfield</span></p>
                                        </div>

                                        <div className='info-paga'>
                                            <section className='antigop'>
                                                <img src='/assets/images/boleto.svg'/>
                                                <p>De R${produtos.vl_preco} <span>por:</span></p>
                                            </section>

                                            <section className='preco'>
                                                <p className='valor'>R${Desconto(produtos.vl_preco)}</p>
                                                <p>à vista no boleto</p>
                                            </section>

                                            <section className='parcela'>
                                                <div className='pag-cartao'><img src='/assets/images/cartao.svg'/> <p>R${produtos.vl_preco}</p></div>
                                                <p>3x de R$ {Parce(produtos.vl_preco)} sem Juros no cartão</p>
                                            </section>
                                        </div>

                                        <div className='botao-comprar'>
                                            <a className='AAAA' onClick={AdicionarCarrinho()}> Comprar</a>
                                        </div>
                                    </div>
                                </section>

                    </div> 

                    <div className='desc-info'>
                        <div className='linha'></div>

                        <div className='card-produto'>
                            <h1 className='titulo'>Descrição do Produto</h1>

                            <p>{produtos.ds_produto}</p>
                        </div>

                        <div className='linha'></div>

                        <div className='card-produto'>
                            <h1 className='titulo'>Informações do Produto</h1>

                            <ul>
                                <li className='p-info'> {produtos.ds_material}</li>
                                <li className='p-info'> {produtos.ds_dimensoes}</li>
                                <li className='p-info'> {produtos.ds_extras}</li>
                            </ul>
                        </div>
                    </div>
               
            </section>
        </div>
    )
}