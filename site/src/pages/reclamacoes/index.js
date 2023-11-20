import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';
import { API_URL } from '../../constants.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'
import { toast, ToastContainer } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default function Reclamacoes(){

    const [listar, setListar] = useState([]);

    const [reclamacao, setReclamacao] = useState();
    const [idCliente, setIdCliente] = useState();
    const [re, setRe] = useState();

    async function reclamar() {
        
        try{
            let r = await axios.post(API_URL + '/reclamacao', body)
            toast.success('reclamação enviada')
        }

        catch(err){
            toast.dark(err.message)
          }
    
        let body = {
            texto: reclamacao, 
            cliente: idCliente
        }
    
    }

    async function Listar(){
        let r = await axios.get(API_URL + '/reclamacao/' + ID())
        setListar(r.data)

        console.log(listar)
    }


    function ID(){
        let usuario = storage('usuario-logado')
        let x = usuario.id_cliente;

        return x;
    }

    useEffect(() => {
        Listar()
        ID()
    }, [])

    return(
        <div className='reclamacoes'>
            <Cabesemdgd/>
            <div className='faixa1'>
                <div className='mensagens'>
                    <h2>RECLAMAÇÕES</h2>

                  <textarea value={reclamacao} onChange={e => setReclamacao(e.target.value)} type='text' />
                  <ToastContainer/>
                <button onClick={reclamar}>Enviar reclamação</button>
                </div>

            </div>

            <RodapeGreenfield />
        </div>
    )
}
