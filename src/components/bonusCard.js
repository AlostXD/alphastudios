import './componentsStyles/bonusCard.css'


function bonusCard(text) {
    return (
        <div className='bonusCard'>
            <h1>{text.titulo}</h1>
            <p>{text.paragrafo}</p>
            <p className='precoA'>{text.precoA}</p>
            <p className='precoAA'>{text.precoAA}</p>
        </div>
    )
}

export default bonusCard