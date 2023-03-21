import { Outlet, Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../../pages/footer/Footer"
import "./Layout.css"

export default function Layout() {

    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className="main_layout_principal">
                <Outlet />
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )

}