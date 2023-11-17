import './index.scss';
import { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import { BuscarImagem } from '../../api/prod';

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
            <div className='produto'>
                <img src={BuscarImagem(produto.ds_img1)}/>

                <section className='nomeproduto'>
                    <h1>{produto.nm_produto}</h1> 
                    <p>Oferta programada para boleto ou pix</p>
                </section>

                    <select onChange={e => Alterarquant(e.target.value)} value={qtdproduto}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select> 

                    <p>R${qtdproduto == 0 ? produto.vl_preco : Calculosubtotal()}</p>  

                <img className='excluir' src='/assets/images/xcarrinho.svg'/>                       
            </div>
        </div>
    )
}