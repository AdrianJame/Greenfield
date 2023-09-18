import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';




export default function CadatroProdutoADM () {
    const[categorias, setCategorias] = useState([])

    const[nome, setNome] = useState('');
    const[fabricante, setFabricante] = useState('');
    const[categoriaselecionada, setCategoriaselecionada] = useState('')
    const[preco, setPreco] = useState(0);
    const[estoque, setEstoque] = useState(0);
    const[garantia, setGarantia] = useState(0);
    const [id, setId] = useState(0);
    const [erro, setErro] = useState('')
    const[descricao, setDescricao] = useState('')
    

    async function Buscarcategorias(){
        let r = await axios.get('http://localhost:5000/categoria')
        setCategorias(r.data)
    }

    useEffect(() => {
        Buscarcategorias()
      }, [])

    async function Salvar(){
        try{
            let produto = {
                nome: nome,
                fabri: fabricante,
                categoria: categoriaselecionada,
                preco: preco,
                estoque: estoque,
                garantia: garantia,
                descricao: descricao
            }

            if(id == 0){
                let r = await axios.post('http://localhost:5000/produtos', produto)
                setErro('Produto adicionado')

            }

            else if(id != 0){
                let r = await axios.put('http://localhost:5000/produtos/' + id, produto);
                setErro('Produto alterado')
            }

            limpar()
        }

        catch(err){
            setErro(err.response.data.erro)
          }
    }
    
    async function limpar(){
        setNome('')
        setFabricante('')
        setCategoriaselecionada('')
        setPreco(0)
        setEstoque(0)
        setGarantia(0)
        setDescricao('')
        setId(0)
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

            <div className='line'></div>

            <div className='session-02'>

                <h1>DESCRIÇÃO DO PRODUTO</h1>

                <div className='session-02-conteudo'>
                    
                    <div className='desc-produto'>
                        <input value={descricao} onChange={e => setDescricao(e.target.value)}></input>
                    </div>
                
                </div>

            </div>

            <div className='line'></div>

           
                <div className='session-03'>

                    <h1>INFORMAÇÕES DO PRODUTO</h1>

                    <div className='session-03-conteudo'>
                        
                        <div className='desc-produto'>
                            <input type="text" placeholder="Material:"></input>
                            <input type="text" placeholder="Dimensões:"></input> 
                            <input type="text" placeholder="Informações Extras:"></input> 
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