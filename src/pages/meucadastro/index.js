import Cabesemdgd from '../../components/cabecalhosemdgd'
import './index.scss'

import storage from 'local-storage'


export default function Meucadastro(){

    const[listar, setListar] = useState([]);
    

    async function listarcadastro(){
        let idcliente = JSON.parse(storage('usuario-logado')).id_cliente
        
    }



    return(

        <div className='meucadastro'>
            <Cabesemdgd/>

            <div className='faixa2'>
                <div className='meio'>
                    {listar.map}
                </div>

            </div>

        </div>
    )
} 