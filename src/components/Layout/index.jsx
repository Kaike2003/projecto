import { Outlet, Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../../pages/footer/Footer"
import "./Layout.css"
import PaginaPrincipal from "../../pages/PaginaPrincipal/PaginaPrincipal";

export default function Layout() {

    return (
        <>
            <header>
                <Header></Header>
            </header>

            <main className="main_layout_principal">
                <Outlet />
                {/* <PaginaPrincipal ></PaginaPrincipal> */}
            </main>

            {/* <footer>
                <Footer></Footer>
            </footer> */}
        </>
    )

}