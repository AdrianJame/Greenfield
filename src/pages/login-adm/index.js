import React, { useState, useRef } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import "./index.scss";


export default function LoginADM() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

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
      const response = await axios.post('http://localhost:5000/adm/login', user);
      const credencial = response.data;

      if (email != '' || senha != '') {
        // Redirect to the admin home page on successful login
        navigate('/homeadm');

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
            <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
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