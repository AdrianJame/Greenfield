import './index.scss';

import Cabesemdgd from '../../components/cabecalhosemdgd';

export default function Produtos(){



    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>

            <section className='produtos-s1'>
                <h1>Os produtos mais vendidos para decorar o seu jardim.</h1>

                
                <div className='carrosel'>
                    <button className='button-carrosel-left'>
                        <img src='/assets/images/setapraesquerda.svg'/>
                    </button>

                    <section className='secao-slides'>

                    </section>

                    <button className='button-carrosel-right'>
                        <img src="/assets/images/setapradireita.svg"/>
                    </button>
                </div>
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