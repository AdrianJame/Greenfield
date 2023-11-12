import conexao from './connection.js';

 export async function cadastro(cliente){
    let comando = `insert into tb_cliente(nm_cliente, ds_email, ds_cpf, ds_senha, ds_telefone)
                                        values(?, ?, ?, ?, ?);`;

    let [info] = await conexao.query(comando, [

        cliente.nome,
        cliente.email,
        cliente.cpf,
        cliente.senha,
        cliente.telefone,

    ])


    cliente.id = info.insertId

    return cliente;

}


export async function verificarDuplicadoEmail(email) {
    const comando = 'SELECT * FROM tb_cliente WHERE ds_email = ?';
    
    
    const [resposta] = await conexao.query(comando, [email]);
    
    
    if (resposta.length != 0) {
        return true;
    } else {
        return false;
    }
}

export async function verificarDuplicadocpf(cpf) {
    const comando = 'SELECT * FROM tb_cliente WHERE ds_cpf = ?';
    
    
    const [resposta] = await conexao.query(comando, [cpf]);
    
    
    if (resposta.length != 0) {
        return true;
    } else {
        return false;
    }
}

export async function Consultar(){
    let comando = `select * from tb_cliente`;

    let [dados] = await conexao.query(comando);

    return dados;
}


export async function Loginc(email, senha) {
    let sql = `
    SELECT * FROM tb_cliente WHERE ds_email = ? and ds_senha = ?;
    `
  
    let respostas = await conexao.query(sql, [email,senha]);
    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
  }

export async function inserirReclamacao(reclamacao){
    let comando = `
    insert into tb_reclamacao (ds_reclamacao)
                        value(?)`

    let [info] = await conexao.query(comando, [
        reclamacao.textoreclamacao
    ]);

    reclamacao.id = info.insertId;

    return reclamacao;
};

export async function MeuCadastro(id) {
    let comando = `select * from tb_cliente where id_cliente = ?`

    const [dados] = await conexao.query(comando, [id])

    return dados;
}


export async function AlterarInfo(id, cliente){
    let comando = `update tb_cliente 
    set ds_telefone = ?,
    ds_senha = ?
    where id_cliente = ?`

    let [info] = await conexao.query(comando, [
        cliente.telefone,
        cliente.senha,
        id

    ])

    let linha = info.affectedRows;
    return linha;

}








