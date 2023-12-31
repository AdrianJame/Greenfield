import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { API_URL } from '../../constants.js';


export default function Cabesemdgd(){

    return(
        <header className='Cabecalho'>
            <img src='/assets/images/image 62.svg'/>

            <div className='meio-cabecalho'>
            <Link className='home-sobre' to={'/'}>Home</Link>
                <Link className='home-sobre' to={'/sobre'}>Sobre</Link>

                <Link className='section' to={'/pesq'}>
                    <img src='/assets/images/lupa.svg'/>

                </Link>
            </div>

                <Link to={storage('usuario-logado') ? '/carrinho' : '/login'}> 
                    <b>Carrinho</b>
                    <img src='/assets/images/carrinho.svg'/>
                </Link>
        </header>
    )
}