

import style from './Skills.module.css'
import javascript from '../../img/javascript.svg'
import html from '../../img/HTML.svg'
import css from '../../img/CSS.svg'
import react from '../../img/React.svg'
import typescript from '../../img/Type.svg'

function Skills() {
    return (
        <div id="skills" className={style.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}
export default Skills