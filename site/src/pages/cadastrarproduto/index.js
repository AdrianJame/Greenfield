import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';
import { Cadastrarproduto, EnviarImagem } from '../../api/prod.js';
import { toast } from  'react-toastify'


export default function CadatroProdutoADM () {
    const[categorias, setCategorias] = useState([])

    const navigate = useNavigate();

    const[nome, setNome] = useState('');
    const[fabricante, setFabricante] = useState('');
    const[categoriaselecionada, setCategoriaselecionada] = useState(0)
    const[preco, setPreco] = useState('');
    const[estoque, setEstoque] = useState('');
    const[garantia, setGarantia] = useState('');
    const [id, setId] = useState(0);
    const [erro, setErro] = useState('')
    const[descricao, setDescricao] = useState('')

    const[imagem, setImagem] = useState('')


    const[dimensoes, setDimensoes] = useState('')
    const[material, setMaterial] = useState('')
    const[extra, setExtra] = useState('')




    async function Buscarcategorias(){
        let r = await axios.get(API_URL + '/categoria')
        setCategorias(r.data)
    }


    useEffect(() => {
        Buscarcategorias()

        if(!storage('adm-logado')){
            navigate('/erro')
          }
      }, [])

      



    async function Salvar(){

        try{

            if(preco > 0 && garantia >= 0 && estoque > 0 && imagem != ''){

                const novoProduto = await Cadastrarproduto(nome, fabricante, categoriaselecionada, preco, estoque, garantia, descricao, dimensoes, material, extra);
                    let idp = (novoProduto.id)
                    console.log(idp);


                    const re = await EnviarImagem(imagem,idp)
                    
    
                    setErro('Produto Cadastrado!')
                    console.log(novoProduto.id);
                    alert('Produto Cadastrado')
            

            

            limpar()

            navigate('/produtosadm')
            }

            else if(imagem == ''){
                setErro('Não pode adicionar sem imagem')
            }

            else if(preco <= 0){
                setErro('O preço não pode ser menor que 0')
            }

            else if(garantia < 0){
                setErro('a garantia não pode ser menor que 0')
            }

            else if(estoque <= 0){
                setErro('O estoque não pode ser menor ou igual a 0')
            }
        }

        catch(err){
            

            if (err.response)
            setErro(err.response.data.erro)

            else
            setErro(err.message)
          }
    }

    
    
    async function limpar(){
        setNome('')
        setFabricante('')
        setCategoriaselecionada('')
        setPreco('')
        setEstoque('')
        setGarantia('')
        setDescricao('')
        setDimensoes('')
        setMaterial('')
        setExtra('')
        setImagem()
        setId(0)
    }


    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Salvar();
        }}


        function escolherImagem(){
            document.getElementById('imagemprod').click();
        }

        


        function mostrarImagem(){
            return URL.createObjectURL(imagem);

        }
        
        

    return (
        <div className='page-cadastro-adm'>
            
            <div className='session-01'>

                <div className='cabecalho-cadastro-produtos'>
                    <h1>CADASTRAR PRODUTOS</h1>
                    <img src='./assets/images/logobranca.svg'/>
                </div>

                <div className='session-01-conteudo'>
                    
                    <div className='conteudo-esquerda'>

                        <div className='imagem-com-fundo-escuro' onClick={escolherImagem}>

                            {!imagem &&
                                <img src='./assets/images/adicionar-imagem.svg'/>
                            }

                            {imagem &&
                            <img className='imagem-prod' src={mostrarImagem()}></img>
                            }

                            <input id='imagemprod' type='file' onChange={e => setImagem(e.target.files[0])} />
                        </div>




                        

                    </div>

                    <div className='conteudo-direita'>
                        
                        <div className="linha" >
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
                     <button onClick={Salvar } >Salvar</button>
                </div>
                <p className='erro'>{erro}</p>

        </div>
    )
}