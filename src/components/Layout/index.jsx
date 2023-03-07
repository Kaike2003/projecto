import { Outlet, Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../../pages/footer/Footer"
import Concerto from "../../pages/tipo_Eventos/Concerto/Concerto";


export default function Layout() {

    return (
        <>

            <header>
                <Header></Header>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </>
    )

}