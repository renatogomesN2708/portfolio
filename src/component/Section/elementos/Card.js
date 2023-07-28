
import styles from '../elementos/Card.module.css'
import coutdown from '../../../img/Projetos/Coutdown.svg'
import ButtonB from '../elementos/ButtonB'
import {useState, useEffect} from 'react'

function Card1() {
    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOff(){
        setInfo(false)
    }
    return (
        <div onMouseLeave={infoOff} className={styles.Card}>
            <img src={coutdown} onMouseEnter={infoOn}/>
            {info === true && (
            <div className={styles.responsive}>
                <h3>CCXP 2023</h3>
                <h5>Tecnologia: HTML, CSS, JS</h5>
                <p>Um projeto cuja qual principal objetivo era desenvolver um Coutdown</p>
                    <a href="https://github.com/renatogomesN2708/CCXP2023-1" target='_blank'>
                        <ButtonB text='Acesse o repositorio'></ButtonB>
                    </a>
            </div>
            )

        }
        </div>
        
    )
}
export default Card1