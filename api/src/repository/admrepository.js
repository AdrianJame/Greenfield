import conexao from "./connection.js";

export async function Loginadm(nome, email, senha) {
  let sql = `
  SELECT 
  nm_usuario as "nome",
  ds_email as "email",
  ds_senha as "senha" 
  FROM tb_admin WHERE nm_usuario = ? and ds_email = ? and ds_senha = ?;
  `

  let respostas = await conexao.query(sql, [nome, email, senha]);
  
  let linhas = respostas[0];
  let linha = linhas[0];
  console.log(linha)
  
  return linha;
}

export async function ResponderReclamacao(id, resposta){
  let comando = `update tb_reclamacao
  set ds_resposta = ?
  where id_reclamacao = ?;`
  
  let [info] = await conexao.query(comando, [
      resposta.resposta,
      id
  ])

  let linha = info.affectedRows;
  return linha;
  
}

export async function Reclamacoes(id) {
  let comando = `select * from tb_reclamacao
  inner join tb_cliente
  on tb_reclamacao.id_cliente = tb_cliente.id_cliente`

  const [dados] = await conexao.query(comando, [id])
  
  return dados;
}


