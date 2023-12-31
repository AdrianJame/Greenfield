import conexao from "./connection.js";

export async function listar(idCliente) {
    const comando = `
     select id_cliente_endereco		id,
            ds_referencia           referencia,
            ds_cep					cep,
            ds_numero               numero,
            ds_logradouro			logradouro,
            ds_bairro				bairro,
            ds_cidade				cidade,
            ds_estado				estado,
            ds_complemento			complemento
       from tb_endereco 
      where id_cliente = ?
    `

    const [registros] = await conexao.query(comando, [idCliente]);
    return registros;
}



export  async function salvar(idCliente, endereco) {
    const comando = `
    insert into tb_endereco (id_cliente, ds_referencia, ds_cep, ds_logradouro, ds_bairro, ds_cidade, ds_estado, ds_numero, ds_complemento)
                             values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [idCliente, endereco.referencia, endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.complemento]);
    
    return info.insertId;
}


