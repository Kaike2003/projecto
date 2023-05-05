import { Outlet, Routes, Route } from "react-router-dom";
import "./Layout.css"
import HeaderSemSessao from "../Header/HeaderSemSessao";

export default function LayoutSemSessao() {

    return (
        <>
            <header>
                <HeaderSemSessao />
            </header>

            <main className="main_layout_principal">
                <Outlet />
                
            </main>

        </>
    )

}