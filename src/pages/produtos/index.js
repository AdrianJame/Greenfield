import './index.scss';

import Projects from '../../components/Projects/Projects'

import Cabesemdgd from '../../components/cabecalhosemdgd';
import { API_URL } from '../../constants.js';

export default function Produtos(){
    const produtos = []
    
    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>

            <section className='produtos-s1'>
                <h1>Os produtos mais vendidos para decorar o seu jardim.</h1>

                <Projects produtos={produtos}/>
            </section>

            <section className='produtos-s2-tipos'>
                <section className='produtos-s2-tipos-card'>
                    <div>
                        <img src='/assets/images/ferramentas1.svg'/>
                        <p>Ferramentas</p>
                    </div>
                    <section></section>
                    <div>
                        <img src='/assets/images/sementes1.svg'/>
                        <p>Sementes</p>
                    </div>
                    <section></section>
                    <div>
                        <img src='/assets/images/fertilizantes1.svg'/>
                        <p>Fertilizantes</p>
                    </div>
                    <section></section>
                    <div>
                        <img src='/assets/images/cortador.svg'/>
                        <p>Cortadores de Grama</p>
                    </div>
                </section>
            </section>
        </div>
    )
}
