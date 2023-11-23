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

    const [riscar, setRiscar] = useState([]);
    const [reclamacao, setReclamacao] = useState();
    const [idCliente, setIdCliente] = useState();

    console.log(riscar);

    async function reclamar() {
        try {
            let body = {
                texto: reclamacao,
                cliente: idCliente,
            };
            let r = await axios.post(API_URL + '/reclamacao', body);
            toast.success('reclamação enviada');
            window.location.reload()
        } catch (err) {
            toast.dark('Não foi possivel enviar sua reclamação tente novamente mais tarde');
        }
    }

    async function Listar() {
        try {
            const r = await axios.get(API_URL + '/reclamacao/' + idCliente);
            setRiscar(r.data);
            

        } catch (err) {
            toast.dark('Não foi possivel mostrar suas reclamações');
        }
    }

    useEffect(() => {

        const usuario = storage('usuario-logado');
            setIdCliente(usuario.id_cliente);
 
    }, [])

    

    async function Deletar(id){
        let r = await axios.delete(API_URL + '/deletareclamacao/' + id)
        window.location.reload()
   }


    useEffect(() => {
            Listar()
    }, []);

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            reclamar();
        }}

    
    return(
        <div className='reclamacoes'>
            <Cabesemdgd/>
            <div className='faixa1'>
                <div className='mensagens'>
                    <h2>Reclame aqui</h2>

                    <textarea value={reclamacao} onKeyUp={teclaEnter} onChange={e => setReclamacao(e.target.value)} type='text' />
                    <ToastContainer/>
                    <button className='aa' onClick={reclamar}>Enviar reclamação</button>
                </div>
                <div className='Suas-reclamacoes'>
                        <h2>Suas reclamações</h2>
                    {riscar.map(item =>
                        <div className='Listar-reclamacoes'>
                            <h3 className='reclamacao'>{item.ds_reclamacao}</h3>
                            {item.ds_resposta == undefined ? 
                                <p className='nao-respondeu'>Não respondido</p>
                                : 
                                <h2 className='reclamacao'><span>Resposta:</span> {item.ds_resposta}</h2>
                            }
                            <img onClick={() => Deletar(item.id_reclamacao)} className='deletar' src='/assets/images/xcarrinho.svg'/>
                        </div>
                    )}
                </div>
            </div>
            <RodapeGreenfield/>
        </div>
    )
}
