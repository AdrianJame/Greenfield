import conexao from "./connection.js";

export async function Listartodos(){
    let sql = `SELECT *
    FROM tb_produto
    INNER JOIN tb_categoria
    ON tb_categoria.id_categoria = tb_produto.id_categoria `

    let [resp] = await conexao.query(sql)

    return resp
}

export async function ListarProdutosPorId(id) {
    const comando = `
         select id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                bt_destaque                     as destaque,
                tb_produto.id_categoria         as categoria,
                nm_categoria                 as nomeCategoria
        from tb_produto 
        inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
       where id_produto = ?
        `

    const [registros] = await conexao.query(comando, [id]);
    return registros[0];
}

export async function Listarfavo(id){
    let sql = `select * from tb_produto 
    where bt_favorito = true and id_categoria = ?`

    let [resp] = await conexao.query(sql, [id])

    return resp
}


export async function Listarnaofavo(id){
    let sql = `select * from tb_produto 
    where bt_favorito = false and id_categoria = ?`

    let [resp] = await conexao.query(sql, [id])

    return resp
}

export async function Listarnome(nome){
    let sql = `select * 
    from tb_produto
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    where nm_produto like ?`

    const [resp] = await conexao.query(sql, [`%${nome}%`])

    return resp
}

        export async function Listarporid(id){
            let sql = `select * 
            from tb_produto
            inner join tb_categoria
            on tb_produto.id_categoria = tb_categoria.id_categoria
            where id_produto = ?`

            const [resp] = await conexao.query(sql, [id])

            return resp[0]
        }

export async function Listarporcategoria(id){
    let sql = `select * 
    from tb_produto
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    where tb_produto.id_categoria = ?`

    const [resp] = await conexao.query(sql, [id])

    return resp
}

export async function Cadastrarproduto(produtos){
    let sql = `insert into tb_produto(nm_produto, ds_fabricante, vl_preco, nr_garantia, ds_produto, id_categoria, vl_preco_promocao, bt_promocao, qtd_estoque, ds_material, ds_dimensoes, ds_extra, bt_favorito )
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.preco_promo,
        produtos.promocao,
        produtos.estoque,
        produtos.material,
        produtos.dimensoes,
        produtos.extra,
        produtos.fav
    ])

    produtos.id = info.insertId

    return produtos;
}




export async function Editarproduto(id, produtos){
    let sql = `update tb_produto set 
    nm_produto = ?,
    ds_fabricante = ?,
    vl_preco = ?,
    nr_garantia = ?,
    ds_produto = ?,
    id_categoria = ?,
    qtd_estoque = ?,
    ds_material = ?,
    ds_dimensoes = ?,
    ds_extra = ?
    where id_produto = ?`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.estoque,
        produtos.dimensoes,
        produtos.material,
        produtos.extra,
        id
    ])

    let linha = info.affectedRows;
    return linha
}

export async function Favorito(id, produtos){
    let sql = `update tb_produto set bt_favorito = ? where id_produto = ?`

    let [info] = await conexao.query(sql, [produtos.favorito, id])

    let linha = info.affectedRows;
    return linha
}

export async function deletarproduto(id){
    let sql = `delete from tb_produto where id_produto = ?`

    let [info] = await conexao.query(sql, [id])

    let linha = info.affectedRows;
    return linha;
}


export async function alterarImagem(imagem, id) {
    const comando = `
        update tb_produto
        set ds_img1 = ?
        where id_produto = ?
    `

    const [resp] = await conexao.query(comando, [imagem, id]);
    return resp.affectedRows;
}


