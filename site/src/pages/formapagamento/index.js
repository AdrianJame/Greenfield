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

            
            
            <RodapeGreenfield/>

        </div>
    )
}
    
        
            