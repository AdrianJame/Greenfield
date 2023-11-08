import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';
import { useParams } from 'react-router-dom';

export default function AlterarProdutoADM () {
    const[categorias, setCategorias] = useState([])
    const[alterar, setAlterar] = useState({})

    const navigate = useNavigate();

    const[nome, setNome] = useState('');
    const[fabricante, setFabricante] = useState('');
    const[categoriaselecionada, setCategoriaselecionada] = useState('')
    const[preco, setPreco] = useState('');
    const[estoque, setEstoque] = useState('');
    const[garantia, setGarantia] = useState('');
    const [erro, setErro] = useState('')
    const[descricao, setDescricao] = useState('')

    const[dimensoes, setDimensoes] = useState('')
    const[material, setMaterial] = useState('')
    const[extra, setExtra] = useState('')


    const id = useParams().id;

    async function Alteritem(){
        let r = await axios.get(API_URL + '/produto/' + id)
        setAlterar(r.data)


        setNome(alterar.nm_produto)
        setFabricante(alterar.ds_fabricante)
        setCategoriaselecionada(alterar.id_categoria)
        setGarantia(alterar.nr_garantia)
        setPreco(alterar.vl_preco)
        setEstoque(alterar.qtd_estoque)
        setDescricao(alterar.ds_produto)
        setDimensoes(alterar.ds_dimensoes)
        setMaterial(alterar.ds_material)
        setExtra(alterar.ds_extra)
    }

    console.log(alterar.nm_produto)




    async function Buscarcategorias(){
        let r = await axios.get(API_URL + '/categoria')
        setCategorias(r.data)
    }


    useEffect(() => {
        Buscarcategorias()
        Alteritem()

        if(!storage('adm-logado')){
            navigate('/erro')
          }
      }, [])



    async function Salvaraa(){
        try{
            let produto = {
                nome: nome,
                fabri: fabricante,
                categoria: categoriaselecionada,
                preco: preco,
                estoque: estoque,
                garantia: garantia,
                descricao: descricao,
                dimensoes: dimensoes,
                material: material,
                extra: extra
            }
                let r = await axios.put(API_URL + '/produtos/' + id, produto);
                setErro('Produto alterado')

                navigate('/produtosadm')
        }

        catch(err){
            setErro(err.response.data.erro)
          }
    }



    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Salvaraa();
        }}

    return (
        <div className='page-alterar-produto'>
            
            <div className='session-01'>

                <div className='cabecalho-cadastro-produtos'>
                    <h1>CADASTRAR PRODUTOS</h1>
                    <img src='./assets/images/logobranca.svg'/>
                </div>

                <div className='session-01-conteudo'>
                    
                    <div className='conteudo-esquerda'>

                        <div className='imagem-com-fundo-escuro'>
                            <img src='./assets/images/adicionar-imagem.svg'/>
                        </div>

                        <div className='imagens-adicionais'>
                            <div className='imagem-com-fundo-escuro-pequeno'>
                                <img src='./assets/images/adicionar-imagem-pequeno.svg'/>
                            </div>

                            <div className='imagem-com-fundo-escuro-pequeno'>
                                <img src='./assets/images/adicionar-imagem-pequeno.svg'/>
                            </div>
                        </div>

                    </div>

                    <div className='conteudo-direita'>
                        
                        <div className="linha">
                            <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="Nome do Produto"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input value={fabricante} onChange={e => setFabricante(e.target.value)} type="text" placeholder="Fabricante"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <p>categoria</p>
                                <select value={categoriaselecionada} onChange={e => setCategoriaselecionada(e.target.value)}>
                                    <option>selecione</option>
                                    {categorias.map(item =>
                                        <option value={item.id_categoria}>{item.nm_categoria}</option>    
                                        )}
                                </select>                  
                        </div>

                        <div className="linha">
                            <input value={preco} onChange={e => setPreco(e.target.value)} type="text" placeholder="Preço"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input value={estoque} onChange={e => setEstoque(e.target.value)} type="text" placeholder="Estoque"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input value={garantia} onChange={e => setGarantia(e.target.value)} type="text" placeholder="Garantia"></input> 
                            <div className="risco"></div>                      
                        </div>

                    </div>
                
                </div>

            </div>

            <div className='line'>.</div>

            <div className='session-02'>

                <h1>DESCRIÇÃO DO PRODUTO</h1>

                <div className='session-02-conteudo'>
                    
                    <div className='desc-produto'>
                        <input value={descricao} onChange={e => setDescricao(e.target.value)}></input>
                    </div>
                
                </div>

            </div>

            <div className='line'>.</div>

           
                <div className='session-03'>

                    <h1>INFORMAÇÕES DO PRODUTO</h1>

                    <div className='session-03-conteudo'>
                            <div className='desc-produto'>
                                <input value={material} onChange={e => setMaterial(e.target.value)} type="text" placeholder="Material:"></input>
                                <input onKeyUp={teclaEnter} value={dimensoes} onChange={e => setDimensoes(e.target.value)} type="text" placeholder="Dimensões:"></input> 
                                <input value={extra} onChange={e => setExtra(e.target.value)} type="text" placeholder="Informações Extras:"></input> 
                            </div>
                    </div>

                </div>

           
                <div className='botao-salvar'>
                     <button onClick={Salvaraa}>Salvar</button>
                </div>
                <p className='erro'>{erro}</p>

        </div>
    )
}