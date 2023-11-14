import './index.scss';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import { BuscarImagem } from '../../api/prod';

export default function Produto(){
    const[produtos, setProdutos] = useState([])
    const[preco, setPreco] = useState()
    const[desc, setDesc] = useState()

    const id = useParams().id;

     async function Listarproduto(){
         let r = await axios.get(API_URL + '/produto/' + id);
         setProdutos(r.data);

         
        setPreco(Number(produtos.vl_preco) / 3)

        const x = Number(produtos.vl_preco) * 0.13;
        setDesc(Number(produtos.vl_preco) - x)
        console.log(x)
        
     }


     function calculos(){

     }

    useEffect(() => {
        Listarproduto()
        calculos()

}, [])

    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>
            <section className='conteudo-pagina'>

                    <div className='card-produto'>
                            <section className='cabe-card'>
                                <p>{produtos.nm_categoria}</p>

                                <img src=''/>
                            </section>

                                <section className='conteudo-card'>
                                    <div className='imagens-card'>
                                        <img src={BuscarImagem(produtos.ds_img1)}/>
                                        <section>
                                            <img src=''/>
                                            <img src=''/>
                                        </section>
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
                                                <p className='valor'>R${desc}</p>
                                                <p>à vista no boleto</p>
                                            </section>

                                            <section className='parcela'>
                                                <div className='pag-cartao'><img src='/assets/images/cartao.svg'/> <p>R${produtos.vl_preco}</p></div>
                                                <p>3x de R$ {preco} sem Juros no cartão</p>
                                            </section>
                                        </div>

                                        <div className='botao-comprar'>
                                            <Link className='AAAA'> Comprar</Link>
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