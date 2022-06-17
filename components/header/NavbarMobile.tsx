import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../../styles/Navbar.module.css'
import logo from '../../utils/images/logo_mock.svg'

export const NavbarMobile = () => {

    const router = useRouter()
    const showMenu = () => {
        
    }

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
        </header>
    )
}