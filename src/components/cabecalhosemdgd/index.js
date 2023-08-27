import './index.scss'
import { Link } from 'react-router-dom'


export default function Cabesemdgd(){

    return(
        <header className='Cabecalho'>
            <img src='/assets/images/logocolorida.svg'/>

            <div className='meio-cabecalho'>
                <b>Home</b>
                <b>Sobre</b>

                <section>
                    <img src='/assets/images/lupa.svg'/>
                    <input placeholder='busque aqui' type='text' />
                </section>
            </div>

                <Link> 
                    <b>Carrinho</b>
                    <img src='/assets/images/carrinho.svg'/>
                </Link>
        </header>
    )
}