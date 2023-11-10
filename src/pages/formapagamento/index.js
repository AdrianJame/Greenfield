import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';
import { Link } from 'react-router-dom';

export default function FormaDePagamento(){
    return(
        <div className='pagamento'>
            <Cabecalhocomlogin/>

            <div className='faixa1'>
                
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
            
            </div>

            <div className='faixa2'>

                <div className='conteudo'>

                    <div className='texto-e-inputs'>

                    <div className='texto-e-inputs-esq'>

                        <p className='parcelas'> 
                            PARCELAS
                        </p>


                        <select>
                            <option >Selecione</option>
                            <option ></option>
                            <option ></option>
                            <option ></option>
                        </select>

                        <p>
                            Números do Cartão
                        </p>

                        <input className='in' placeholder="**** **** ****"></input>

                        <p>

                            Nome do Titular
                        </p>

                        <input className='in' placeholder="Nome completo"></input>

                        <p>
                            Validade do cartão

                        </p>

                        <div className='validade-cartao'> 
                            <input placeholder="MM"></input>

                            <input placeholder="AA"></input>
                        </div>

                        <p>
                            Código de Segurança
                        </p>

                        <input placeholder="***" className='code-seguranca'></input>


                    </div>

                    <div className='dir'>
                        <p>
                            CPF do titular do cartão
                        </p>

                        <input placeholder="000.000.000-00"></input>

                        <p>Data de Nascimento</p>

                        <input placeholder="Ex: 01/01/2002"></input>
                    </div>

                    </div>

                    <Link>CONTINUAR</Link>

                </div>
    
            </div>
            
            <RodapeGreenfield/>

        </div>
    )
}
    
        
            