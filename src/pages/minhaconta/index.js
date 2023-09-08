import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';

export default function Minhaconta(){
    return(
        <div className='minhaconta'>
            <Cabesemdgd/>

                    <div className='faixa1'>
                        <h1>MINHA CONTA</h1>
                        <div className='linha'>

                            <div className='agrup'>
                                <div className='card'>
                                <img className='imagemcard' src='./assets/images/image 227.svg'/>
                                </div>
                                <p className='titulo-card'>Meu Cadastro</p>
                            </div>

                            <div className='agrup'>
                                <div className='card'>
                                    <img className='imagemcard' src='./assets/images/image 230 (1).svg' />
                                </div>
                                <p className='titulo-card'> Trocar Senha</p>
                            </div>

                            <div className='agrup'>
                                <div className='card'>
                                    <img className='imagemcard' src='./assets/images/image 231.svg'/>
                                </div>
                                <p className='titulo-card'> Meus Pedidos </p>
                            </div>

                        </div>

                        <div className='linha'>

                            <div className='agrup'>
                                <div className='card'>
                                    <img className='imagemcard' src='./assets/images/image 233.svg' />
                                </div>
                                <p className='titulo-card'> Favoritos </p>
                            </div>

                            <div className='agrup'>
                                <div className='card'>
                                <img className='imagemcard' src='./assets/images/image 236.svg' />
                                </div>
                                <p className='titulo-card'> Reclamações</p>
                            </div>

                            <div className='agrup'>
                                <div className='card'>
                                    <img className='imagemcard' src='./assets/images/image 237.svg' />
                                </div>
                                <p className='titulo-card'> Sair </p>
                            </div>
                            
                        </div>

                    </div>
            <RodapeGreenfield/>
        </div>
    )
}