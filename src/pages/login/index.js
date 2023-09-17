import './index.scss'

export default function Login(){
    return(
        <div className='pagina-login'>
            <div className='meio'>

                <div className='esquerda'>

                    <div className='titulo'>

                        <h1> Entrar </h1>
                        <img src='/assets/images/logobranca.svg'  />

                    </div>

                    <div className='inputs'>

                        <div className='input'>
                            <img />
                            <input placeholder='E-mail ou Nome de Usuário' />
                        </div>

                        <div className='input'>
                            <img />
                            <input placeholder='Senha' />
                        </div>

                    </div>

                    <div className='botao'>
                            <button>Entrar</button>
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