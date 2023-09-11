import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'

export default function Carrinho () {

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
                
                <div className='produto'>
                    
                </div>
            
            </div>

            <div className='faixa-03'>
                        
                <div className='cupom-e-frete'>

                    <div className='info'>
                        <input placeholder='CUPOM DE DESCONTO' type='text'/>
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