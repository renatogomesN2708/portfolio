

import style from './projects.module.css'
import ButtonB from './elementos/ButtonB'
function Projects() {
    return (
        <div className={style.projects} id="projects">
            <h1>Projetos</h1>
           <p>Cards</p>
           <ButtonB text='Acesse meu repositorio' link='https://github.com/renatogomesN2708?tab=repositories'></ButtonB>
        </div>
    )
}
export default Projects