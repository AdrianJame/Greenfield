import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export default function Cabecomdgd(){

    const navigate = useNavigate();

      

    
    return(
        <header className='Cabecalho1'>
            <img src='/assets/images/image 62.svg'/>

            <div className='meio-cabecalho'>
                <p>Home</p>
                <p>Sobre</p>

                <section>
                    <img src='/assets/images/lupa.svg'/>
                    <input placeholder='busque aqui' type='text' />
                </section>
            </div>

            <Link className={storage('usuario-logado') ? 'minhaconta' : ''} to={!storage('usuario-logado') ? '/login' : '/minhaconta'}>{storage('usuario-logado') ? 'Minha conta' : 'Logar'}</Link>
        </header>
    )
}