import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import Homeadm from './pages/home-adm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginADM from './pages/login-adm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/homeadm' element={<Homeadm/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login-adm' element={<LoginADM/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



 
