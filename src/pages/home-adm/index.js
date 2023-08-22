import './index.scss';
import Cabeadm from '../../components/cabecalhoadm'

export default function Homeadm() {
  return (
    <div className="Homeadm">

      <Cabeadm/>

      <div className='conteudo'>

        <div className='faixa1'>
            <div className='produtos'>
                <img src='./assets/images/image 264.svg'></img>
                <h2>PRODUTOS</h2>
                <p>Cadastre seus produtos e altere-os</p>
            </div>

            <div className='analise'>
                <img src='./assets/images/image 264.svg'></img>
                <h2>ANÁLISE</h2>
                <p>Confira gráficos com estatísticas sobre suas vendas</p>
            </div>

        </div>

        <div className='faixa2'>

            <div className='status-de-pedidos'>
                <img src='./assets/images/image 264.svg'></img>
                <h2>STATUS DE PEDIDOS</h2>
                <p>Confira os pedidos e altere-os</p>
            </div>

            <div className='sair'>
                <img src='./assets/im/image 264.svg'></img>
                <h2>SAIR</h2>
                <p>Sair ou alterar de conta</p>
            </div>

        </div>
      </div>
    </div>
  );
}

