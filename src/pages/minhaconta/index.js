import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';
import { confirmAlert } from 'react-confirm-alert';
import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants.js';

export default function Minhaconta(){

    const navigate = useNavigate()

    function sairClick() {
        confirmAlert({
            title: 'Usuario',
            message: 'Tem certeza que deseja sair da conta?',
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    navigate('/')
                    storage.remove('usuario-logado');
                }
              },
              {
                label: 'Não'
              }
            ]
          });
    }

    function Alterarinfo() {
        const editar = document.getElementById('fundo-alterarinfo')
        editar.classList.add('aparecer')
    
      }
    
      function removerinfo() {
        const editar = document.getElementById('fundo-alterarinfo')
        editar.classList.remove('aparecer')
    
      }

      function Vercadastro() {
        const editar = document.getElementById('fundo-vercadastro')
        editar.classList.add('aparecer')
    
      }
    
      function remover() {
        const editar = document.getElementById('fundo-vercadastro')
        editar.classList.remove('aparecer')
    
      }

    return(
        <div className='minhaconta'>
            <Cabesemdgd/>

                    <div className='faixa1'>
                        <h1>MINHA CONTA</h1>
                        <div className='linha'>

                            <div className='agrup'>
                                <a onClick={Vercadastro} to={'/meucadastro'} className='card'>
                                <img className='imagemcard' src='./assets/images/image 227.svg'/>
                                </a>
                                <p className='titulo-card'>Meu Cadastro</p>
                            </div>

                            <div className='agrup'>
                                <a onClick={Alterarinfo} className='card'>
                                    <img className='imagemcard' src='./assets/images/image 230 (1).svg' />
                                </a>
                                <p className='titulo-card'> Alterar Informações</p>
                            </div>

                            <div className='agrup'>
                                <Link to={'/meuspedidos'} className='card'>
                                    <img className='imagemcard' src='./assets/images/image 231.svg'/>
                                </Link>
                                <p className='titulo-card'> Meus Pedidos </p>
                            </div>

                        </div>

                        <div className='linha'>

                            <div className='agrup'>
                                <Link className='card'>
                                    <img className='imagemcard' src='./assets/images/image 233.svg' />
                                </Link>
                                <p className='titulo-card'> Favoritos </p>
                            </div>

                            <div className='agrup'>
                                <Link to={'/reclamacoes'} className='card'>
                                    <img className='imagemcard' src='./assets/images/image 236.svg' />
                                </Link>
                                <p className='titulo-card'> Reclamações</p>
                            </div>

                            <div onClick={sairClick} className='agrup'>
                                <Link className='card'>
                                    <img className='imagemcard' src='./assets/images/image 237.svg' />
                                </Link>
                                <p className='titulo-card'> Sair </p>
                            </div>
                            
                        </div>

                    </div>
                    
                    <section className='fundo-alterarinfo' id='fundo-alterarinfo'>
                        <div className='alterarinfo'>
                            <button onClick={removerinfo}>fffff</button>
                        </div>
                    </section>

                    <section className='fundo-vercadastro' id='fundo-vercadastro'>
                        <div className='vercadastro'>
                        <button onClick={remover}>ssss</button>
                        </div>
                    </section>

            <RodapeGreenfield/>
        </div>
    )
}