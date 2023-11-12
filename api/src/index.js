import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'

import admcontroller from './controller/admcontroller.js'
import clientecontroler from './controller/clientecontroler.js'
import categoriacontroller from './controller/categoriacontroller.js'

import produtoscontroller from './controller/produtoscontroller.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroler);

server.use(categoriacontroller);
server.use(admcontroller);
server.use(produtoscontroller);

server.use('/storage/fotosProdutos', express.static('storage/fotosProdutos'))

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))