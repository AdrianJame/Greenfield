import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Homeadm from './pages/home-adm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginADM from './pages/login-adm';
import MinhaConta from './pages/minhaconta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/homeadm' element={<Homeadm/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='/login-adm' element={<LoginADM/>}/>
        <Route path='/minhaconta' element={<MinhaConta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


