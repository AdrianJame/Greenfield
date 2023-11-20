import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { API_URL } from '../../constants.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {toast}  from 'react-toastify'
import { salvarNovoPedido } from '../../api/pedido.js';
import storage from 'local-storage'

export default function Pag () {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [cpf, setCpf] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [itens, setItem] = useState([]);
    const [IDuser, SetIDuser] = useState(0);
    const [produtosIds, setProdutosIds] = useState([]);


    async function AdicionarPedidos() {
        try {
            for (let produtoId of produtosIds) {

                if (IDuser !== 0 && produtoId !== 0) {

                    const resposta = await salvarNovoPedido(IDuser, produtoId);
                    toast.success('Pedido Realizado!');
                    storage.remove('carrinho');
                    
                }

                else {

                    toast.dark('Pedido não realizado!')
                }

                window.location.reload()
            }





        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        
        <div className='page-forma-de-pagamento'>
            
            <Cabecalhocomlogin/>

            <h1>Pagamento</h1>
            
            <div className='status-pedido'>

                <div className='circle-verde'>
                    <img src='./assets/images/carrinho-status.svg'/>
                </div>
                    <div className='linha-verde'></div>

                <div className='circle-verde'>
                    <img src='./assets/images/ping-verde.svg'/>
                </div>
                    <div className='linha-verde'></div>

                <div className='circle-verde'>
                    <img src='./assets/images/icon-dinheiro-verde.svg'/>
                </div>

            </div>

            <div className='section-pagamento'>

                <div className='frete-e-pagamento'>

                    <div className='cont-esq'>

                        <div className='circle-verde'>
                            <img src='./assets/images/ping-verde.svg'/>
                        </div>

                        <div className='desc-frete'>
                            <p>Frete:</p>
                            <p>Entrega em até</p>
                        </div>

                    </div>

                    <div className='cont-dir'>
                        <a>Editar</a>
                    </div>

                </div>

                <h1>ESCOLHA A FORMA DE PAGAMENTO</h1>

                <div className='escolha-pagamento'>

                    <div className='select-pagamento'>
                        
                        <div className='conteudo-pagamento-esq'>
                            
                            <img src='./assets/images/image-cartao-credito.svg'/>
                            <p>PAGUE COM CARTÃO</p>
                
                        </div>
                        
                        <div className='conteudo-pagamento-seletor'>
                        
                            <input type='checkbox'></input>
            
                        </div>

                    </div>

                </div>

            </div>

            <div className='faixa2'>

                <div className='conteudo'>

                    <div className='texto-e-inputs'>

                    <div className='texto-e-inputs-esq'>

                        <p className='parcelas'> 
                            PARCELAS
                        </p>


                        <select>
                            <option value={1}>01x à Vista</option>
                            <option value={1}>01x sem Juros</option>
                            <option value={2}>02x sem Juros</option>
                            <option value={3}>03x sem Juros</option>
                        </select>

                        <p>
                            Números do Cartão
                        </p>

                        <input className='in' placeholder="**** **** ****"  type='text' value={numero} onChange={e => setNumero(e.target.value)} ></input>

                        <p>

                            Nome do Titular
                        </p>

                        <input className='in' placeholder="Nome completo" type='text' value={nome} onChange={e => setNome(e.target.value)} ></input>

                        <p>
                            Validade do cartão

                        </p>

                        <div className='validade-cartao'> 
                            <input placeholder="Ex:01/01" type='text' value={vencimento} onChange={e => setVencimento(e.target.value)}></input>

                            
                        </div>

                        <p>
                            Código de Segurança
                        </p>

                        <input placeholder="***" className='code-seguranca' type='text' value={cvv} onChange={e => setCvv(e.target.value)}></input>


                    </div>

                    <div className='dir'>
                        <p>
                            CPF do titular do cartão
                        </p>

                        <input placeholder="000.000.000-00" type='text' value={cpf} onChange={e => setCpf(e.target.value)}></input>

                        <p>Data de Nascimento</p>

                        <input placeholder="Ex: 01/01/2002" type='text' value={datanascimento} onChange={e => setDatanascimento(e.target.value)}></input>
                    </div>

                    </div>

                    <Link onClick={AdicionarPedidos}>Finalizar pedido</Link>

                </div>
    
            </div>

            <RodapeGreenfield/>
                
        </div>
    )
}