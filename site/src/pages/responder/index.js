import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Menuadm from '../../components/menuadm';
import { API_URL } from '../../constants';
import { toast, ToastContainer } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default function Responder(){
    const navigate = useNavigate();
    
    const[resposta, setReposta] = useState('');

    const[lista, setLista] = useState([]);

    useEffect(() => {
        if(!localStorage('adm-logado')){
          navigate('/erro')
        }
      }, [])

      async function Resposta(id) {
        try {
            let body = {
                resposta: resposta,
            };
            let r = await axios.put(API_URL + '/responder/' + id, body);
            toast.success('resposta enviada');
            window.location.reload()
        } catch (err) {
            toast.dark(err.message);
        }
    } 

    async function Listar(){
        let r = await axios.get(API_URL + '/reclamacoes')
        setLista(r.data)
    }

    useEffect(() => {
        Listar()
    }, [])

    
    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Resposta();
        }}
      
    return(
        <div className='Pagina-responder'>
            <Menuadm />

            <div className='conteudo-pagina-resposta'>
                <h1>Reclamações</h1>

                <div className='card'>
                    {lista.map(item => 
                        <div>
                            <h4>{item.nm_cliente}</h4>
                            <p className='reclamacao'>Reclamação: {item.ds_reclamacao}</p>

                            {item.ds_resposta == undefined ?
                                <div>
                                    <ToastContainer/>
                                    <textarea placeholder='Responder' value={resposta} onChange={e => setReposta(e.target.value)}/>
                                    <button className='enviar' onClick={() => Resposta(item.id_reclamacao)}>Enviar</button>
                                </div>
                                :
                                <div>
                                    <p>Resposta: {item.ds_resposta}</p>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}