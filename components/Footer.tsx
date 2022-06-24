import Image from "next/image";
import Link from 'next/link'
import styles from './Footer.module.css'
import logoWhite from "../utils/images/logo_mock_white_large.svg";
import email from '../utils/images/icons8-mail.svg'
import instagram from '../utils/images/icons8-instagram.svg'
import facebook from '../utils/images/icons8-facebook.svg'
import twitter from '../utils/images/icons8-twitter.svg'
import linkedin from '../utils/images/icons8-linkedin-500.svg'

export const Footer = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.sides}>
          <Image src={logoWhite}/>
        </div>
        <div className={styles.center}>
          <span>
          <h1>Producto</h1>
          <span className={styles.link}>Acerca de Open Jobs</span>
          <span className={styles.link}>Hazte Open Bootcamper</span>
          <span className={styles.link}>Empleos</span>
          <span className={styles.link}>Empresas</span>
          <span className={styles.link}>Publicar empleo</span>
          <span className={styles.link}>Regístrate</span>
        </span>
          <span>
            <h1>Recursos</h1>
            <span className={styles.link}>Canal de IT Recruiters</span>
            <span className={styles.link}>Blog</span>
            <span className={styles.link}>FAQs</span>
            <span className={styles.link}>Centro de ayuda</span>
            <span className={styles.link}>Contacta con nosotros</span>
            <span className={styles.link}>Chat de soporte directo</span>
          </span>
          </div>
          <div className={styles.sides}>
          <h1>Te envíamos las mejores ofertas para ti</h1>
            <button>Crea tu alerta aquí</button>
        </div>
      </div>
      <div className={styles.baseline}>
        <div>
          <span className={styles.left}>Términos y condiciones</span>
          <span className={styles.left}>Política privacidad</span>
          <span className={styles.left}>Cookies</span>
          <span className={styles.left}>© 2022 OpenBootcamp</span>
        </div>
        <div>
          <span className={styles.link}><Link href={'#'}><Image src={linkedin} width='25' height='25' alt='Link to My e-mail' /></Link></span>
          <span className={styles.link}><Link href={'##'}><Image src={twitter} width='25' height='25' alt='Link to My e-mail' /></Link></span>
          <span className={styles.link}><Link href={'###'}><Image src={facebook} width='25' height='25' alt='Link to My e-mail' /></Link></span>
          <span className={styles.link}><Link href={'####'}><Image src={instagram} width='25' height='25' alt='Link to My Instagram' /></Link></span>
          <span className={styles.link}><Link href={'#####'}><Image src={email} width='25' height='25' alt='Link to My e-mail' /></Link></span>
        </div>
      </div>
    </div>
  )

}