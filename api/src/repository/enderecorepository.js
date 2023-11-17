import conexao from "./connection.js";

export async function Cadastrarendereco(enderecos){
    let sql = `insert into tb_endereço(ds_logradouro, nr_numero, ds_complemento, nm_referencia, ds_bairro, ds_cidade, ds_uf)
    values(?, ?, ?, ?, ?, ?, ?);`

    let [info] = await conexao.query(sql, [
        enderecos.logra,
        enderecos.num,
        enderecos.comple,
        enderecos.referen,
        enderecos.bairro,
        enderecos.cidade,
        enderecos.uf
    ])

    enderecos.id = info.insertId

    return enderecos;
}