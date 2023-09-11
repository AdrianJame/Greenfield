import './index.scss'
import { Link } from 'react-router-dom'


export default function Cabecalhocomlogin(){

    return(
        <header className='cabecalho-login'>
            <img src='/assets/images/image 62.svg'/>

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