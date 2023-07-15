import './componentsStyles/bonus.css'

function bonus() {
    return (
        <div className='bonus'>
            <h1>Comprando agora, você receberá + 5 Bônus Exclusivos:</h1>
            <h5>Realizando a sua inscrição agora, você terá acesso aos 4 bônus exclusivos
                mais cobiçados pelas mulheres que estão no mercado mas não têm
                acesso aos mesmos.</h5>
            <div className='bonusCards'>
                <bonusCard titulo="bonus1" paragrafo="Modulo bônus de Como se afiliar e vender pela
                    Magazine Luiza. Um método com dicas para
                    você vender todos os dias sem aparecer." precoA="De R$600,00" precoAA="Por R$0,00" />
                <bonusCard titulo="bonus2" paragrafo="Módulo bônus de como se afiliar na SHEIN e
                    vender sem aparecer na loja mais cobiçada por
                    mulheres e blogueiras famosas." precoA="De R$600,00" precoAA="Por R$0,00" />
                <bonusCard titulo="bonus3" paragrafo="Módulo bônus de copy já prontas.
                    Textos persuasivos que convertem 
                    centenas de vendas sem precisar
                    ficar pensando o que falar ou fazer." precoA="De R$97,00" precoAA="Por R$0,00" />
                <bonusCard titulo="bonus4" paragrafo="Módulo bônus de tráfego pago no
                    facebook ads te ensinando a
                    alcançar milhares de pessoas de
                    todo o Brasil no automático 24h por
                    dia." precoA="De R$399,00" precoAA="Por R$0,00" />
                <bonusCard titulo="bonus5" paragrafo="FERRAMENTA SECRETA com
                    inteligência artificial que acabou de
                    chegar no Brasil. Você vai aprender a
                    criar tudo com apenas 1 clique." precoA="De R$799,00" precoAA="Por R$0,00" />
            </div>
        </div>
    )
}

export default bonus