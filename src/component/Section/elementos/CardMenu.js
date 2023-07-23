import styles from '../elementos/Card3.module.css'
import cardapio from '../../../img/Projetos/Cardapio.svg'
import ButtonB from '../elementos/ButtonB'
import {useState} from 'react'

function C3() {
    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOff() {
        setInfo(false)
    }
    return (
        <div onMouseLeave={infoOff} className={styles.Card3}>
            <img src={cardapio} onMouseEnter={infoOn}/>
            
            {info === true && (
            <div>
                <h3>Cardapio</h3>
                <p>Tecnologia: HTML, CSS, JS</p>
                <p>Projeto desenvolvido para após a finalização do pedido ser guiado para o Whatsapp</p>
                    <a href="https://github.com/renatogomesN2708/portfolio" target='_blank'>
                        <ButtonB text='Acesse o repositorio'></ButtonB>
                    </a>
            </div>
            )}
        </div>
        
    )
}
export default C3