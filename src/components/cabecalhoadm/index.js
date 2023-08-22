import { Link } from 'react-router-dom'
import './index.scss'

export default function Cabeadm(){


    return(
        <header className='cabeadm'>

            <section className='cabeadm-p1'>
                <img className='logo' src='/assets/images/logogreenfield.svg'/>

                <h1>BEM VINDO </h1>
            </section>

            <section className='cabeadm-p2'>
                <div className='linkhomeajuda'>
                    <Link>Home</Link>
                    <Link>Ajuda <img src='/assets/images/interrogacao.svg'/></Link>
                </div>

                <div className='foto-alterar'>
                    <img src=''/>

                    <button>Alterar conta</button>
                </div>
            </section>

        </header>
    )
}