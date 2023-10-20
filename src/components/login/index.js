import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import storage from 'local-storage'
import LoadingBar from "react-top-loading-bar";
import { CSSTransition } from 'react-transition-group';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const [show, setShow] = useState(false);

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

   function teclaEnter(e) {
    if (e.key === 'Enter') {
        entrar();
    }}















const[nome, setNome] = useState('');
const[telefone, setTelefone] = useState('');
const[cpf, setCpf] = useState('');
const[id, setId] = useState(0)

const[direita, setDireita] = useState(0)


async function Salvar(){

    try{
        let user = {
            email: email,
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            senha: senha
        }

        let r = await axios.post('http://localhost:5000/cliente/cadastro', user)
        setErro('Cadastro feito com sucesso')

        Limpar()

    }
    
    catch(err){
        setErro(err.response.data.erro)
      }
}

function Limpar(){
    setEmail('')
    setNome('')
    setTelefone('')
    setCpf('')
    setSenha('')
    setId(0)

}



function Esquerda(){
  const editar = document.getElementById('esquerda')
        editar.classList.add('rolar')

        setDireita(editar)
}

    return(
      <div className="pagina-login-cadastro">
      
        <div className="fundo" >

            <div className="login">

              <div className='esquerda' id="esquerda">

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
                        <input onKeyUp={teclaEnter} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>

                </div>

                <div className='botao'>
                        <button  onClick={entrar} disabled={carregando}>Entrar</button>
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

            </div>


            <button className="button-logar" onClick={Esquerda}>Cadastrar</button>

        </div>

      </div>
    )

}


{/* <div className='esquerda'>

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
            <input onKeyUp={teclaEnter} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
        </div>

    </div>

    <div className='botao'>
            <button  onClick={entrar} disabled={carregando}>Entrar</button>
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

</div> */}





