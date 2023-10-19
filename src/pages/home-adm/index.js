import './index.scss';
import Cabeadm from '../../components/cabecalhoadm'
import Rodapeadmgreenfield from '../../components/rodapeadm';
import { Link } from 'react-router-dom';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useState } from 'react';

export default function Homeadm() {

  const navigate = useNavigate();

  function sairClick() {
      confirmAlert({
          title: 'ADM',
          message: 'Tem certeza que deseja sair da conta?',
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

useEffect(() => {
  if(!storage('adm-logado')){
    navigate('/erro')
  }
}, [])

  return (
    <div className="Homeadm">

      <Cabeadm/>

      <div className='centro'>

        <div className='conteudo'>

          <div className='faixa1'>
              <Link to={'/produtosadm'} className='card'>
                  <img src='./assets/images/image 264.svg'></img>
                  <h2>PRODUTOS</h2>
                  <p>Cadastre seus produtos e altere-os</p>
              </Link>

              <Link className='card'>
                  <img src='./assets/images/image 265.svg'></img>
                  <h2>ANÁLISE</h2>
                  <p>Confira gráficos com estatísticas sobre suas vendas</p>
              </Link>

          </div>

          <div className='faixa2'>

              <Link className='card'>
                  <img src='./assets/images/image 266.svg'></img>
                  <h2>STATUS DE PEDIDOS</h2>
                  <p>Confira os pedidos e altere-os</p>
              </Link>

              <Link className='card' onClick={sairClick}>
                  <img src='./assets/images/image 267.svg'></img>
                  <h2>SAIR</h2>
                  <p>Sair ou alterar de conta</p>
              </Link>

          </div>
       
        

        </div>
        
      </div>
      <Rodapeadmgreenfield/>
    </div>
    
  );
}

