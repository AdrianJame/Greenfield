import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.scss';

import LoginADM from './pages/login-adm';
import Minhaconta from './pages/minhaconta';
import Meuspedidos from './pages/meuspedidos';
import Reclamacoes from './pages/reclamacoes';
import Carrinho from './pages/carrinho';
import Home from './pages/home';
import Homeadm from './pages/home-adm';
import Produtosadm from './pages/produtosadm';
import Statuspedido from './pages/statuspedido';
import Statusdevenda from './pages/statusvenda';
import FormaDePagamento from './pages/formapagamento';
import Logradouro from './pages/endereço';
import Pag from './pages/pagamento';
import Login from './components/login';
import CadatroProdutoADM from './pages/cadastrarproduto';
import Erro from './pages/erroadm';
import ProdutosDecoracao from './pages/produtos';
import Pesquisar from './pages/pesquisar';
import Produto from './pages/produto';
import AlterarProdutoADM from './pages/alterarproduto';
import Favorito from './pages/favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/homeadm' element={<Homeadm/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login-adm' element={<LoginADM/>}/>
        <Route path='/produtos/:id' element={<ProdutosDecoracao/>}/>
        <Route path='/minhaconta' element={<Minhaconta/>}/>
        <Route path='/meuspedidos' element={<Meuspedidos/>}/>
        <Route path='/reclamacoes' element={<Reclamacoes/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/produtosadm' element={<Produtosadm/>} />
        <Route path='/statuspedidos' element={<Statuspedido/>}/>
        <Route path='/statusvenda' element={<Statusdevenda/>}/>
        <Route path='/formadepagamento/:id' element={<FormaDePagamento/>}/>
        <Route path='/endereço' element={<Logradouro/>}/>
        <Route path='/pagamento' element={<Pag/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastroproduto' element={<CadatroProdutoADM/>}/>
        <Route path='/Erro' element={<Erro/>}/>
        <Route path='/pesq' element={<Pesquisar/>}/>
        <Route path='/produto/:id' element={<Produto/>}/>
        <Route path='/altpro/:id' element={<AlterarProdutoADM/>}/>
        <Route path='/favorito' element={<Favorito/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


