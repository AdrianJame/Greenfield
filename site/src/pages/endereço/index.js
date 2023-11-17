import './index.scss'
import Cabecalhocomlogin from '../../components/cabcomlogin'
import RodapeGreenfield from '../../components/rodape'
import { Link } from 'react-router-dom'
import { API_URL } from '../../constants.js';
import { useEffect, useState } from 'react';

export default function Logradouro () {
const[endereco, setEndereco] = useState([])

const[logradouro , setLogradouro] = useState()
const[bairro , setBairro] = useState()
const[cidade , setCidade] = useState()
const[uf , setUf] = useState()



const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data)
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setUf(data.uf)
    });

}



    return (
        <div className='page-endereco'>
            
            <Cabecalhocomlogin/>
            
                <h1>Endereço</h1>

                <div className='status-pedido'>

                    <div className='circle'>
                        <img src='./assets/images/carrinho-status.svg'/>
                    </div>
                    <div className='linha-verde'></div>

                    <div className='circle-verde'>
                        <img src='./assets/images/ping-verde.svg'/>
                    </div>
                    <div className='linha'></div>

                    <div className='circle-s'>
                        <img src='./assets/images/pagamento-status.svg'/>
                    </div>
                </div>

                <div className='faixa-02'>
                    
                    <div className='produto'>
                        
                    </div>
                
                </div>

                <div className='faixa-frete'>

                    <div className='options-frete'>

                    </div>

                    <div className='options-frete'>
                        
                    </div>
                    
                </div>

                <div className='logradouro-e-total-pedido'>

                    <div className='logradouro'>
                        
                        <div className='line-1'>
                            <input placeholder='INSIRA O CEP' type='text' onBlur={checkCep}/>
                            <input placeholder='Logradouro*' type='text' value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                        </div>
                        
                        <div className='line-2'>
                            <input className='line-menor' placeholder='Número*' type='text' />
                            <input className='line-maior' placeholder='Complemento*' type='text'/>
                        </div>
                        
                        <div className='line-3'>
                            <input placeholder='Referência' type='text' />
                        </div>
                        
                        <div className='line-4'>
                            <input placeholder='Bairro*' type='text' value={bairro} onChange={e => setBairro(e.target.value)}/>
                            <input placeholder='Cidade*' type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
                            <input placeholder='UF*' type='text' value={uf} onChange={e => setUf(e.target.value)}/>
                        </div>

                        <a>SALVAR ALTERAÇÕES</a>

                    </div>

                    <div className='faixa-04'>

                        <div className='pagamento'>

                        </div>

                    </div>

                </div>

            
            <RodapeGreenfield/>

        </div>
    )
}