import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';
import { useParams } from 'react-router-dom';
import { BuscarImagem, EnviarImagem } from '../../api/prod';

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
    const[imagem, setImagem] = useState('')


    const id = useParams().id;

    async function Alteritem(){
        let r = await axios.get(API_URL + '/produto/' + id)
        setAlterar(r.data)


        setPreco(r.data.vl_preco)
        setNome(r.data.nm_produto)
        setFabricante(r.data.ds_fabricante)
        setEstoque(r.data.qtd_estoque)
        setGarantia(r.data.nr_garantia)
        setDescricao(r.data.ds_produto)
        setDimensoes(r.data.ds_dimensoes)
        setMaterial(r.data.ds_material)
        setExtra(r.data.ds_extra)
    }






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



    async function Salvar(){
        try{
            let produto = {
                nome: nome,
                fabri: fabricante,
                preco: preco,
                garantia: garantia,
                descricao: descricao,
                categoria: categoriaselecionada,
                estoque: estoque,
                material: material,
                dimensoes: dimensoes,
                extra: extra
            }
                let r = await axios.put(API_URL + '/alterarproduto/' + id, produto);

                setErro('Produto alterado')

                const re = await EnviarImagem(imagem, id)

                navigate('/produtosadm')
        }

        catch(err){
            setErro(err.response.data.erro)
          }
    }

    function escolherImagem(){
        document.getElementById('imagemprod').click();
    }




    function mostrarImagem(){
        return URL.createObjectURL(imagem);

    }

    



    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Salvar();
        }}

    return (
        <div className='page-alterar-produto'>
            
            <div className='session-01'>

                <div className='cabecalho-cadastro-produtos'>
                    <h1>CADASTRAR PRODUTOS</h1>
                    <img src='/assets/images/logobranca.svg'/>
                </div>

                <div className='session-01-conteudo'>
                    
                    <div className='conteudo-esquerda'>

                    <div className='imagem-com-fundo-escuro' onClick={escolherImagem}>

                        {!imagem &&
                            <img src={BuscarImagem(alterar.ds_img1)}/>
                        }

                        {imagem &&
                        <img className='imagem-prod' src={mostrarImagem()}></img>
                        }

                        <input id='imagemprod' type='file' onChange={e => setImagem(e.target.files[0])} />
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
                     <button onClick={Salvar}>Salvar</button>
                </div>
                <p className='erro'>{erro}</p>

        </div>
    )
}