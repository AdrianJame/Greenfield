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




