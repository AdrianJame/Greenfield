import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { API_URL } from '../../constants.js';
import localStorage from 'local-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Compcarrinho from '../../components/compcarrinho';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import { checkCep } from '../../api/prod';
export default function Carrinho () {

    const[itens, setItens] = useState([]);
    const[ende, setEnde] = useState([]);
    const[cupom, setCupom] = useState('');
    const [Erro, setErro] = useState('');

    const navigate = useNavigate();

    function Removeritem(id){
        let carrinho = localStorage('carrinho');
        carrinho = carrinho.filter(item => item.id != id)

        localStorage('carrinho', carrinho)
        carregarcarrinho();
        window.location.reload()
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

        return x.toFixed(2)
    }

    function Desconto(){
        let x = Total() * 0.10;
        let d = Total() - x

        return d
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

    const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data)
    });

}



    useEffect(() => {
        carregarcarrinho()
    }, [])


    return(
        <div className='page-carrinho'>
            
            <Cabecalhocomlogin/>

            <h1>Carrinho</h1>


            <div className='faixa-02'>
                <section className='carrinho'>
                    
                    {itens.map(item => 
                            <Compcarrinho item={item} Removeritem={Removeritem}/>
                    )}  

            </section>

            </div>

            {/* <div className='faixa-03'>
                        
                <div className='cupom-e-frete'>

                    <div className='info'>
                        <input   placeholder='CUPOM DE DESCONTO' type='text'/>
                        <button onClick={Cupomtotal}>Inserir</button>
                    </div>           
                        
                </div>

            </div> */}

            <div className='faixa-04'>

                <div className='pagamento'>
                    <section className='pag-p1'><p>Subtotal</p> <p>R${Total()}</p></section>
                    <section className='pag-p1'><p>Frete</p> <p>R$0.00</p></section>
                    
                    <div className='pag-linha'></div>

                    <section className='faixa-verde'><p className='total'>Total</p> <p>R${Total()}</p></section>

                    <section className='pag-parcela'>
                        <img src='/assets/images/cartao.svg'/>
                        <p>3x de R${Parcela()} s/juros</p>
                    </section>

                    <div className='pag-linha'></div>

                    <section className='desc'>
                        <img src='/assets/images/boleto.svg'/>
                        <div><p className='p-desc'>R${Desconto()}</p> <p>Com desconto à vista no boleto</p></div>
                    </section>

                    <a onClick={() => navigate('/pedido')}>Continuar</a>
                </div>

            </div>

           <RodapeGreenfield/>

        </div>
    )
}