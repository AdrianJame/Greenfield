import './index.scss'
import Menuadm from '../../components/menuadm'

export default function Statusdevenda(){

    return(
        <div className='statusvenda'>
            <Menuadm/>

            <section className='statusvenda-body'>
                <h1>Status de Vendas</h1>

                <div className='tipos-lista'>
                    <p>Produto</p>
                    <p>Categoria</p>
                    <p>Quantidade</p>
                    <p>Preço</p>
                    <p>Status</p>
                    <p>Nome do cliente</p>
                    <p>Tipo de pagamento</p>
                </div>
            </section>
        </div>
    )
}