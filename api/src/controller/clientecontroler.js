import { Router } from "express";

import { Loginc, cadastro, inserirReclamacao, Consultar, verificarDuplicadoEmail, verificarDuplicadocpf, MeuCadastro, AlterarInfo } from "../repository/clienterepository.js";

const endpoint = Router();


endpoint.get('/cliente', async (req, resp) => {
    let r = await Consultar();

    resp.send(r);
})



endpoint.post('/cliente/cadastro', async (req, resp) => {
    try {
        const cliente = await req.body;

        //validaçoes abaixo

        if(!cliente.nome)
            throw new Error('⚠ cliente obrigatório')

        if(!cliente.email)
            throw new Error('⚠ email obrigatório')

        if(!cliente.telefone)
            throw new Error('⚠ telefone obrigatorio')

        if(!cliente.cpf)
            throw new Error('⚠ cpf obrigatorio')

        if(!cliente.senha)
            throw new Error('⚠ senha obrigatorio')

        const duplicadoEmail = await verificarDuplicadoEmail(cliente.email);

        if(duplicadoEmail){
            throw new Error('Email já cadastrado.');
        }

        const duplicadocpf = await verificarDuplicadocpf(cliente.cpf);

        if(duplicadocpf){
            throw new Error('CPF já cadastrado.');
        }

        const dados = await cadastro(cliente)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

  endpoint.post('/usuario/login', async (req, resp) => {
    try {
      let email = req.body.email;
      let senha = req.body.senha;
  
      let linha = await Loginc(email, senha);
      if (linha == undefined) {
        throw new Error('Credenciais inválidas!');
      }
  
      resp.send(linha);
      
    } catch (err) {
      resp.status(500).send({ erro: err.message});
    }
  })


    endpoint.post('/reclamacao', async (req, resp) =>{

        try{
            let reclamacao = req.body;
            let r = await inserirReclamacao(reclamacao)
            resp.send(r)
        }

        catch (err) {
            resp.status(400).send({
                erro: err.message
            });
            }
        
    })

    endpoint.get('/meucadastro/id', async (req, resp) => {
        try{
            const {id} = req.query
            let dados = await MeuCadastro(id)
            resp.send(dados);
        }
        catch (err){
            resp.status(500).send({ err: err.message})
        };

        
    } )

    endpoint.put('/alterarinfo/:id', async (req, resp) => {
        try{
            let id = req.params.id;
            let cliente = req.body;
            let r = await AlterarInfo(id, cliente);
            resp.send()
        }

        catch (err){
            resp.status(500).send({ err: err.message})
        };

    })



  
  export default endpoint;






