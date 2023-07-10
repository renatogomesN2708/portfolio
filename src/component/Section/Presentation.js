
import styles from './Presentation.module.css'
import ButtonA from './elementos/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfolio</strong></p>
            <h1>Olá, meu nome é Renato Gomes</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como Desenvolvedor, eu tenho o compromisso de resolver<br/>
                problemas complexos e trazer resultados excepcionais para os negócios.<br/>
                Estou sempre em busca de novas aventuras para superar.</p>
                
                <ButtonA text='Conecte-se comigo!!' link='https://github.com/renatogomesN2708'/>
        </div>
    )
}
export default Presentation