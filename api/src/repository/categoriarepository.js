import conexao from "./connection.js";

export async function Listarcategoria(){
    let sql = 'select * from tb_categoria'

    let [resp] = await conexao.query(sql)

    return resp;
}