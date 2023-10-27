import { Link } from 'react-router-dom';
import './index.scss';
import { API_URL } from '../../constants.js';

export default function Erro(){

    return(
        <div className='pagina-erro'>
            <div>
                <h1>Você não tem permissão de entrar nessa pagina</h1>
                <section>
                    <Link to={'/'}>Voltar para home</Link>
                </section>

                <img src='/assets/images/erroplant.png'/>
            </div>
        </div>
    )
}