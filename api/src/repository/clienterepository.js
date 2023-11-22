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

export async function Buscaritemfavorito(id){
    let comando = `select * from tb_favorito
    inner join tb_produto
    on tb_favorito.id_produto = tb_produto.id_produto
    where id_cliente = ?`;
    
    let [dados] = await conexao.query(comando, [id]);
    
    return dados;
}


export async function deletarfavorito(id){
    let sql = `delete from tb_favorito where id_favorito = ?`
    
    let [info] = await conexao.query(sql, [id])
    
    let linha = info.affectedRows;
    return linha;
}


export async function deletarfavoritoporprod(id){
    let sql = `delete from tb_favorito where id_produto = ?`
    
    let [info] = await conexao.query(sql, [id])
    
    let linha = info.affectedRows;
    return linha;
}



export async function AdicionarFavorito(fav){
    let sql = `insert into tb_favorito(id_cliente, id_produto)
    value(?, ?)`

    let [info] = await conexao.query(sql,[ 
        fav.cliente,
        fav.produto
    ])

    fav.id = info.insertId

    return fav
}



export async function inserirReclamacao(reclamacao){
    let comando = `
    insert into tb_reclamacao (ds_reclamacao, id_cliente)
                        value(?, ?)`

    let [info] = await conexao.query(comando, [
        reclamacao.texto,
        reclamacao.cliente
    ]);

    reclamacao.id = info.insertId;

    return reclamacao;
};



export async function Minhasreclamacoes(id) {
    let comando = `select * from tb_reclamacao
    inner join tb_cliente
    on tb_reclamacao.id_cliente = tb_cliente.id_cliente
    where tb_reclamacao.id_cliente = 1`

    const [dados] = await conexao.query(comando, [id])
    
    return dados;
}

export async function cadastrarcartao(idCliente) {
    const comando = `
            INSERT INTO tb_cartao (
                id_cliente,
                nm_cartao,
                nr_cartao,
                dt_vencimento,
                cod_seguranca,
                nr_parcelas,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await conexao.query(comando, [
        idCliente,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}