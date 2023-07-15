import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Internet from './components/internet';
import ProductDesc from './components/productDesc';
import PontosPositivos from './components/pontosPositivos';
import Carrousel from './components/carrousel';
import Apresentacao from './components/apresentacao';
import Treinamento from './components/treinamento';
import Curso from './components/curso'
import Bonus from './components/bonus';
import BonusCard from './components/bonusCard';
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
    <Carrousel />
    <Apresentacao />
    <Treinamento />
    <Curso />
    <Bonus />
    <BonusCard titulo="bonus1" paragrafo="Modulo bônus de Como se afiliar e vender pela
                    Magazine Luiza. Um método com dicas para
                    você vender todos os dias sem aparecer." precoA="De R$600,00" precoAA="Por R$0,00" />
    <BonusCard titulo="bonus2" paragrafo="Módulo bônus de como se afiliar na SHEIN e
                    vender sem aparecer na loja mais cobiçada por
                    mulheres e blogueiras famosas." precoA="De R$600,00" precoAA="Por R$0,00" />
    <BonusCard titulo="bonus3" paragrafo="Módulo bônus de copy já prontas.
                    Textos persuasivos que convertem 
                    centenas de vendas sem precisar
                    ficar pensando o que falar ou fazer." precoA="De R$97,00" precoAA="Por R$0,00" />
    <BonusCard titulo="bonus4" paragrafo="Módulo bônus de tráfego pago no
                    facebook ads te ensinando a
                    alcançar milhares de pessoas de
                    todo o Brasil no automático 24h por
                    dia." precoA="De R$399,00" precoAA="Por R$0,00" />
    <BonusCard titulo="bonus5" paragrafo="FERRAMENTA SECRETA com
                    inteligência artificial que acabou de
                    chegar no Brasil. Você vai aprender a
                    criar tudo com apenas 1 clique." precoA="De R$799,00" precoAA="Por R$0,00" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
