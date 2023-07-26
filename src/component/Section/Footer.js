import insta from '../../img/insta.png'
import linkedin from '../../img/linkedin.png'
import git from '../../img/gtihub.png'
import style from '../Section/Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
           <ul>
            <li>
                <a href="https://www.instagram.com/renatogomes_1904/" target='_blank'>
                <img src={insta}
                />
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
            <section>
                <p>renatogomes.0405@gmail.com</p><br/>
                <p>Renato Gomes © 2023</p>
            </section>
        </div>
    )
}
export default Footer