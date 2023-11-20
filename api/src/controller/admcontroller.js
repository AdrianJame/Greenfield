
import { Loginadm, Reclamacoes, ResponderReclamacao } from "../repository/admrepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post('/adm/login', async (req, resp) => {
  try {
    let email = req.body.email;
    let senha = req.body.senha;
    let nome = req.body.nome;

    let linha = await Loginadm(nome, email, senha);
    if (linha == undefined) {
      throw new Error('Credenciais inválidas!');
    }

    resp.send(linha);
  } catch (err) {
    resp.status(500).send({ erro: err.message});
  }
});


endpoints.put('/responder/:id', async (req, resp) => {
  try{
      let id = req.params.id;
      let cliente = req.body;
      let r = await ResponderReclamacao(id, cliente);
      resp.send()
  }

  catch (err){
      resp.status(500).send({ err: err.message})
  };

})

endpoints.get('/reclamacoes', async (req, resp) => {
  try{
      let dados = await Reclamacoes()
      resp.send(dados);
  }
  catch (err){
      resp.status(500).send({ err: err.message})
  };
})



export default endpoints;