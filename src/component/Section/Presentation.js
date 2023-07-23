import {useState, useEffect} from 'react'
import styles from './Presentation.module.css'
import ButtonA from './elementos/ButtonA'

function Presentation() {

    const [text, setText] = useState('')
    const toRotate = ['eu sou Renato Gomes!', ' e sou Desenvolvedor Front-End.']
    const [loop, setLoop] = useState(0)
    const [deletar, setDeletar] = useState(false)
    const period = 300
    const [delta, setDelta] = useState(100)
    

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    },  [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updateText = deletar ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updateText)
        
        if(!deletar && updateText === fullText) {
            setDeletar(true)
            setDelta(period)
        } else if (deletar && updateText === '') {
            setDeletar(false)
            setDelta(period)
            setLoop(loop+1)
        }

    }

    return (
        <div className={styles.presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfolio</strong></p>
            <h1>Olá, {text}</h1>
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