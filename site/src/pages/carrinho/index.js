import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { API_URL } from '../../constants.js';
import localStorage from 'local-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Compcarrinho from '../../components/compcarrinho';

export default function Carrinho () {

    const[itens, setItens] = useState([]);


    function Removeritem(id){
        let carrinho = localStorage('carrinho');
        carrinho = carrinho.filter(item => item.id != id)

        localStorage('carrinho', carrinho)
        carregarcarrinho();
    }

    function Total(){
        let total = 0;

        for(let item of itens){
            total = total + item.produto.vl_preco * item.qtd;
        }
        return total.toFixed(2);
    }

    function Parcela(){
        let x = Total() / 3;

        return x
    }

    function Desconto(){
        let x = Total() * 0.10;
        let d = Total() - x

        return d
    }

    function Cupomtotal(){
        let x = Total() - 0.00;

        return x.toFixed(2)
    }

    async function carregarcarrinho(){
        let carrinho = localStorage('carrinho')

        let temp = [];

        for(let produtos of carrinho){
            let r = await axios.get(API_URL + '/produto/' + produtos.id)
            temp.push({
                produto: r.data,
                qtd: produtos.qtd
            })
            setItens(temp)
        }
    }



    useEffect(() => {
        carregarcarrinho()
    }, [])


    return(
        <div className='page-carrinho'>
            
            <Cabecalhocomlogin/>

            <h1>Carrinho</h1>

            <div className='status-pedido'>

                <div className='circle'>
                    <img src='./assets/images/carrinho-status.svg'/>
                </div>
                <div className='linha'></div>

                <div className='circle-s'>
                    <img src='./assets/images/ping-status.svg'/>
                </div>
                <div className='linha'></div>

                <div className='circle-s'>
                    <img src='./assets/images/pagamento-status.svg'/>
                </div>
            </div>

            <div className='faixa-02'>
                <section className='carrinho'>
                    {itens.map(item => 
                        <Compcarrinho item={item} Removeritem={Removeritem}/>
                    )}             
                </section>

            </div>

            <div className='faixa-03'>
                        
                <div className='cupom-e-frete'>

                    <div className='info'>
                        <input placeholder='CUPOM DE DESCONTO' type='text'/>
                        <button>Inserir</button>
                    </div>    
                    
                    <div className='info'>
                        <input placeholder='INSIRA O CEP' type='text'/>
                        <button>Calcular</button>
                    </div>  
                        
                </div>

            </div>

            <div className='faixa-04'>

                <div className='pagamento'>
                    <section className='pag-p1'><p>Subtotal</p> <p>R${Total()}</p></section>
                    <section className='pag-p1'><p>Frete</p> <p>R$0.00</p></section>
                    
                    <div className='pag-linha'></div>

                    <section className='pag-p1'><p>Desconto com cupom</p> <p>R$0.00</p></section>

                    <section className='faixa-verde'><p className='total'>Total</p> <p>R${Cupomtotal()}</p></section>

                    <section className='pag-parcela'>
                        <img src='/assets/images/cartao.svg'/>
                        <p>3x de R${Parcela()} s/juros</p>
                    </section>

                    <div className='pag-linha'></div>

                    <section className='desc'>
                        <img src='/assets/images/boleto.svg'/>
                        <div><p className='p-desc'>R${Desconto()}</p> <p>Com desconto à vista no boleto</p></div>
                    </section>

                    <a>Continuar</a>
                </div>

            </div>

           <RodapeGreenfield/>

        </div>
    )
}