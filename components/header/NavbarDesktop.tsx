import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../../styles/Navbar.module.css'

export const NavbarDesktop = () => {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.headerLogo}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/th-logo-desktop.d291e623.png"
                                alt="Logo de Open Jobs"
                                width={198}
                                height={40}
                            /> 
                        </a>
                    </Link>
                </div>
                <div className={styles.headerItems}>
                    <Link href="/ofertas">
                        { router.pathname == '/ofertas' ?
                            <a className={styles.current}>Ofertas</a>
                        :
                            <a>Ofertas</a>
                        }
                    </Link>
                    <Link href="/empresa">
                        { router.pathname == '/empresa' ?
                            <a className={styles.current}>Empresa</a>
                        :
                            <a>Empresa</a>
                        }
                    </Link>
                </div>
            </div>
        </header>
    )
}