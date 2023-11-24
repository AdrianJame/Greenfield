import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import localStorage from 'local-storage';

export default function Meuspedidos(){

    const [pedidos, setPedidos] = useState([])

    async function Busacarpedidos(){
        const id = localStorage('usuario-logado').id_cliente;
        let r = await axios.get(API_URL + '/pedido/usuario/' + id)
        setPedidos(r.data)
    }

    useEffect(() => {
        Busacarpedidos()
      }, [])

    


    return(
        <div className='meuspedidos'>
            <Cabecalhocomlogin/>

            <div className='faixa1'>
                <h1>MEUS PEDIDOS</h1>
                
                
                                
                            
                                
                <div className='pedido'>
                
                    <h3><span>MINHA CONTA</span> - MEUS PEDIDOS </h3>
                    <h3 className='titulo-pedido'>Meu Pedido</h3>

                    {pedidos.map(item =>

                        <div> 
                            <div className='pedido-info'>
                                 <div className='esquerda'>
                                <img src='./assets/images/image 180.svg' />
                                <h4>Pedido N°: {item.id_pedido} </h4>
                                
                                    </div>

                                    <p> Data do pedido: {item.dt_pedido.substr(0, 10)}</p>    
                           
                             </div>
                        
                        <div className='dt-pedido'>
                            <p>Status do Pedido: {item.ds_status}</p>
                            <p>Frete: R${item.vl_frete}</p>
                        </div>
                        
    
                       
    
    
                        <div className='forma-pagamento'>
                            <h2>FORMA DE PAGAMENTO SELECIONADA</h2>
    
                            <div className='linha'>
                                <div className='pagamento'>

                                <p>Cartão</p>

                                <img src='./assets/images/image-cartao-credito.svg' />

                                
                                
                                

                                        
                                </div>
    
                              
                            </div>
                        </div>

                        <div className='risco'> </div>

                        </div>
                    )}
                

                </div>
                
               
                


            </div>

            <RodapeGreenfield/>

        </div>
    )
}