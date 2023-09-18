import { Link } from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cabeadm(){
    const[listar, setListar] = useState();

    async function Nome(){
        let r = await axios.get('http://localhost:5000/loginadm');
        setListar(r.data.nome);
    }

    useEffect(() => {
        Nome()
    }, [])


    return(
        <header className='cabeadm'>

            <section className='cabeadm-p1'>
                <img className='logo' src='/assets/images/logobranca.svg'/>
                    <h1>Bem Vindo {listar}</h1>
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