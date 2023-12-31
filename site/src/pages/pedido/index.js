import './index.scss'
import { useEffect, useState } from 'react'
import ModalEndereco from '../../components/modalEndereco'
import localStorage from 'local-storage';
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { useNavigate } from 'react-router-dom'
import { listar } from '../../api/enderecoAPI.js'
import CardEndereco from '../../components/cardEndereco';
import { buscarProdutoPorId } from '../../api/produtoAPI.js'
import { API_URL } from '../../constants.js'
import { salvarNovoPedido } from '../../api/pedidoAPI.js'
import { toast } from 'react-toastify'
import axios from 'axios';
import { BuscarImagem } from '../../api/prod.js';




export default function Pedido() {
    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);
    

    const [idEndereco, setIdEndereco] = useState();
    
    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');


    const navigate = useNavigate();

    async function carregarEnderecos() {
        const id = localStorage('usuario-logado').id_cliente;
        const r = await listar(id);
        setEnderecos(r);
    }

    function exibirNovoEndereco() {
        setExibirEndereco(true);
    }

    function fecharNovoEndereco() {
        setExibirEndereco(false);
        carregarEnderecos();
    }


   



    async function carregarItens(){
        let carrinho = localStorage('carrinho')

        let temp = [];

            for(let produtos of carrinho){
                let r = await axios.get(API_URL + '/produto/' + produtos.id)
                temp.push({
                    produto: r.data,
                    qtd: produtos.qtd
                })
                setItens(temp)
            }
    }

    function calcularTotal(){
        let total = 0;

        for(let item of itens){
            total = total + item.produto.vl_preco * item.qtd;
        }
        return total.toFixed(2);
    }

    // function exibirImagem(item) {
    //     if (item.produto.imagens.length > 0)
    //         return API_URL + '/' + item.produto.imagens[0];
    //     else
    //         return '/produto-padrao.png';
    // }



    async function salvarPedido() {

        try {
            let produtos = localStorage('carrinho');
            let id = localStorage('usuario-logado').id_cliente;

            let pedido =
            {
                frete: frete,
                idEndereco: idEndereco,
                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: vencimento,
                    codSeguranca: cvv,
                    parcelas: parcela,
                    formaPagamento: tipo
                    
                },
                produtos: produtos
            }

            const r = await salvarNovoPedido(id, pedido);
            toast.dark('Pedido foi inserido com sucesso');
         localStorage('carrinho', []);
            navigate('/meuspedidos');

        }
        catch (err) {
            toast.error(err.message);
        }

    }




    useEffect(() => {
        carregarEnderecos();
        carregarItens();
    }, [])



    return (
        <div className='page-pedido'>
                <Cabecalhocomlogin/>
            
            <ModalEndereco exibir={exibirEndereco} fechar={fecharNovoEndereco} />


            <div className='pedido'>
                <h1> Pedido </h1>
                <div className='finalizar'>
                    <div>Total: <span> R$ {calcularTotal()}</span></div>
                    <button onClick={salvarPedido}> Finalizar Pedido </button>
                </div>
            </div>


            <div className='info'>
                <div>
                    <h2>Endereços</h2>

                    <div className='enderecos'>

                        {enderecos.map(item =>
                            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco} />
                        )}
                    </div>

                    <button className='botaolegal' onClick={exibirNovoEndereco}> Novo </button>

                </div>

                <div className='pagamento'>
                    <h2>Pagamento</h2>

                    <div className='form'>
                        <div className='agrup'>
                            <p>Nome do Titular do Cartão</p>
                            <input className='inputlegal' type='text' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className='agrup'>
                            <p>Número</p>
                            <input className='inputlegal'  type='text' value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <div  className='agrup'>
                            <p>Validade</p>
                            <input className='inputlegal'  type='text' value={vencimento} onChange={e => setVencimento(e.target.value)} />
                        </div>
                        <div className='agrup'>
                            <p>CVV:</p>
                            <input className='inputlegal'  type='text' value={cvv} onChange={e => setCvv(e.target.value)} />
                        </div>
                        <div className='agrup'>
                            <p>Tipo de Pagamento:</p>
                            <select className='selectlegal' value={tipo} onChange={e => setTipo(e.target.value)}   >
                                <option disabled hidden selected>Selecione</option>
                                <option>Crédito</option>
                                <option>Débito</option>
                            </select>
                        </div>
                        <div className='agrup'>
                            <p>Parcelas:</p>
                            <select className='selectlegal' value={parcela} onChange={e => setParcela(e.target.value)}  >
                                <option disabled hidden selected>Selecione</option>
                                <option value={1}>01x à Vista</option>
                                <option value={1}>01x sem Juros</option>
                                <option value={2}>02x sem Juros</option>
                                <option value={3}>03x sem Juros</option>
                            </select>
                        </div>
                        <div />
                    </div>

                    <div className='info-extra'>
                        
                        <div>
                            <h2> Frete </h2>
                            <div className='form'>
                                <div>
                                    <label>Tipo:</label>
                                    <select className='selectlegal' value={frete} onChange={e => setFrete(e.target.value)}  >
                                        <option disabled hidden selected>Selecione</option>
                                        <option value={'Normal'}>Normal - R$ 10,00</option>
                                        <option value={'Sedex'}>Sedex - R$ 25,00</option>
                                    </select>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='itens'>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantidade</th>
                            <th>Preço Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {itens.map(item =>
                            <tr>
                                <td>
                                    <div className='celula-item'>
                                        <img src={BuscarImagem(item.produto.ds_img1)} />
                                        <div>
                                            <h3> {item.produto.nm_produto} </h3>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.qtd}
                                </td>
                                <td>
                                    R$ {item.produto.vl_preco}
                                </td>
                                <td>
                                    R$ {item.qtd * item.produto.vl_preco}
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            <RodapeGreenfield/>

        </div>
    )
}

