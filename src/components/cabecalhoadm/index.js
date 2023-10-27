import { Link } from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';

export default function Cabeadm(){
    const[listar, setListar] = useState();
    const [admlogado, setLogado] = useState();

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');

    const [color, setColor] = useState('#000000');

    function generateRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
      }

      
    const navigate = useNavigate();
    
    useEffect(() => {
            const usuariologado = storage('adm-logado');
            setNome(usuariologado.data.nome)
            setEmail(usuariologado.data.email)

            generateRandomColor()
    }, [])

    useEffect(() => {
        if (storage('adm-logado')){
            const adm = storage('adm-logado');
            setLogado(adm.data.nome)
        }
        generateRandomColor()
    }, [])

    return(
        <header className='cabeadm'>

            <section className='cabeadm-p1'>
                <img className='logo' src='/assets/images/logobranca.svg'/>
                    <h1>Bem-Vindo {admlogado}</h1>
            </section>

            <section className='cabeadm-p2'>
                <div className='linkhomeajuda'>
                    <Link>Home</Link>
                    <Link>Ajuda <img src='/assets/images/interrogacao.svg'/></Link>
                </div>

                <div className='foto-alterar'>
                    <div className='img' style={{ backgroundColor: color }}>{nome.charAt(0)}</div>

                    <button>Alterar conta</button>
                </div>
            </section>

        </header>
    )
}