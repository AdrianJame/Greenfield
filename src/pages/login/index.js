import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import storage from 'local-storage'
import LoadingBar from "react-top-loading-bar";

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if(storage('usuario-logado'))
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
      const response = await axios.post('http://localhost:5000/usuario/login', user);

      if ( email != ''  && senha != '' ) {
        // Redirect to the admin home page on successful login
        navigate('/');
        storage('usuario-logado', response)


      }
       else if(email === undefined || senha === undefined){
        setErro('⚠ Campo obrigatorio');
      }
    } catch (error) {
      console.error('⚠ Erro ao verificar as credenciais:', error);
        setErro('⚠ Login ou senha incorretos');
      
    } finally {
      setCarregando(false);
    }
  }
    return(
        <div className='pagina-login'>
          <LoadingBar color='#f11946' ref={loadingBarRef} />
            <div className='meio'>

                <div className='esquerda'>

                    <div className='titulo'>

                        <h1> Entrar </h1>
                        <img src='/assets/images/logobranca.svg'  />

                    </div>

                    <div className='inputs'>

                        <div className='input'>
                            <img />
                            <input placeholder='E-mail ou Nome de Usuário' value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className='input'>
                            <img />
                            <input placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
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
                            <img src='./assets/images/image 223.svg'/>
                        </div>
                    </div>

                </div>

                <div className='direita'>
                    <img src='./assets/images/image 225.svg'/>
                </div>

            </div>
        </div>
    )

}