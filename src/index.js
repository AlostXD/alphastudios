import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Internet from './components/internet.js'
import ProductDesc from './components/productDesc'
import PontosPositivos from './components/pontosPositivos'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Internet />
    <ProductDesc />
    <PontosPositivos
      text='Sem precisar aparecer'
      text2='Sem conversar com
      nenhum cliente'
      text3='Sem promessas falsas como
      vários gurus fazem por aí'
      text4='De maneira honesta,
      simples e totalmente
      verdadeira.'
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
