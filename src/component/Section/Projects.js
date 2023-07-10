

import style from './projects.module.css'
import ButtonB from './elementos/ButtonB'
import Card1 from './elementos/Card'
import C2 from '../Section/elementos/CardHonda'

function Projects() {
    return (
        <div className={style.projects} id="projects">
            <h1>Projetos</h1>
            <Card1/>
            <C2/>
            <section>
            <ButtonB text='Acesse meu repositorio' link='https://github.com/renatogomesN2708'></ButtonB>
            </section>
        </div>

    )
}
export default Projects