import './index.scss';
import { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import { BuscarImagem } from '../../api/prod';

export default function Compcarrinho({item: { produto }, Removeritem}){
    const[qtdproduto, setQtd] = useState(1);

      function Remover(id){
         Removeritem(id)
     }

     function MaisQtd(){
        let x = qtdproduto + 1

        setQtd(x)

        Alterarquant()
     }

     function MenosQtd(){
        if(qtdproduto > 1){
            let x = qtdproduto - 1
   
            setQtd(x)

            Alterarquantmenos()
        }
     }

    function Calculosubtotal(){
        const subtotal = qtdproduto * produto.vl_preco

        return subtotal;
    }

    function Alterarquant(){
        let carrinho = localStorage('carrinho')
        let itemstorage = carrinho.find(item => item.id == produto.id_produto)
        itemstorage.qtd = qtdproduto + 1;

        localStorage('carrinho', carrinho)
        window.location.reload()
    }

    function Alterarquantmenos(){
        let carrinho = localStorage('carrinho')
        let itemstorage = carrinho.find(item => item.id == produto.id_produto)
        itemstorage.qtd = qtdproduto - 1;

        localStorage('carrinho', carrinho)
        window.location.reload()
    }

    useEffect(() => {
        let carrinho = localStorage('carrinho')
        const itemstorage = carrinho.find(item => item.id == produto.id_produto)
        setQtd(itemstorage.qtd)
    }, [])

    return(
        <div className='compcarrinho'>
            <div className='produto'>
                <img src={BuscarImagem(produto.ds_img1)}/>

                <section className='nomeproduto'>
                    <h1>{produto.nm_produto}</h1> 
                    <p>Oferta programada para boleto ou pix</p>
                </section>

                    <div className='Alterarqtd'>
                        <img onClick={() => MenosQtd()} src='/assets/images/menos.svg'/>
                        <p className='numero'>{qtdproduto}</p>
                        <img onClick={() => MaisQtd()} src='/assets/images/mais.svg'/>
                    </div>

                    <p>R${Calculosubtotal()}</p>  

                <img className='excluir' onClick={() => Remover(produto.id_produto)} src='/assets/images/xcarrinho.svg'/>                       
            </div>
        </div>
    )
}