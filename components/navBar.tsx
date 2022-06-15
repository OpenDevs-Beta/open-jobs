import { useRouter } from "next/router";
import Image from 'next/image'
import logo from '../utils/images/logo_mock.svg'
import styles from './navBar.module.css'
import { useState } from "react";

export const NavBar = () => {

  const router = useRouter();
  const [logged, setLogged] = useState<Boolean>(false)

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.navigation}><span><Image src={logo}  onClick={() => router.push('/')} /></span><span  onClick={() => router.push('/empresas')}>Empresas</span><span  onClick={() => router.push('/ofertas')}>Ofertas de empleo</span></div>
      <div className={styles.auth}>
        {!logged ? <div><span onClick={() => setLogged(true)}>Inicia sesión</span><span onClick={() => router.push('#')}>Regístrate</span></div> : <div><span onClick={() => router.push('#')}>Ir a tu perfil</span><span onClick={() => setLogged(false)}>Cerrar sesión</span></div>}
        </div>
    </div>
    </div>
  )
}