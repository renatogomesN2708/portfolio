import styles from '../elementos/Card3.module.css'
import cardapio from '../../../img/Projetos/Cardapio.svg'
import ButtonB from '../elementos/ButtonB'

function C3() {
    return (
        <div className={styles.Card3}>
            <img src={cardapio}/>
            <div>
                <h3>Cardapio</h3>
                <p>Tecnologia: HTML, CSS, JS</p>
                <p>Projeto desenvolvido para após a finalização do pedido ser guiado para o Whatsapp</p>
                    <a href="https://github.com/renatogomesN2708/CCXP2023-1" target='_blank'>
                        <ButtonB text='Acesse o repositorio'></ButtonB>
                    </a>
            </div>
        </div>
        
    )
}
export default C3