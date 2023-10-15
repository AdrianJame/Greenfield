import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'

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
                
                    <div className='sub-section-pagamento'>

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

                            <h1>FORMA DE PAGAMENTO</h1>

                            <div className='cont-dir'>
                                <a>Editar</a>
                            </div>

                        </div>

                        <div className='pagamento'>
                            
                        </div>

                    </div>

                    <div className='options-pagamento'>
                        <img src='./assets/images/ping-verde.svg'/>
                    </div>

                </div>

            <div className='rodape'>
                <RodapeGreenfield/>
            </div>
            
            
        </div>
    )
}