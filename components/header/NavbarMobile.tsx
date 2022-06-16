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
                                LOGO OPEN JOBS
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