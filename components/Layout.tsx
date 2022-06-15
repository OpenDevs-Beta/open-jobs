import { MobileMenu } from "./header/MobileMenu"
import { Navbar } from "../components/navBar"

export const Layout = ({ children }: any) => {
    return (
        <>
            <MobileMenu />
            <Navbar />
            <main>{children}</main>
        </>
    )
}