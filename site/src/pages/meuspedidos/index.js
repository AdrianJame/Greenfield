import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';

export default function Meuspedidos(){




    return(
        <div className='meuspedidos'>
            <Cabecalhocomlogin/>

            <div className='faixa1'>
                <h1>MEUS PEDIDOS</h1>
                

                <div className='pedido'>
                
                    <h3><span>MINHA CONTA</span> - MEUS PEDIDOS </h3>
                    <h3 className='titulo-pedido'>Meu Pedido</h3>

                    
                            <div className='pedido-info'>
                            <div className='esquerda'>
                                <img src='./assets/images/image 180.svg' />
                            </div>
    
                            <h6>ver resumo</h6>
                        </div>
                        
                        <div className='dt-pedido'>
                            <p></p>
                        </div>
                        
    
                        <div className='detalhe-pedido'>
                            <h6>mais detalhes do pedido</h6>
                            <img src='./assets/images/image 241.svg' />
                        </div>
    
    
                        <div className='forma-pagamento'>
                            <h2>FORMA DE PAGAMENTO SELECIONADA</h2>
    
                            <div className='linha'>
                                <div className='pagamento'>
                                        
                                </div>
    
                                <div className='pagar'>
                                    
                                </div>
                            </div>
                        </div>
                        
                

                </div>
               
                


            </div>

            <RodapeGreenfield/>

        </div>
    )
}