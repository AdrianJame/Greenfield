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

        return total;
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

                <h1>{Total()}</h1>
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

                </div>

            </div>

           <RodapeGreenfield/>

        </div>
    )
}