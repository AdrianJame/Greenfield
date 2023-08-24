import './index.scss';
import Cabeadm from '../../components/cabecalhoadm'

export default function Homeadm() {
  return (
    <div className="Homeadm">

      <Cabeadm/>

      <div className='centro'>

        <div className='conteudo'>

          <div className='faixa1'>
              <div className='card'>
                  <img src='./assets/images/image 264.svg'></img>
                  <h2>PRODUTOS</h2>
                  <p>Cadastre seus produtos e altere-os</p>
              </div>

              <div className='card'>
                  <img src='./assets/images/image 265.svg'></img>
                  <h2>ANÁLISE</h2>
                  <p>Confira gráficos com estatísticas sobre suas vendas</p>
              </div>

          </div>

          <div className='faixa2'>

              <div className='card'>
                  <img src='./assets/images/image 266.svg'></img>
                  <h2>STATUS DE PEDIDOS</h2>
                  <p>Confira os pedidos e altere-os</p>
              </div>

              <div className='card'>
                  <img src='./assets/images/image 267.svg'></img>
                  <h2>SAIR</h2>
                  <p>Sair ou alterar de conta</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

