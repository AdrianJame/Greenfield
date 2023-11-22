import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Menuadm from '../../components/menuadm';


export default function Responder(){
    const navigate = useNavigate();


    useEffect(() => {
        if(!localStorage('adm-logado')){
          navigate('/erro')
        }
      }, [])
      
    return(
        <div className='Pagina-responder'>
            <Menuadm />

            <div className='conteudo-pagina-resposta'>
                <h1>Reclamações</h1>

                <div className='card'>
                    
                </div>
            </div>
        </div>
    )
}