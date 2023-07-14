import './componentsStyles/pontosPositivos.css'

function pontosPositivos(texto) {
    return (
        <div className='contentPontos'>
            <p>AQUI VOCE PODE COLOCAR ALGUNS PONTOS DO SEU SERVIÇO OU PRODUTO</p>
            <p>Você pode começar HOJE a construir uma nova
                fonte de renda para você e sua família</p>
            <div className='contentPontosItens'>
                <li>{texto.text}</li>
                <li>{texto.text2}</li>
                <li>{texto.text3}</li>
                <li>{texto.text4}</li>
            </div>
        </div>
    )
}

export default pontosPositivos;