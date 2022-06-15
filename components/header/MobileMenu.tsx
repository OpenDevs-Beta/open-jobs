import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../styles/MobileMenu.module.css'

export const MobileMenu = () => {

    const router = useRouter()
    const hideMenu = () => {
        
    }

    return (
        <div className={styles.mobileMenu}>
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
    )
}