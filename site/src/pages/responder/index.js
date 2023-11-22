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
            let r = await axios.put(API_URL + '/resposta/' + id, body);
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
      
    return(
        <div className='Pagina-responder'>
            <Menuadm />

            <div className='conteudo-pagina-resposta'>
                <h1>Reclamações</h1>

                <div className='card'>
                    {lista.map(item => 
                        <div>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}