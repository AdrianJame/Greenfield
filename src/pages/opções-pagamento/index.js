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

                <div className='faixa-01'>
                    
                    <div className='conteudo-esquerda'>
                        
                        <div className='escolha-de-frete'>
                            <img src='./assets/images/ping-verde.svg'/>
                            <h1>FRETE</h1>
                        </div>

                        <h1>ESCOLHA A FORMA DE PAGAMENTO</h1>

                        <div className='pagamento-card'>
                            <img src=''/>
                            <h1>PAGUE COM CARTÃO</h1>
                        </div>

                    </div>
                </div>

        </div>
    )
}