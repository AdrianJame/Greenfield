import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { API_URL } from '../../constants.js';

export default function Pag () {
    
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

            <div className='section-pagamento'>

                <div className='pagamento'>

                </div>

            </div>

            <RodapeGreenfield/>
                
        </div>
    )
}