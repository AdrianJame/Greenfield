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

export async function AlterarStatusPedido (status, id) {
    const comando = `
        UPDATE tb_pedido
        SET
            id_status_pedido = ?
        WHERE id_pedido = ?
       
    `;

    const [ resp ] = await conexao.query(comando, [status.IdStatus, id])
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
    WHERE id_pedido = ?;

    `

    const [resp] = await conexao.query(comando, [id]);
    return resp[0];
}