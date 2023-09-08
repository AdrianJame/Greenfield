import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import Homeadm from './pages/home-adm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginADM from './pages/login-adm';
import Minhaconta from './pages/minhaconta';
import Meuspedidos from './pages/meuspedidos';
import Reclamacoes from './reclamacoes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/homeadm' element={<Homeadm/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login-adm' element={<LoginADM/>}/>
        <Route path='/minhaconta' element={<Minhaconta/>}/>
        <Route path='/meuspedidos' element={<Meuspedidos/>}/>
        <Route path='/reclamacoes' element={<Reclamacoes/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



 
