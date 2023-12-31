import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import storage from 'local-storage'
import LoadingBar from "react-top-loading-bar";

import { API_URL } from '../../constants.js';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [erro2, setErro2] = useState('');
  const [carregando, setCarregando] = useState(false);

  const [mostrarsenha, setMostrarsenha] = useState(false);


  useEffect(() => {
    if (storage('usuario-logado'))
      navigate('/')
  }, [])

  const navigate = useNavigate();
  const loadingBarRef = useRef(null);

  async function entrar() {
    setCarregando(true);
    setErro('');

    let user = {
      email: email,
      senha: senha
    }

    try {
      const response = await axios.post(API_URL + '/usuario/login', user);

      if (email != '' && senha != '') {
        navigate('/');
        storage('usuario-logado', response.data)
      }
      else if (email === undefined || senha === undefined) {
        setErro('⚠ Campo obrigatorio');
      }
    } catch (error) {
      console.error('⚠ Erro ao verificar as credenciais:', error);
      setErro('⚠ Login ou senha incorretos');

    } finally {
      setCarregando(false);
    }
  }

  function teclaEnter(e) {
    if (e.key === 'Enter') {
      entrar();
    }
  }















  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState(0)



  async function Salvar() {

    try {
      let user = {
        email: email,
        nome: nome,
        telefone: telefone,
        cpf: cpf,
        senha: senha
      }

      let r = await axios.post(API_URL + '/cliente/cadastro', user)

      setErro2('Cadastro feito com sucesso')
      Limpar()

    }

    catch (err) {
      setErro2(err.response.data.erro)
    }
  }

  function Limpar() {
    setEmail('')
    setNome('')
    setTelefone('')
    setCpf('')
    setSenha('')
    setId(0)

  }


  function tecla(e) {
    if (e.key === 'Enter') {
      Salvar();
    }
  }



  function Esquerda() {
    const editar = document.getElementById('fundo-preto')
    editar.classList.add('rolar-direita')

    const aparecer = document.getElementById('logar')
    aparecer.classList.add('rolar')
  }

  function Direita() {
    const editar = document.getElementById('fundo-preto')
    editar.classList.remove('rolar-direita')

    const aparecer = document.getElementById('logar')
    aparecer.classList.remove('rolar')
  }

  function cadastroc() {
    const editar = document.getElementById('logincadastrocell')
    editar.classList.add('girar')

  }

  function Loginc() {
    const editar = document.getElementById('logincadastrocell')
    editar.classList.remove('girar')

  }


  return (
    <div className="pagina-login-cadastro">
      <LoadingBar color='#f11946' ref={loadingBarRef} />

      <div className="fundo" >

        <button className="logar" id="logar" onClick={Direita}>Entrar</button>

        <div className="login-cadastro" >


          <div className='fundo-preto' id="fundo-preto">
            <section className="esquerda">
              <div className='titulo'>

                <h1> Entrar </h1>
                <img src='/assets/images/logobranca.svg' />

              </div>

              <div className='inputs'>

                <div className='input'>
                  <img />
                  <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='input'>
                  <img />
                  <input onKeyUp={teclaEnter} type={mostrarsenha ? 'text' : 'password'} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                  <img className="olho" onClick={() => setMostrarsenha(!mostrarsenha)} src={mostrarsenha ? '/assets/images/olho.png' : '/assets/images/olho fechado.png'} />
                </div>

              </div>

              <div className='botao'>
                <button onClick={entrar} disabled={carregando}>Entrar</button>
                <p>{erro}</p>
              </div>

              <div className='linha'></div>

              <div className='continuar'>
                <h4>Continuar com</h4>

                <div className='redes'>
                  <img src='./assets/images/image 222.svg' />
                  <img src='./assets/images/image 35.svg' />
                  <img src='./assets/images/image 223.svg' />
                </div>
              </div>

            </section>



            <section className="direita">

              <div className='titulo'>

                <h1>Cadastrar</h1>
                <img src='/assets/images/logobranca.svg' />

              </div>

              <div className='inputs'>

                <div className='input'>
                  <img />
                  <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='input'>
                  <img />
                  <input placeholder='Nome de Usuário' value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div className='input'>
                  <img />
                  <input placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>

                <div className='input'>
                  <img />
                  <input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>

                <div className='input'>
                  <img />
                  <input placeholder='Senha' onKeyUp={tecla} value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <div className='botao'>
                  <button onClick={Salvar}>Cadastrar-se</button>
                </div>

                <p className='erro'>{erro2}</p>

              </div>

            </section>
          </div>

        </div>



        <button className="button-cadastrar" onClick={Esquerda}>Cadastrar</button>

      </div>

      <div className="borda">
        <section className="logincadastrocell" id="logincadastrocell">
          <div className="login-cell">
            <section className="cabe-login">
              <p>Entrar</p>
              <img src="/assets/images/logobranca.svg" />
            </section>

            <section className="conteudo-login">
              <div className='input'>
                <img />
                <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div className='input'>
                <img />
                <input onKeyUp={teclaEnter} type={mostrarsenha ? 'text' : 'password'} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                <img className="olho" onClick={() => setMostrarsenha(!mostrarsenha)} src={mostrarsenha ? '/assets/images/olho.png' : '/assets/images/olho fechado.png'} />
              </div>

              <button onClick={entrar} disabled={carregando}>Entrar</button>

              <p>{erro}</p>
            </section>
            <button className="button-cadastro" onClick={cadastroc}> Cadastrar</button>
          </div>

          <div className="cadastro-cell">

            <section className="cabe-cadastro">
              <p>Cadastrar</p>
              <img src="/assets/images/logobranca.svg" />
            </section>

            <div className='cadastro-inputs'>

              <div className='input'>
                <img />
                <input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div className='input'>
                <img />
                <input placeholder='Nome de Usuário' value={nome} onChange={e => setNome(e.target.value)} />
              </div>

              <div className='input'>
                <img />
                <input placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)} />
              </div>

              <div className='input'>
                <img />
                <input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
              </div>

              <div className='input'>
                <img />
                <input placeholder='Senha' onKeyUp={tecla} value={senha} onChange={e => setSenha(e.target.value)} />
              </div>

              <div className='botao'>
                <button onClick={Salvar}>Cadastrar-se</button>
              </div>

              <p className='erro'>{erro2}</p>

            </div>

            <button className="button-login" onClick={Loginc}>Login</button>
          </div>
        </section>
      </div>
    </div>
  )

}






