import conexao from "./connection.js";


export async function AdicionarPedido(pedidos) {
    const comando = `
        INSERT INTO tb_pedido(id_cliente, id_cliente_endereco, dt_pedido, vl_frete, ds_status, tp_pagamento)
                    VALUES (?, ?, ?, ?, ?, ?)

    `
    const [resp] = await conexao.query(comando, [
        pedidos.idCliente,
        pedidos.idEndereco,
        pedidos.data,
        pedidos.valor,
        pedidos.status,
        pedidos.tipo

    ]);
    pedidos.id = resp.insertId;
    return pedidos;
};


export async function MostrarPedidosUsuarios() {

    novoPedido.id = info.insertId

    return novoPedido;

}



export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
    SELECT
            P.id_produto            AS ID,
            ds_status_pedido        AS Status,
            NM_NOME_COMP            AS Usuario,
            NM_PRODUTO              AS Produto,
            NR_PRECO                AS Preco,
            NR_PRECO_PROMOCIONAL    AS PrecoPromo,
            DT_PEDIDO               AS Data,
            IMG_PRODUTO             AS Imagem
    FROM tb_pedido AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER
    INNER JOIN
        tb_produto AS P ON A.id_produto = P.ID_INSTRUMENTOS

    `

    const [resp] = await conexao.query(comando);
    return resp;
}


export async function MostrarPedidosPorIdUsuario(id) {
    const comando = `
    SELECT
            P.ID_INSTRUMENTOS       AS ID,
            ds_status_pedido        AS Status,
            NM_NOME_COMP            AS Usuario,
            NM_PRODUTO              AS Produto,
            NR_PRECO                AS Preco,
            NR_PRECO_PROMOCIONAL    AS PrecoPromo,
            DT_PEDIDO               AS Data,
            IMG_PRODUTO             AS Imagem
    FROM TB_PEDIDO AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER
    INNER JOIN
        TB_PRODUTO AS P ON A.ID_INSTRUMENTOS = P.ID_INSTRUMENTOS
    WHERE A.ID_USER = ?;

    `

    const [resp] = await conexao.query(comando, [id]);
    return resp;
}


