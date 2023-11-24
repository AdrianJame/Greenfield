import conexao from './connection.js';

export async function AdicionarPedido(pedidos) {
    const comando = `
        INSERT INTO tb_pedido(id_cliente, id_produto, id_status_pedido, id_endereco, dt_pedido)
                    VALUES (?, ?, 1, ?, NOW())

    `
    const [resp] = await conexao.query(comando, [
        pedidos.IDCliente,
        pedidos.IDProduto,
        pedidos.Status,
        pedidos.Data
    ]);
    pedidos.id = resp.insertId;
    return pedidos;
};

export async function AlterarStatusPedido (pedido, id) {
    const comando = `
        UPDATE tb_pedido
        SET
            ds_status= ?
        WHERE id_pedido = ?
       
    `;

    const [ resp ] = await conexao.query(comando, [
        pedido.status,
        id
    ])
    return resp.affectedRows
}   

export async function MostrarPedidosUsuarios() {
    const comando = `
    SELECT
            P.id_produto            AS ID,
            C.id_cliente            AS IDcliente,
            S.id_status_pedido      AS IDStatus,
            ds_status_pedido        AS Status,
            nm_cliente              AS Usuario,
            nm_produto              AS Produto,
            nr_preco                AS Preco,
            dt_pedido               AS Data,
            img_produto             AS Imagem
    FROM tb_pedido AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        tb_cliente AS C ON A.id_cliente = C.id_cliente
    INNER JOIN
        tb_produto AS P ON A.id_produto = P.id_produto

    `

    const [resp] = await conexao.query(comando);
    return resp;
}


export async function MostrarPedidosPorIdUsuario(id) {
    const comando = `
   SELECT
        P.id_produto            AS ID,
        S.id_status_pedido      AS IDStatus,
        ds_status_pedido        AS Status,
        nm_cliente              AS Usuario,
        nm_produto              AS Produto,
        nr_preco                AS Preco,
        dt_pedido               AS Data,
        img_produto             AS Imagem
    FROM tb_pedido AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        tb_cliente AS C ON A.id_cliente = C.id_cliente
    INNER JOIN
        tb_produto AS P ON A.id_produto = P.id_produto
    WHERE id_cliente = ?;

    `

    const [resp] = await conexao.query(comando, [id]);
    return resp;
}


export async function MostrarPedidoUsuario(id) {
    const comando = `
    select * from tb_pedido 
    inner join tb_cliente
    on tb_pedido.id_cliente = tb_cliente.id_cliente
    where tb_pedido.id_cliente = ?;

    `

    const [resp] = await conexao.query(comando, [id]);
    return resp;
}




export async function inserirPedido(novoPedido){
    const comando = `
        insert into tb_pedido (
            id_cliente,
            id_cliente_endereco,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        values(?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [
        novoPedido.idCliente,
        novoPedido.idEndereco,
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}

export async function inserirPagamento(idPedido, novoPagamento){
    const comando = `
        insert into tb_pagamento_cartao (
            id_pedido,
            nm_cartao,
            nr_cartao,
            dt_vencimento,
            cod_seguranca,
            nr_parcelas,
            ds_forma_pagamento
        )
        values(?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}


export async function inserirPedidoItem(idPedido, idProduto, qtd, preco){
    const comando = `
        insert into tb_item_pedido (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
        )
        values(?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [
        idPedido,
        idProduto,
        qtd,
        preco
    ]);
    return info.affectedRows;
}


export async  function consultarTodosPedidos() {
    let comando = `select * from tb_pedido 
    inner join tb_cliente
    on tb_pedido.id_cliente = tb_cliente.id_cliente

    `
  
    const [dados] = await conexao.query(comando);
    return dados;
  }

  export async  function consultarPedidos() {
    let comando = `
    SELECT
            tb_pedido.id_pedido as pedido,
            tb_pedido.id_cliente as idCliente,
            tb_pedido.dt_pedido as data,
            tb_cliente.nm_cliente as cliente,
            tb_pedido.ds_status as status,
            tb_pedido.tp_pagamento as tipoPagamento
        FROM tb_pedido
        INNER JOIN tb_cliente ON tb_pedido.id_cliente = tb_cliente.id_cliente
        INNER JOIN tb_pedido_item ON tb_pedido.id_pedido = tb_pedido_item.id_pedido
        INNER JOIN tb_pagamento_cartao ON tb_pedido.id_pedido = tb_pagamento_cartao.id_pedido;
    `
  
    const [dados] = await conexao.query(comando);
    return dados;
  }


