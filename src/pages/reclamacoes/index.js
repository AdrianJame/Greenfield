import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';

export default function Reclamacoes(){
    return(
        <div className='reclamacoes'>
            <Cabesemdgd/>
            <div className='faixa1'>
                <div className='mensagens'>
                    <h2>RECLAMAÇÕES</h2>
                </div>
            </div>

            <RodapeGreenfield />
        </div>
    )
}
