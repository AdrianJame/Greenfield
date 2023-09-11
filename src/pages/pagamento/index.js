import './index.scss';
import Cabesemdgd from '../../components/cabecalhosemdgd';
import RodapeGreenfield from '../../components/rodape';

export default function Pagamento(){
    return(
        <div className='pagamento'>
            <Cabesemdgd/>


            <div className='faixa1'>
                
                    <h1>Pagamento</h1>
                

                <div className='caminho-pag'>
                    <div className='bolinha'>
                        <img src='./assets/images/image 180.svg'></img>
                    </div>
                    <div className='linha'></div>

                    <div className='bolinha'>
                        <img src='./assets/images/image 67.svg'></img>
                    </div>
                    <div className='linha'></div>

                    <div className='bolinha'>
                        <img src='./assets/images/image 193.svg'></img>
                    </div>
                    

                </div>
            </div>

            <div className='faixa2'>

                <div className='conteudo'>

                    <div className='texto-e-inputs'>

                    <div className='texto-e-inputs-esq'>

                        <p className='parcelas'> 
                            PARCELAS
                        </p>


                        <select>
                            <option >Selecione</option>
                            <option ></option>
                            <option ></option>
                            <option ></option>
                        </select>

                        <p>
                            Números do Cartão
                        </p>

                        <input  placeholder="**** **** ****"></input>

                        <p>

                            Nome do Titular
                        </p>

                        <input placeholder="Nome completo"></input>

                        <p>
                            Validade do cartão

                        </p>

                        <div className='validade-cartao'> 
                            <input placeholder="MM"></input>

                            <input placeholder="AA"></input>
                        </div>

                        <p>
                            Código de Segurança
                        </p>

                        <input placeholder="***" className='code-seguranca'></input>


                    </div>

                    <div className='dir'>
                        <p>
                            CPF do titular do cartão
                        </p>

                        <input placeholder="000.000.000-00"></input>

                        <p>Data de Nascimento</p>

                        <input placeholder="Ex: 01/01/2002"></input>
                    </div>




                    </div>

                    <button> CONTINUAR</button>


                </div>

                

               


            </div>
            

            <RodapeGreenfield/>
        </div>
    )
}
    
        
            