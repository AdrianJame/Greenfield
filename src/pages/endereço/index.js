import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'

export default function Logradouro () {
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
                
                <div className='produto'>
                    
                </div>
            
            </div>

            <div className='faixa-frete'>

                <div className='options-frete'>

                </div>

                <div className='options-frete'>
                    
                </div>

            </div>

            <div className='logradouro-e-total-pedido'>

                <div className='logradouro'>

                    <input placeholder='Logradouro*' type='text'/>
                    <input placeholder='Número*' type='text' />
                    <input placeholder='Complemento*' type='text' />
                    <input placeholder='Referência' type='text' />
                    <input placeholder='Bairro*' type='text' />
                    <input placeholder='Cidade*' type='text' />
                    <input placeholder='UF*' type='text' />

                </div>

                <div className='pagamento'></div>

            </div>

            <div className='rodape'>
                <RodapeGreenfield/>
            </div>

        </div>
    )
}