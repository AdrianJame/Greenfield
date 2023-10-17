import { Link, Navigate } from 'react-router-dom'
import './index.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function Menuadm(){

    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');

    const navigate = useNavigate();
    
    useEffect(() => {
            const usuariologado = storage('adm-logado');
            setNome(usuariologado.data.nome)
            setEmail(usuariologado.data.email)
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
                <Link>Consultar Análise</Link>
                <Link>Consultar Email</Link>
                <Link to={'/homeadm'    }>Home</Link>
                <Link>Status de Vendas</Link>
            </section>

            <section className='menu-rodape'>
                <div className='menu-rodape-s1'>

                    <div className='img'>A</div>

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
