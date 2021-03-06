import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";
import logo from "../../utils/images/logo_mock.svg";
import logoWhite from "../../utils/images/logo_mock_white.svg";

export const NavbarDesktop = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerLogo}>
          <Link href="/">
            {router.pathname == "/pageConNavbarYFondoNegro?" ? (
              <Image src={logoWhite} />
            ) : (
              <Image src={logo} />
            )}
          </Link>
        </div>
        <div
          className={
            router.pathname == "/pageConNavbarYFondoNegro?"
              ? styles.headerItemsBgBlack
              : styles.headerItems
          }
        >
          <Link href="/hazte-open-bootcamper">
            {router.pathname == "/hazte-open-bootcamper" ? (
              <a className={styles.current}>Hazte Open Bootcamper</a>
            ) : (
              <a>Hazte Open Bootcamper</a>
            )}
          </Link>
          <Link href="/ofertas">
            {router.pathname == "/ofertas" || router.pathname == "/ofertas/[id]" ? (
              <a className={styles.current}>Ofertas</a>
            ) : (
              <a>Ofertas</a>
            )}
          </Link>
          <Link href="/empresa">
            {router.pathname == "/empresa" ? (
              <a className={styles.current}>Empresa</a>
            ) : (
              <a>Empresa</a>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
