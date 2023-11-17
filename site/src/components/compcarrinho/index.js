import './index.scss';
import { useState, useEffect } from 'react';
import localStorage from 'local-storage';

export default function Compcarrinho({item: { produto }, Removeritem}){
    const[qtdproduto, setQtd] = useState([]);

    //  function Remover(id){
    //     Removeritem(id)
    //  }

    function Calculosubtotal(){
        const subtotal = qtdproduto * produto.vl_preco

        return subtotal;
    }

    function Alterarquant(novaQtd){
            setQtd(novaQtd)


        let carrinho = localStorage('carrinho')
        let itemstorage = carrinho.find(item => item.id == produto.id_produto)
        itemstorage.qtd = novaQtd;

        localStorage('carrinho', carrinho)
    }

    useEffect(() => {
    }, [])

    return(
        <div className='compcarrinho'>
            <div>
                <img src=''/>
                <h1>{produto.nm_produto}</h1> 

                <select onChange={e => Alterarquant(e.target.value)} value={qtdproduto}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> 

                <p>{qtdproduto == 0 ? produto.vl_preco : Calculosubtotal()}</p>  

                <button >excluir</button>                        
            </div>
        </div>
    )
}