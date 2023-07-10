
import styles from '../elementos/Card.module.css'
import coutdown from '../../../img/Projetos/Coutdown.svg'
import ButtonB from '../elementos/ButtonB'

function Card1() {
    return (
        <div className={styles.Card}>
            <img src={coutdown}/>
            <div>
                <h3>CCXP 2023</h3>
                <p>Tecnologia: HTML, CSS, JS</p>
                <p>Um projeto cuja qual principal objetivo era desenvolver um Coutdown</p>
                    <a href="https://github.com/renatogomesN2708/CCXP2023-1" target='_blank'>
                        <ButtonB text='Acesse o repositorio'></ButtonB>
                    </a>
            </div>
        </div>
        
    )
}
export default Card1