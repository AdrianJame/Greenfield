import mysql from 'mysql2/promise';

const conexao = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PWD
});

console.log('Banco de dados conectado')

export default conexao;



