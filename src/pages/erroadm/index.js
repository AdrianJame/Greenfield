import { Link } from 'react-router-dom';
import './index.scss';

export default function Erro(){

    return(
        <div className='pagina-erro'>
            <div>
                <h1>Você não tem permissão de entrar nessa pagina</h1>
                <section>
                    <Link to={'/'}>Voltar para home</Link>
                    <Link to={'/login-adm'}>Login adm</Link>
                </section>
            </div>
        </div>
    )
}