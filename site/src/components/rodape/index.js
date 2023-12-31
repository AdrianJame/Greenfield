import { Link } from 'react-router-dom'
import './index.scss'
import { API_URL } from '../../constants.js';

export default function RodapeGreenfield () {
    
    return(

        <div className='rodape-principal'>

            <img src='/assets/images/logobranca.svg'/>

                <div className='descricao'>
                    <p>Entre em contato conosco através das nossas redes sociais e e-mail.</p>
                </div>

                <div className='redes-sociais'>
                    
                    <div className='logo-link'>
                        <img src='/assets/images/logo-email.svg'/>
                        <Link>contato@greenfield.com.br</Link>
                    </div>
                    <div className='logo-link'>
                        <img src='/assets/images/logo-instagram.svg'/>
                        <Link>@greenfield</Link>
                    </div>
                    <div className='logo-link'>
                        <img src='/assets/images/logo-facebook.svg'/>
                        <Link>greenfield</Link>
                    </div>
                    <div className='logo-link'>
                        <img src='/assets/images/logo-linkedin.svg'/>
                        <Link>greenfield</Link>
                    </div>
                    
                </div>

        </div>

    )
}