import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { API_URL } from '../../constants.js';
import axios from 'axios';
import { useState } from 'react';

export default function Cabecomdgd(){

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    async function Buscar(){
        let r = await axios.get(API_URL + '/produto/nome?nome=' + pesquisa)
        setProdutos(r.data)
        navigate('/')
    }


    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Buscar();
    }} 
    
    return(
        <header className='Cabecalho1'>
            <img src='/assets/images/image 62.svg'/>

            <div className='meio-cabecalho'>
                <p>Home</p>
                <p>Sobre</p>

                <Link className='section' to={'/pesq'}>
                    <img src='/assets/images/lupa.svg'/>
                </Link>
            </div>

            <Link className={storage('usuario-logado') ? 'minhaconta' : ''}  to={!storage('usuario-logado') ? '/login' : '/minhaconta'}>{storage('usuario-logado') ? 'Minha conta' : 'Logar'}</Link>
        </header>
    )
}