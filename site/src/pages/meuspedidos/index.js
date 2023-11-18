import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';
import { salvarNovoPedido } from '../../api/pedido.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
// import ModalEndereco from '../../components/modalEndereco'
import Storage, { set } from 'local-storage'
//import { listar } from '../../api/enderecoAPI'
// import CardEndereco from '../../components/cardEndereco';
//import { buscarProdutoPorId } from '../../api/produtoAPI'
import { toast } from 'react-toastify'

export default function Meuspedidos(){



    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);

    const [idEndereco, setIdEndereco] = useState();
    
    const [frete, setFrete] = useState('');

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');


    const navigate = useNavigate();

    // async function carregarEnderecos() {
    //     const id = Storage('usuario-logado').id;
    //     const r = await listar(id);
    //     setEnderecos(r);
    // }

    // function exibirNovoEndereco() {
    //     setExibirEndereco(true);
    // }

    // function fecharNovoEndereco() {
    //     setExibirEndereco(false);
    //     carregarEnderecos();
    // }



    // async function carregarItens() {
    //     let carrinho = Storage('carrinho');
    //     if (carrinho) {

    //         let temp = [];

    //         for (let produto of carrinho) {
    //             let p = await buscarProdutoPorId(produto.id);

    //             temp.push({
    //                 produto: p,
    //                 qtd: produto.qtd
    //             })
    //         }

    //         setItens(temp);
    //     }

    // }

    function calcularTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.qtd * item.produto.info.preco;
        }
        return total;
    }

    // function exibirImagem(item) {
    //     if (item.produto.imagens.length > 0)
    //         return API_URL + '/' + item.produto.imagens[0];
    //     else
    //         return '/produto-padrao.png';
    // }



    // async function salvarPedido() {

    //     try {
    //         let produtos = Storage('carrinho');
    //         let id = Storage('usuario-logado').id;

    //         let pedido =
    //         {
    //             frete: frete,
    //             idEndereco: idEndereco,
    //             tipoPagamento: 'Cartão',
    //             cartao: {
    //                 nome: nome,
    //                 numero: numero,
    //                 vencimento: vencimento,
    //                 codSeguranca: cvv,
    //                 formaPagamento: tipo,
    //                 parcelas: parcela
    //             },
    //             produtos: produtos
    //         }

    //         const r = await salvarNovoPedido(id, pedido);
    //         toast.dark('Pedido foi inserido com sucesso');
    //         Storage('carrinho', []);
    //         navigate('/');

    //     }
    //     catch (err) {
    //         toast.error(err.response.data.erro);
    //     }

    // }




    useEffect(() => {
        // carregarEnderecos();
        // carregarItens();
    }, [])




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