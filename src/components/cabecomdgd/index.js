import './index.scss'
import { Link } from 'react-router-dom'


export default function Cabecomdgd(){

    return(
        <header className='Cabecalho1'>
            <img src='/assets/images/logocolorida.svg'/>

            <div className='meio-cabecalho'>
                <p>Home</p>
                <p>Sobre</p>

                <section>
                    <img src='/assets/images/lupa.svg'/>
                    <input placeholder='busque aqui' type='text' />
                </section>
            </div>

            <Link>Login</Link>
        </header>
    )
}