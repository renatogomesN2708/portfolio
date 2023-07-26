
import styles from './Navbar.module.css'
import insta from '../../img/insta.png'
import linkedin from '../../img/linkedin.png'
import git from '../../img/gtihub.png'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
               <ul>
                <li><Nav.Link href='#Presentetion'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
               </ul>
               <ul/>
           <ul>
            <li>
                <a href="https://www.instagram.com/renatogomes_1904/" target='_blank'>
                <img src={insta}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/renato-gomes-045b67176/" target='_blank'>
                <img src={linkedin}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/renatogomesN2708" target='_blank'>
                <img src={git}/>
                </a>
            </li>
           </ul>
        </div>
    )
}
export default Navbar