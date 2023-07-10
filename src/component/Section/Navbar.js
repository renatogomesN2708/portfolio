
import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
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
                <FaInstagram size={30}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/renato-gomes-045b67176/" target='_blank'>
                <FaLinkedin size={30}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/renatogomesN2708" target='_blank'>
                <FaGithub size={30}/>
                </a>
            </li>
           </ul>
        </div>
    )
}
export default Navbar