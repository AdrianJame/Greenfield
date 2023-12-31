import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { API_URL } from '../../constants.js';

export default function Cabecalhocomlogin(){

    return(
        <header className='cabecalho-login'>
            <img src='/assets/images/image 62.svg'/>

            <div className='meio-cabecalho'>
                <Link className='home-sobre' to={'/'}>Home</Link>
                <Link className='home-sobre' to={'/sobre'}>Sobre</Link>

                <Link className='section' to={'/pesq'}>
                    <img src='/assets/images/lupa.svg'/>
                </Link>
            </div>

            <Link className={storage('usuario-logado') ? 'minhaconta' : ''} to={!storage('usuario-logado') ? '/login' : '/minhaconta'}>{storage('usuario-logado') ? 'Minha conta' : 'Logar'}</Link>
        </header>
    )
}