import React, { useState } from 'react';
import './componentsStyles/carrousel.css';
import image1 from './componentsImg/fs.png';
import image2 from './componentsImg/gd.png';

const Carrousel = () => {
    const [imgC, setImgC] = useState(0);

    const images = [image1, image2];

    const passaSlide = () => {
        if (imgC === images.length - 1) {
            alert('Não há mais slides');
        } else {
            setImgC(imgC + 1);
        }
    };

    const voltaSlide = () => {
        if (imgC === 0) {
            alert('Este é o primeiro slide');
        } else {
            setImgC(imgC - 1);
        }
    };

    return (
        <div className="carrouselBG">
            <div className="carrouselContainer">
                <h1>
                    AQUI VOCÊ PODE COLOCAR IMAGENS DE VENDAS
                    OU FEEDBACK DOS SEUS SERVIÇOS/PRODUTOS
                </h1>
                <h3>
                    Se contra fatos não há argumentos, contra resultados também não. Veja abaixo
                    alguns de milhares de depoimentos de sucesso das minhas alunas. E quem sabe
                    a próxima não pode ser você?
                </h3>
                <div className="carrousel">
                    <button onClick={voltaSlide}>&lt;</button>
                    <div className="carrouselImages">
                        <img src={images[imgC]} alt="imagem" />
                    </div>
                    <button onClick={passaSlide}>&gt;</button>
                </div>
                <h2>Seja você a próxima mulher de sucesso</h2>
            </div>
        </div>
    );
};

export default Carrousel;