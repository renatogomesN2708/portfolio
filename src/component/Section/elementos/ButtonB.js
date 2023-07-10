
import styles from './ButtonB.module.css'
function ButtonB({text, link}) {
    return(

        <a href={link} target='_blank'>
            <button className={styles.btn}> {text} </button>
        </a>
    )
}
export default ButtonB