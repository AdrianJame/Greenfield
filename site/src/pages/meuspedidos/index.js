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

    
    // const navigate = useNavigate();

    // let login = get('user-login');

    // if (!login) {
    //     navigate('/login');
    // }

    // const [produtosPedidos, setProdutosPedidos] = useState([]);
    // const [carregando, setCarregando] = useState(false);

    // async function buscarPedidos() {
    //     setCarregando(true);

    //     try {
    //         let pedidos = await buscarPedidoPorCliente(login.id);

    //         let produtos = await buscarProdutosArrayPedidos(pedidos);

    //         setProdutosPedidos(produtos);

    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Não foi possível carregar os seus pedidos.')
    //     }

    //     setCarregando(false);
    // }



    return(
        <div className='meuspedidos'>
            <Cabecalhocomlogin/>

            <div className='faixa1'>
                <h1>MEUS PEDIDOS</h1>
                
                {pedidos.map(item =>
                                
                            
                                
                <div className='pedido'>
                
                    <h3><span>MINHA CONTA</span> - MEUS PEDIDOS </h3>
                    <h3 className='titulo-pedido'>Meu Pedido</h3>

                    
                            <div className='pedido-info'>
                                 <div className='esquerda'>
                                <img src='./assets/images/image 180.svg' />
                                <h4>Pedido N°: {item.id_pedido} </h4>
                                
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
    
                              
                            </div>
                    </div>
                        
                

                </div>
                )}
               
                


            </div>

            <RodapeGreenfield/>

        </div>
    )
}