import './index.scss';
import Cabecalhocomlogin from '../../components/cabcomlogin';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';

export default function Statuspedido(){
    return(
        <div className='statuspedido'>
            <Cabecalhocomlogin/>

            <div className='faixa1'>
                <h1>ITENS DO PEDIDO</h1>
                <h3>Entrega 1</h3>

                <div className='status'>

                    <div className='circulo'>
                        <img src='./assets/images/image 263.svg' />
                    </div>

                    <div className='linha'></div>

                    <div className='circulo'>
                        <img src='./assets/images/image 250.svg' />
                    </div>

                    <div className='linha'></div>

                    <div className='circulo'>
                        <img src='./assets/images/image 254.svg' />
                    </div>

                    <div className='linha'></div>

                    <div className='circulo'>
                        <img className='caminhao' src='./assets/images/image 258.svg' />
                    </div>

                    <div className='linha'></div>

                    <div className='circulo'>
                        <img src='./assets/images/image 262.svg' />
                    </div>

                    

                </div>

                <div className='pedido'>

                </div>
            </div>

            <RodapeGreenfield/>


            
        </div>
    )
}