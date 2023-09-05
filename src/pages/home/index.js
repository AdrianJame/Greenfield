import './index.scss';

import Cabecomdgd from '../../components/cabecomdgd';


export default function Home() {
  return (
    <div className="Home">
      <Cabecomdgd/>
      
      <div className='faixa1'>

        <div className='primeiro-titulo'>

          <h1>
            Encontre na <span>Greenfield</span> 
            <br/> Ofertas de ferramentas
            <br/>Para agricultura
          </h1>

          <p>
            Para fazer a plantação das hortícolas e cumprir as tarefas de manutenção que elas exigem, é essencial reunir as ferramentas adequadas para tornar o seu trabalho mais prático. Temos uma oferta variada de ferramentas manuais que são fáceis de usar e servem diversos propósitos. Na nossa loja online, encontra ancinhos, escovas, escarificadores e vassouras para manter o local de cultivo limpo, livre de resíduos, folhas secas ou galhos partidos.
          </p>

        </div>
          <img src='./assets/images/limpezadejardim.svg'>
          
          </img>
        <div>

        </div>

      </div>
    </div>
  );
}


