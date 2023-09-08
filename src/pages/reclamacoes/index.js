import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';

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
