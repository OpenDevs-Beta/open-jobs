import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './Navbar.module.css'
import logo from '../../utils/images/logo_mock.svg'

export const NavbarMobile = () => {

    const router = useRouter()
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const showMenu = () => { setToggleMenu(true) }
    const hideMenu = () => { setToggleMenu(false) }

    return (
        <header className={`${styles.header} ${styles.headerMobile}`}>
            <div>
                <div className={styles.headerLogo}>
                        <Link href="/">
                            <Image src={logo} />
                        </Link>
                    </div>
                <div className={styles.headerMenu}>
                    <div onClick={showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.mobileMenu} style={{left: toggleMenu ? '30%' : '100%'}}>
              <div>
                  <div onClick={hideMenu}>
                      <span></span>
                      <span></span>
                  </div>
              </div>
              <div>
                  <div>
                      <Link href="/">
                          { router.pathname == '/' ?
                              <a className={styles.current}>Inicio</a>
                          :
                              <a>Inicio</a>
                          }
                      </Link>
                  </div>
                  <div>
                    <Link href="/hazte-open-bootcamper">
                      { router.pathname == '/hazte-open-bootcamper' ?
                        <a className={styles.current}>Hazte Open Bootcamper</a>
                      :
                        <a>Hazte Open Bootcamper</a>
                      }
                    </Link>
                  </div>
                  <div>
                      <Link href="/ofertas">
                          { router.pathname == '/ofertas' ?
                              <a className={styles.current}>Ofertas</a>
                          :
                              <a>Ofertas</a>
                          }
                      </Link>
                  </div>
                  <div>
                    <Link href="/empresa">
                      { router.pathname == '/empresa' ?
                        <a className={styles.current}>Empresa</a>
                      :
                        <a>Empresa</a>
                      }
                    </Link>
                  </div>
              </div>
          </div>
        </header>
    )
}