import { MobileMenu } from "./header/MobileMenu"
import { Navbar } from "./Navbar"

export const Layout = ({ children }: any) => {
    return (
        <>
            <MobileMenu />
            <Navbar />
            <main>{children}</main>
        </>
    )
}