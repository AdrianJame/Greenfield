// import { con } from "./connection.js";



// export async function inserirPedido(novoPedido) {
//     const comando = `
//         INSERT INTO tb_pedido (
//             i
//         )
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `

//     const [info] = await con.query(comando, [
//         novoPedido.idUsuario,
//         novoPedido.idEndereco,
//         novoPedido.idCupom,
//         novoPedido.data,
//         novoPedido.notaFiscal,
//         novoPedido.tipoFrete,
//         novoPedido.valorFrete,
//         novoPedido.status,
//         novoPedido.tipoPagamento
//     ]);
//     return info.insertId;
// }




// export async function inserirPagamento(idPedido, novoPagamento) {
//     const comando = `
//             INSERT INTO tb_cartao (
//                 id_pedido,
//                 nm_cartao,
//                 nr_cartao,
//                 dt_vencimento,
//                 cod_seguranca,
//                 nr_parcelas,
//                 ds_forma_pagamento
//             )
//             VALUES (?, ?, ?, ?, ?, ?, ?);
//     `

//     const [info] = await con.query(comando, [
//         idPedido,
//         novoPagamento.nome,
//         novoPagamento.numero,
//         novoPagamento.vencimento,
//         novoPagamento.codSeguranca,
//         novoPagamento.parcelas,
//         novoPagamento.formaPagamento
//     ]);
//     return info.affectedRows;
// }






// export async function inserirPedidoItem(idPedido, idProduto, qtd) {
//     const comando = `
//         INSERT INTO tb_item_pedido (
//             id_pedido,
//             id_produto,
//             qtd_itens,
            
//         )
//         VALUES (?, ?, ?)
//     `

//     const [info] = await con.query(comando, [idPedido, idProduto, qtd]);
//     return info.affectedRows;
// }
