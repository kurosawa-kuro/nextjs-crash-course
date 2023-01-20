import { ReactNode } from "react"
import { Nav } from "./Nav"
import { Header } from "./Header"
import styles from "../styles/Layout.module.css"

export const Layout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}
