import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';
import { useState } from 'react';
import { salvarNovoPedido } from '../../api/pedido.js';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Meuspedidos(){



const navigate = useNavigate()
const [itens, setItens] = useState([]);
const [enderecos, setEnderecos] = useState([]);
const [exibirEndereco, setExibirEndereco] = useState(false);

const [idEndereco, setIdEndereco] = useState();


const [nome, setNome] = useState('');
const [numero, setNumero] = useState('');
const [vencimento, setVencimento] = useState('');
const [cvv, setCvv] = useState('');
const [tipo, setTipo] = useState('');
const [parcela, setParcela] = useState('');





function exibirImagem(item) {
    if (item.produto.imagens.length > 0)
        return API_URL + '/' + item.produto.imagens[0];
    else
        return '/produto-padrao.png';
}



 async function salvarPedido() {

   

    try {
        let produtos = Storage('carrinho');
        let id = Storage('cliente-logado').id;

        let pedido =
        {
            nome: nome
        }

        const r = await salvarNovoPedido(id, pedido);
        alert('Pedido foi inserido com sucesso');
        Storage('carrinho', []);
        navigate('/');

    }
    catch (err) {
        alert(err.response.data.erro);
    }

}


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