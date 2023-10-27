import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import storage from "local-storage";
import { API_URL } from '../../constants.js';


export default function LoginADM() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);


  const [mostrarsenha, setMostrarsenha] = useState(false);
  const navigate = useNavigate();
  const loadingBarRef = useRef(null);

  useEffect(() => {
    if(storage('adm-logado'))
      navigate('/homeadm')
  }, [])

  async function entrar() {
    setCarregando(true);
    setErro('');

    let user = {
      nome: nome,
      email: email,
      senha: senha
  }

    try {
      const response = await axios.post(API_URL + '/adm/login', user);

      if (nome != '' || email != '' || senha != '') {
        // Redirect to the admin home page on successful login
        navigate('/homeadm');
        storage('adm-logado', response.data)

      } else {
        setErro('⚠ Login ou senha incorretos');
      }
    } catch (error) {
      console.error('⚠ Erro ao verificar as credenciais:', error);
      setErro('⚠ Erro ao verificar as credenciais. Tente novamente mais tarde.');
    } finally {
      setCarregando(false);
    }
  }

  function teclaEnter(e) {
    if (e.key === 'Enter') {
        entrar();
    }}

  return (
    <div className="principal">
      
      <LoadingBar color='#f11946' ref={loadingBarRef} />

      <div className="card-login">
        <div className="faixa-1">
          <p>Admin</p>
          <img src="/assets/images/image 54.svg" alt="Admin Logo" />
        </div>

        <div className="faixa-2">
          <div className="linha">
            <img src="./assets/images/image 221.png" alt="Nome Icon" />
            <input type="text" placeholder="Nome Completo" value={nome} onChange={e => setNome(e.target.value)} />
            <div className="risco"></div>
          </div>

          <div className="linha">
            <img src="./assets/images/image 225.png" alt="Email Icon" />
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <div className="risco"></div>
          </div>

          <div className="linha">
            <img src="./assets/images/image 221 (1).png" alt="Senha Icon" />
            <input onKeyUp={teclaEnter} placeholder="Senha" type={mostrarsenha ? 'text' : 'password'} value={senha} onChange={e => setSenha(e.target.value)} />
            <img className="olho" onClick={() => setMostrarsenha(!mostrarsenha)} src={mostrarsenha ? '/assets/images/olho.png' : '/assets/images/olho fechado.png'}/>
            <div className="risco"></div>
          </div>
        </div>

        <div className="faixa-3">
          <button onClick={entrar} disabled={carregando}>Entrar</button>
          <p>{erro}</p>
        </div>
      </div>
    </div>
  );
}