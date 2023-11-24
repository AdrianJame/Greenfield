import { useEffect, useState } from 'react'
import './index.scss'
import { salvar } from '../../api/enderecoAPI.js';
import localStorage from 'local-storage';
import { toast } from 'react-toastify'

export default function ModalEndereco({ exibir, fechar }) {

    const [referencia, setReferencia] = useState('');
    const [cep, setCEP] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [idCliente,setIdCliente] = useState('')


    async function salvarEndereco() {
        try {
            
            const r = await salvar(idCliente, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento);
            toast.dark('Endereço salvo');

            fechar();
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }   



    useEffect(() => {
        if(localStorage('usuario-logado')){
            const usuariologado = localStorage('usuario-logado')
            setIdCliente(usuariologado.id_cliente)
        }

}, [])

const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
    if(cep != ''){
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data)
            setLogradouro(data.logradouro)
            setBairro(data.bairro)
            setCidade(data.localidade)
            setEstado(data.uf)
        });
    }

    else{

    }

}


    return (
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <h1> Novo Endereço </h1>

                    <div className='form'>
                        <div>
                            <label> Referência: </label>
                            <input type='text' value={referencia} onChange={e => setReferencia(e.target.value)} />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> CEP: </label>
                            <input type='text' onBlur={checkCep}   />
                        </div>
                        <div>
                            <label> Logradouro: </label>
                            <input type='text' value={logradouro}  onChange={e => setLogradouro(e.target.value)}  />
                        </div>
                        <div>
                            <label> Número: </label>
                            <input type='text' value={numero}  onChange={e => setNumero(e.target.value)}  />
                        </div>
                        <div>
                            <label> Complemento: </label>
                            <input type='text' value={complemento}  onChange={e => setComplemento(e.target.value)}  />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> Bairro: </label>
                            <input type='text' value={bairro}  onChange={e => setBairro(e.target.value)}  />
                        </div>
                        <div>
                            <label> Cidade: </label>
                            <input type='text' value={cidade}  onChange={e => setCidade(e.target.value)}  />
                        </div>
                        <div>
                            <label> Estado: </label>
                            <input type='text' value={estado}  onChange={e => setEstado(e.target.value)}  />
                        </div>
                        <div>
                            <label></label>
                            <div className='btn'>
                                <button onClick={salvarEndereco}> Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}