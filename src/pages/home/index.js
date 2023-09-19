import './index.scss';

import Cabecomdgd from '../../components/cabecomdgd';
import RodapeGreenfield from '../../components/rodape';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <Cabecomdgd/>
      
      <div className='faixa1'>

        <div className='faixa1-textos'>

          <h1 className='titulo'>
            Encontre na <span>Greenfield</span> 
            <br/> Ofertas de ferramentas
            <br/>Para agricultura
          </h1>

          <p>
            Para fazer a plantação das hortícolas e cumprir as tarefas de manutenção que elas exigem, é essencial reunir as ferramentas adequadas para tornar o seu trabalho mais prático. Temos uma oferta variada de ferramentas manuais que são fáceis de usar e servem diversos propósitos. Na nossa loja online, encontra ancinhos, escovas, escarificadores e vassouras para manter o local de cultivo limpo, livre de resíduos, folhas secas ou galhos partidos.
          </p>

        </div>

       

        <div className='limpezadejardim' >
          <img src='./assets/images/limpezadejardim.svg'/>
        </div>

      </div>

      <div className='faixa2'>
          
            <div className='faixa2-textos'> 

              <h1>Comece agora a sua <span>Jardinagem</span></h1>
              <h2>Com os melhores produtos</h2>

            </div>


            <div className='cards'>

              <div className='card'>
                <img src='./assets/images/sementes.svg'/>
                <h2>Sementes</h2>
                <p>TODO JARDIM COMEÇA COM UMA SIMPLES SEMENTE.</p>

              </div>

              <div className='card'>
                <img src='./assets/images/ferramentas.svg'/>
                <h2>Ferramentas</h2>
                <p>TER AS FERRAMENTAS CERTAS É FUNDAMENTAL PARA FACILITAR O TRABALHO E GARANTIR UM RESULTADO SATISFATÓRIO.</p>
                
              </div>

              <div className='card'>
                <img src='./assets/images/fertilizantes.svg'/>
                <h2>Fertilizantes</h2>
                <p>O FERTILIZANTE É O SEGREDO PARA UM JARDIM SAUDÁVEL E BONITO.</p>
              </div>

            </div>
        
      </div>


      <div className='faixa3'>

          <div className='faixa3-numeros-textos'>

            <div className='faixa3-numeros'>

              <p>1.</p>

              <p>2.</p>

              <p>3.</p>

            </div>
            
            <div className='faixa3-textos'>
              <h1>Dicas para Jardinagem</h1>

              <p>Quem está começando a se aventurar no mundo da jardinagem, deve começar munido de pá, espátula fina e rastelo. Mas é interessanteter outras peças para ajudar na manutenção das plantinhas.</p>

              <p>É a luz que define onde uma planta deve ficar. Portanto, o primeiro passo é avaliar a luminosidade dos ambientes da sua casa ou do seu jardim.</p>

              <p>É fundamental que as plantas estejam acomodadas em um solo adequado - tanto em jardins quanto em vasos - para desenvolver suas rízes. Muitas vezes, usar apenas terra pode compactar este solo. Por isso, é indicado misturar um pouco de areia de construção, assim a área fica mais drenada para a água escoar.</p>
            </div>

            


          </div>

          <div className='faixa3-img'>
            <img src='./assets/images/image 4.svg'></img>
          </div>
      </div>

      <div className='faixa-verde'>

      </div>


      <div className='faixa4'>

        <div className='faixa4-img'>

          <img src='./assets/images/image 5.svg'></img>
        </div>

        <div className='faixa4-textos'>
          
          <h1> Cortadores de Grama</h1>

          <p>Com nossos cortadores de grama, você pode ter um gramado perfeito em pouco tempo!</p>

          <a>Compre Já</a>

        </div>


      </div>

      <div className='faixa5'>

        <div className='imagem-esquerda'>
          <img src='/assets/images/planta.svg'/>
        </div>

        <div className='conteudo-direita'>
          
          <h1>Acessórios de jardinagem</h1>
          <h2>que <span> transformarão o seu jardim </span>
        </h2>
         

          <p>Ter um jardim em casa pode garantir muito mais que beleza e elegância para a decoração, pois, além disso, as plantas trazem inúmeros benefícios ao ambiente e para todos os moradores do local. O jardim é um lugar para ser e estar, para contemplar, refletir e relembrar. Proporciona tranqüilidade e paz para evocar uma emoção poética. O jardim, na realidade, vai muito além: ele reafirma e restabelece a relação do homem com a natureza.</p>

          <Link>Confira</Link>
        
        </div>

        

      </div>

      <RodapeGreenfield/>
      
    </div>
  );
}


