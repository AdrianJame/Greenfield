import './index.scss'

import Cabecomdgd from '../../components/cabecomdgd'
import RodapeGreenfield from '../../components/rodape';

export default function Sobre(){
    return(
        <div className='pagina-sobre'>
                <Cabecomdgd/>

                <div className='faixa'>

                    <img src='/assets/images/image 62.svg' />
                    <div className='textos'>
                        <h1>Sobre a Greenfield: Cultivando o Futuro com Sustentabilidade e Paixão</h1>
                        <p>Seja bem-vindo à Greenfield, uma empresa comprometida com a agricultura e jardinagem sustentáveis, onde cada semente plantada representa não apenas o crescimento de uma planta, mas também o florescimento de um compromisso com o meio ambiente e a qualidade de vida</p>
                    </div>

                </div>

                <div className='faixa'>
                    <div className='textos'>

                        <img src='/assets/images/eco.svg' className='imagem-resp' />

                        <h1>Nossa Missão</h1>
                        <p>Na Greenfield, nossa missão é proporcionar soluções inovadoras e sustentáveis para as necessidades crescentes no campo da agricultura e jardinagem. Acreditamos que cada indivíduo tem o poder de transformar seu espaço, seja um jardim residencial ou uma extensa área agrícola, em um ambiente vibrante e saudável, oferecemos uma ampla gama de produtos de alta qualidade, desde sementes e fertilizantes até equipamentos de jardinagem e ferramentas agrícolas.Nosso objetivo é fornecer soluções que atendam às necessidades específicas de nossos clientes, impulsionando o crescimento saudável de suas plantas e colheitas</p>

                    </div>

                    <img src='/assets/images/eco.svg' className='imagem2' />
                </div>

                <div className='faixa'>
                    <img src='/assets/images/plantas.svg' />

                    <div className='textos'>
                        <h1>Compromisso com a Sustentabilidade</h1>
                        <p>Acreditamos que a sustentabilidade é a chave para um futuro próspero. Por isso, em cada fase de nossas operações, desde o desenvolvimento de produtos até a entrega aos clientes, buscamos práticas que minimizem nosso impacto ambiental. Nosso compromisso vai além das palavras, e trabalhamos incansavelmente para promover a agricultura regenerativa e práticas agrícolas ecologicamente corretas.</p>
                    </div>
                </div>

                
            <RodapeGreenfield />
        </div>
    )
}