import conexao from "./connection.js";





export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_cliente,
            id_cliente_endereco,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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


export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_cartao (
                id_pedido,
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






export async function inserirPedidoItem(idPedido, idProduto, qtd, preco) {
    const comando = `
        INSERT INTO tb_item_pedido (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
            
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await conexao.query(comando, [idPedido, idProduto, qtd, preco ]);
    return info.affectedRows;
}










