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
          <Image src={logoWhite} />
        </div>
        <div className={styles.center}>
          <span>
            <h1>Producto</h1>
            <span className={styles.link}><Link href={'/'}>Home</Link></span>
            <span className={styles.link}><Link href={'/hazte-open-bootcamper'}>Hazte OpenBootcamper</Link></span>
            <span className={styles.link}><Link href={'/ofertas'}>Ofertas</Link></span>
            <span className={styles.link}><Link href={'/empresa'}>Empresa</Link></span>
          </span>
          <span>
            <h1>Recursos</h1>
            <span className={styles.link}><Link href={'https://www.open-bootcamp.com'}>Campus OpenBootcamp</Link></span>
            <span className={styles.link}><Link href={'/preguntas-frecuentes'}>Preguntas frecuentes</Link></span>
          </span>
        </div>
      </div>
      <div className={styles.baseline}>
        <div>
          <span className={styles.left}><Link href={'######'}>Términos y condiciones</Link></span>
          <span className={styles.left}><Link href={'#######'}>Política privacidad</Link></span>
          <span className={styles.left}><Link href={'########'}>Cookies</Link></span>
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