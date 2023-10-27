import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';
import { useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'


export default function Reclamacoes(){
    const [reclamacao, setReclamacao] = useState();

    function reclamar() {
        let idCliente = JSON.parse(storage('usuario-logado')).id_cliente;
    
        let body = {
            idCliente: idCliente,
            reclamacao: reclamacao 
        }
    
    
        let r = axios.post(API_URL + '/reclamacao', body)
    
    }

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
