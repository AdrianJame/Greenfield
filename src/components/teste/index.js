import './index.scss'
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Teste() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Mostrar/Esconder</button>
      <CSSTransition in={show} timeout={200} classNames="fade">
        <div className="fade">Conteúdo que aparece</div>
      </CSSTransition>
      <CSSTransition in={show} timeout={1000000} classNames="fade">
        <div className="fade">Conteúdo que some</div>
      </CSSTransition>
    </div>
  );
}