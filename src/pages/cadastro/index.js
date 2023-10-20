import { useState } from 'react'
import './index.scss'
import axios from 'axios';
import Modal from 'react-modal'
import { motion } from 'framer-motion';

export default function Cadastro(){
const[email, setEmail] = useState('');
const[nome, setNome] = useState('');
const[telefone, setTelefone] = useState('');
const[cpf, setCpf] = useState('');
const[senha, setSenha] = useState('');
const[erro, setErro] = useState('');
const[id, setId] = useState(0)


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

function teclaEnter(e) {
    if (e.key === 'Enter') {
        Salvar();
    }}


    return(
        <div className='pagina-cadastro'>

            <div className='meio'>

                <div className='esquerda'>
                <div className="logar">
                      <p>Entrar</p>
                    </div>
                </div>

                <div className='direita'>
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
                            <input placeholder='Telefone' value={telefone} onChange={e=> setTelefone(e.target.value)} />
                        </div>

                        <div className='input'>
                            <img />
                            <input placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                        </div>

                        <div className='input'>
                            <img />
                            <input placeholder='Senha' onKeyUp={teclaEnter} value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>

                        <div className='botao'>
                        <button onClick={Salvar}>Cadastrar-se</button>
                        </div>

                        <p className='erro'>{erro}</p>




                    </div>

                </div>

            </div>

        </div>
    )
}