
import styles from '../elementos/Card2.module.css'
import Byecar from '../../../img/Projetos/ByeCar.svg'
import ButtonB from '../elementos/ButtonB'
import { useState } from 'react'

function C2() {
    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true) 
    }
    function infoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={styles.Card2}>
            <img src={Byecar} onMouseEnter={infoOn}/>
            {info === true && (

            <div className={styles.responsive}>
                <h3>ByeCar DNC</h3>
                <p>Tecnologia: HTML, CSS, JS</p>
                <p>Projeto desenvolvido pra alternar duas imagens diferentes usando JavaScript.</p>
                    <a href="https://github.com/renatogomesN2708/ProjetoHonda" target='_blank'>
                        <ButtonB text='Acesse o repositorio'></ButtonB>
                    </a>
            </div>
            )}
        </div>
        
    )
}
export default C2