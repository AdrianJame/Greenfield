import './index.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Cabesemdgd from '../../components/cabecalhosemdgd';

export default function Produtos(){
    const settings = {
        naturalSlideWidth: 100,
        naturalSlideHeight: 125,
        touchEnabled: true,
        dragEnabled: false,
        isIntrinsicHeight: true,
        isPlaying: true,
        interval: 7000,
        infinite: true,
        dragStep: 1,
        visibleSlides: 3,
    };

    return(
        <div className='pagina-produto'>
            <Cabesemdgd/>

            <section className='produtos-s1'>
                <h1>Os produtos mais vendidos para decorar o seu jardim.</h1>

                
                <CarouselProvider className='carrosel' {...settings}totalSlides={3}>
                    <ButtonBack className='button-carrosel-left'>
                        <img src='/assets/images/setapraesquerda.svg'/>
                    </ButtonBack>

                    <Slider className='secao-slides'>
                        <Slide index={0}>
                            <div>
                                <img src='/assets/images/fertilizantes.svg'/>
                                <p>v</p>
                                <h6>12121 <span>333</span></h6>
                            </div>
                        </Slide>

                        <Slide index={1}>
                            <div>
                                <img src='/assets/images/logocolorida.svg'/>
                                <p>v</p>
                                <h6>12121 <span>333</span></h6>
                            </div>
                        </Slide>

                        <Slide index={2}>
                            <div>
                                <img src='/assets/images/limpezadejardim.svg'/>
                                <p>v</p>
                                <h6>12121 <span>333</span></h6>
                            </div>
                        </Slide>
                    </Slider>
                    {}
                    <ButtonNext className='button-carrosel-right' disabled={false}>
                        <img src="/assets/images/setapradireita.svg"/>
                    </ButtonNext>
                </CarouselProvider>
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