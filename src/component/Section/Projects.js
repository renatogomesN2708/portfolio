

import style from './projects.module.css'
import ButtonB from './elementos/ButtonB'
import Card from './elementos/Card'

function Projects() {
    return (
        <div className={style.projects} id="projects">
            <h1>Projetos</h1>
            <Card/>
            <Card/>
            <Card/>
            <section>
            <ButtonB text='Acesse meu repositorio' link='https://github.com/renatogomesN2708'></ButtonB>
            </section>
        </div>

    )
}
export default Projects