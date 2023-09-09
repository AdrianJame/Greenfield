import { Link } from 'react-router-dom'
import './index.scss'

export default function Menuadm(){

    return(
        <div className='menuadm'>
            <section className='menu-cabe'>
                <img src='/assets/images/logobranca.svg'/>
                <h4>WORKSPACE</h4>
            </section>

            <section className='menu-meio'>
                <Link>Consultar Análise</Link>
                <Link>Consultar EMAIL</Link>
                <Link>Tela Inicial</Link>
                <Link>Status de Vendas</Link>
            </section>

            <section className='menu-rodape'>
                <div className='menu-rodape-s1'>

                    <div className='img'>A</div>

                    <section>
                        <h6>Adrian James dos Santos Cardoso</h6>
                        <p>adrianjames@gmail.com</p>
                    </section>
                </div>

                <Link>Alterar Usuário</Link>
            </section>
        </div>
    )
}
