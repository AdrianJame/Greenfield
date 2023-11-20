import conexao from "./connection.js";

export async function Cadastrarendereco(enderecos){
    let sql = `insert into tb_endereço(id_cliente, nm_referencia, ds_cep, ds_logradouro, ds_bairro, ds_cidade, ds_estado, nr_numero, ds_complemento)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

    let [info] = await conexao.query(sql, [
        enderecos.cliente,
        enderecos.referencia,
        enderecos.cep,
        enderecos.logradouro,
        enderecos.bairro,
        enderecos.cidade,
        enderecos.estado,
        enderecos.numero,
        enderecos.complemento
    ])

    enderecos.id = info.insertId

    return enderecos;
}