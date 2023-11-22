import { Link, Navigate } from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';

export default function Menuadm(){

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[id, setId] = useState('');



    const [color, setColor] = useState('#000000');

    function generateRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
      }

    const navigate = useNavigate();
    
    useEffect(() => {
            const usuariologado = storage('adm-logado');
            setNome(usuariologado.nome)
            setEmail(usuariologado.email)
            setId(usuariologado.id)

            generateRandomColor()
    }, [])



async function Trocar(){
    confirmAlert({
        title: 'ADM',
        message: 'Tem certeza que deseja trocar de usuario?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
                navigate('/login-adm')
                storage.remove('adm-logado');
            }
          },
          {
            label: 'Não'
          }
        ]
      });
}

    return(
        <div className='menuadm'>
            <section className='menu-cabe'>
                <img src='/assets/images/logobranca.svg'/>
                <h4>WORKSPACE</h4>
            </section>

            <section className='menu-meio'>
                <Link to={'/produtosadm'}>Consutar Produtos</Link>
                <Link to={'/responder'}>Consultar Reclamações</Link>
                <Link to={'/homeadm'}>Home</Link>
                <Link>Status de Pedido</Link>
            </section>

            <section className='menu-rodape'>
                <div className='menu-rodape-s1'>

                    <div className='img' style={{ backgroundColor: color }}>{nome.charAt(0)}</div>

                    <section>
                        <h6>{nome}</h6>
                        <p>{email}</p>
                    </section>
                </div>

                <Link onClick={Trocar}>Alterar Usuário</Link>
            </section>
        </div>
    )
}
