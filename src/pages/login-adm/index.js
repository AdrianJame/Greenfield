import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import "./index.scss"

export default function LoginADM () {

    const[email, setEmail]= useState('');
    const[senha, setSenha]= useState('');
    const[erro, setErro]= useState('');

    const Navigate = useNavigate();

    async function entrarClick() {
        try {
            const r = await axios.post('',{
                email: email,
                senha: senha
            });

            Navigate('');

            
        } catch (err) {
            if(err.response.status === 401){
                setErro(err.response.data.erro)
            }

            
        }
    }

    
    return(
        <div className="principal">
            
            <div className="card-login">
                
                <div className="faixa-1">
                    <p>Admin</p>
                    <img src="/assets/images/image 54.svg"></img>
                </div>

                <div className="faixa-2">
                    
                    <div className="linha">
                        <img src="./assets/images/image 221.png"></img>
                        <input placeholder="Nome Completo"></input>
                        <div className="risco"></div>
                    </div>

                    <div className="linha">
                        <img src="./assets/images/image 225.png"></img>
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input> 
                        <div className="risco"></div>                      
                    </div>

                    <div className="linha">
                        <img src="./assets/images/image 221 (1).png"></img>
                        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                        <div className="risco"></div>                       
                    </div>
                    
                </div>

                <div className="faixa-3">
                    <button onClick={entrarClick}>Entrar</button>
                </div>

            
            </div>
        
        </div>
    )

}