import './componentsStyles/pontosPositivos.css'
import checkImage from './componentsImg/check.png'

function pontosPositivos(texto) {
    return (
        <div className='contentPontos'>
            <p>AQUI VOCE PODE COLOCAR ALGUNS PONTOS DO SEU SERVIÇO OU PRODUTO</p>
            <p>Você pode começar HOJE a construir uma nova
                fonte de renda para você e sua família</p>
            <div className='contentPontosItens'>
                    <li className='item'><img src={checkImage} alt='check'></img>{texto.text}</li>
                    <li className='item'><img src={checkImage} alt='check'></img>{texto.text2}</li>
                    <li className='item'><img src={checkImage} alt='check'></img>{texto.text3}</li>
                    <li className='item'><img src={checkImage} alt='check'></img>{texto.text4}</li>
            </div>
        </div>
    )
}

export default pontosPositivos;