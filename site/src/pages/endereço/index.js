import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { Link } from 'react-router-dom'
import { API_URL } from '../../constants.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Compcarrinho from '../../components/compcarrinho';
import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development.js';
import { salvar } from '../../api/endereco.js';
import { toast, ToastContainer } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';



export default function Logradouro () {
    const[endereco, setEndereco] = useState([])
    const [itens, setItens] = useState([])
    const navigate = useNavigate()

    const[logradouro , setLogradouro] = useState()
    const[bairro , setBairro] = useState()
    const[cidade , setCidade] = useState()
    const[estado , setEstado] = useState()
    const[complemento, setComplemento] = useState()
    const[numero, setNumero] = useState()
    const[cep, setCep] = useState()
    const[referencia, setReferencia] = useState()


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

    function Parcela(){
        let x = Total() / 3;

        return x.toFixed(2)
    }

    function Desconto(){
        let x = Total() * 0.10;
        let d = Total() - x

        return d
    }

    function Total(){
        let total = 0;

        for(let item of itens){
            total = total + item.produto.vl_preco * item.qtd;
        }
        return total.toFixed(2);
    }

    async function salvarEndereco() {
        try {
            const id = Storage('usuario-logado').id;
            const r = await salvar(id, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento);
            toast.dark('Endereço salvo');

            
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }   



    useEffect(() => {
        carregarcarrinho()
    }, [])

    


    const checkCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data)
            setLogradouro(data.logradouro)
            setBairro(data.bairro)
            setCidade(data.localidade)
            setEstado(data.uf)
        });

    }

    



    return (
        <div className='page-endereco'>
            
            <Cabecalhocomlogin/>
            
                <h1>Endereço</h1>

                <div className='status-pedido'>

                    <div className='circle'>
                        <img src='./assets/images/carrinho-status.svg'/>
                    </div>
                    <div className='linha-verde'></div>

                    <div className='circle-verde'>
                        <img src='./assets/images/ping-verde.svg'/>
                    </div>
                    <div className='linha'></div>

                    <div className='circle-s'>
                        <img src='./assets/images/pagamento-status.svg'/>
                    </div>
                </div>

                <div className='faixa-02'>
                    
                <section className='carrinho'>
                     {itens.map(item => 
                        <Compcarrinho item={item} />
                    )}              
                </section>
                
                </div>

                

                <div className='logradouro-e-total-pedido'>

                    <div className='logradouro'>
                        
                        <div className='line-1'>
                            <input placeholder='INSIRA O CEP' type='text' onBlur={checkCep}/>
                            <input placeholder='Logradouro*' type='text' value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                        </div>
                        
                        <div className='line-2'>
                            <input className='line-menor' placeholder='Número*' type='text'value={numero} onChange={e => setNumero(e.target.value)} />
                            <input className='line-maior' placeholder='Complemento*' type='text'value={complemento} onChange={e => setComplemento(e.target.value)}/>
                        </div>
                        
                        <div className='line-3'>
                            <input placeholder='Referência' type='text' value={referencia} onChange={e => setReferencia(e.target.value)}/>
                        </div>
                        
                        <div className='line-4'>
                            <input placeholder='Bairro*' type='text' value={bairro} onChange={e => setBairro(e.target.value)}/>
                            <input placeholder='Cidade*' type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
                            <input placeholder='Estado*' type='text' value={estado} onChange={e => setEstado(e.target.value)}/>
                        </div>

                        <ToastContainer/>
                        <a onClick={salvarEndereco}>SALVAR ALTERAÇÕES</a>

                    </div>

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

                                <a onClick={() => navigate('/pagamento')}>Continuar</a>
                        </div>

                    </div>

                </div>

            
            <RodapeGreenfield/>

        </div>
    )
}