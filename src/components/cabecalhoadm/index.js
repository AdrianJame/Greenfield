import { Link } from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import storage from 'local-storage'

export default function Cabeadm(){
    const[listar, setListar] = useState();
    const [admlogado, setLogado] = useState();

    useEffect(() => {
        if (storage('adm-logado')){
            const adm = storage('adm-logado');
            setLogado(adm.data.nome)
        }
    }, [])

    return(
        <header className='cabeadm'>

            <section className='cabeadm-p1'>
                <img className='logo' src='/assets/images/logobranca.svg'/>
                    <h1>Bem Vindo {admlogado}</h1>
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