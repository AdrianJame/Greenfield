import './index.scss';

import Projects from '../../components/Projects/Projects'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RodapeGreenfield from '../../components/rodape';
import { BuscarImagem } from '../../api/prod';
import localStorage from 'local-storage';

export default function ProdutosDecoracao(){
    const [produto, setProduto] = useState([])
    const [produto2, setProduto2] = useState([])

    const id = useParams().id;

    const navigate = useNavigate();


    async function Listarprodutos(){
        let r = await axios.get(API_URL + '/favoritado/id?id=' + id);
        setProduto(r.data);
    }

    function Desconto(preco){
        let x = preco * 0.10;
        let d = preco - x

        return d.toFixed(2)
    }

useEffect(() => {
        Listarprodutos()
        Listarporcat()
        Desconto()
}, [])


    async function Listarporcat(){
        let r = await axios.get(API_URL + '/naofav/id?id=' + id);
        setProduto2(r.data);
    }

    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>

            <section className='produtos-s1'>
                <h1>Os produtos mais vendidos para decorar o seu jardim.</h1>

                <Projects produtos={produto}/>
            </section>

            <section className='produtos-s2-tipos'>
                <section className='produtos-s2-tipos-card'>
                    <div onClick={() => window.location.reload()}>
                        <div onClick={() => navigate('/produtos/' + 2)}>
                            <img src='/assets/images/ferramentas1.svg'/>
                            <p>Ferramentas</p>
                        </div>
                    </div>
                    <section></section>
                    <div onClick={() => window.location.reload()}>
                        <div onClick={() => navigate('/produtos/' + 1)}>
                            <img src='/assets/images/sementes1.svg'/>
                            <p>Sementes</p>
                        </div>
                    </div>
                    <section></section>
                    <div onClick={() => window.location.reload()}>
                        <div onClick={() => navigate('/produtos/' + 3)}>
                            <img src='/assets/images/fertilizantes1.svg'/>
                            <p>Fertilizantes</p>
                        </div>
                    </div>
                    <section></section>

                    <div onClick={() => window.location.reload()}>
                        <div onClick={() => navigate('/produtos/' + 4)}>
                            <img src='/assets/images/cortador.svg'/>
                            <p>Cortadores de Grama</p>
                        </div>
                    </div>
                    <section></section>

                    <div onClick={() => window.location.reload()}>
                        <div onClick={() => navigate('/produtos/' + 5)}>
                            <img src='/assets/images/vasoplanta.png'/>
                            <p>Decorações</p>
                        </div>
                    </div>
                    
                </section>
            </section>


            <section className='produtos-s3'>
                <h1>Outros Produtos</h1>

                <div className='parte-cards'>
                {produto2.map(item => 
                        <section onClick={() => navigate('/produto/' + item.id_produto)} className='card'>
                            <img src={BuscarImagem(item.ds_img1)} />
                            <p className='nomeproduto'>{item.nm_produto}</p>
                            <div>
                                <p className='preco'>R${item.vl_preco}</p>
                                <p className='desconto'>R${Desconto(item.vl_preco)}</p>
                            </div>
                        </section>
                )}
                </div>
            </section>

            <RodapeGreenfield/>
        </div>
    )
}
