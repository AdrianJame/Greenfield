import './index.scss'
import Menuadm from '../../components/menuadm'
import axios from 'axios'
import { API_URL } from '../../constants'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { toast, ToastContainer } from  'react-toastify'


export default function Pedidosadm(){
    const[listar, setListar]= useState([])
    const navigate = useNavigate();
    const [status, setStatus] = useState('')

async function Listar(){
        let r = await axios.get(API_URL + '/consultarpedidos');
        setListar(r.data)
    }

    async function alterarstatus(id){
        try{
            let body = {
                status: status
            };

            

            let r = await axios.put(API_URL + '/pedido/status/' + id, body)
            toast.success('Status enviado');
            window.location.reload()

        }

        catch (err) {
            toast.dark(err.message);
        }

        
    }



    useEffect(() => {
        Listar()
        if(!storage('adm-logado')){
            navigate('/erro')
          }
    }, [])

    return(
            <div className='page-pedidoadm'>
                <Menuadm/>
                <section className='pedidosadm-body'>
                        <div className='titulos'>
                            <p>N° do pedido</p>
                            <p>Cliente</p>
                            <p>Email Cliente </p>
                            <p>Data do pedido</p>
                            <p>Status</p>
                        </div>

                        {listar.map(item =>
                    <div className='listarpedidos'> 
                        <p>{item.id_pedido}</p>

                        <p>{item.nm_cliente}</p>

                        <p>{item.ds_email}</p>

                        <p>{item.dt_pedido}</p>

                        <p>{item.ds_status}</p>

                        <input value={status} onChange={e => setStatus(e.target.value)}/>

                        <button onClick={() => alterarstatus(item.id_pedido)}>Enviar</button>
                    
                    </div>
                    
                    )}
                        <ToastContainer/>

                </section>

                
            </div>
    )
}