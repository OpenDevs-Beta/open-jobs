import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../../styles/Navbar.module.css'

export const NavbarMobile = () => {

    const router = useRouter()
    const showMenu = () => {
        
    }

    return (
        <header className={`${styles.header} ${styles.headerMobile}`}>
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
                <div className={styles.headerMenu}>
                    <div onClick={showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}