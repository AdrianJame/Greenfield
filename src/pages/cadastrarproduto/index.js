import './index.scss'


export default function CadatroProdutoADM () {
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
                            <input type="text" placeholder="Nome do Produto"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input type="text" placeholder="Fabricante"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input type="text" placeholder="Categoria"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input type="text" placeholder="Preço"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input type="text" placeholder="Estoque"></input> 
                            <div className="risco"></div>                      
                        </div>

                        <div className="linha">
                            <input type="text" placeholder="Garantia"></input> 
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
                        <input></input>
                    </div>
                
                </div>

            </div>

            <div className='line'></div>

            <div className='session-3'>
            
                <div className='session-03'>

                    <h1>INFORMAÇÕES DO PRODUTO</h1>

                    <div className='session-03-conteudo'>
                        
                        <div className='desc-produto'>
                            <input></input>
                        </div>

                    </div>

                </div>

            </div>

            <div className='botao-salvar'>
                <button>Salvar</button>
            </div>

        </div>
    )
}