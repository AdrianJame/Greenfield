import "./index.scss"

export default function LoginADM () {
    
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
                        <input placeholder="Email"></input> 
                        <div className="risco"></div>                      
                    </div>

                    <div className="linha">
                        <img src="./assets/images/image 221 (1).png"></img>
                        <input placeholder="Senha"></input>
                        <div className="risco"></div>                       
                    </div>
                    
                </div>

                <div className="faixa-3">
                    <button>Entrar</button>
                </div>

            
            </div>
        
        </div>
    )

}