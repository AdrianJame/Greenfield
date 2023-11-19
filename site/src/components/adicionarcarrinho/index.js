import './index.scss';
import localStorage from 'local-storage';

export default function AdicionarCarrinho(props){

    function AdicionarCarrinho(){
        let carrinho = [];

        if(localStorage('carrinho')){
            carrinho = localStorage('carrinho')
        }

        if(!carrinho.find(item => item.id === props.id)){
            carrinho.push({
                id: props.id,
                qtd: 1
            })
            localStorage('carrinho', carrinho);
        }
    }

    return(
        <div className='adicionar-carrinho'>
            <div className='botao-comprar'>
                <a className='AAAA' onClick={AdicionarCarrinho()}> Comprar</a>
            </div>
        </div>
    )
}