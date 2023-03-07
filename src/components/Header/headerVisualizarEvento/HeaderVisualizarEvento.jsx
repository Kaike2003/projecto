import React from "react";
import "./HeaderVisualizarEvento.css"

import { Link } from "react-router-dom";

export default function HeaderVisualizarEvento() {

    return(
        <>
        <header id="navbarVisualizar">
        <nav >

            <ul id="menuVisualizar">
                <li className="text-white"><Link to={"/"}>Home</Link></li>
                <li className="text-white"><Link to={"/"}>Sobre</Link></li>
                <li className="text-white me-3">
                    <Link to={"/"}>Contatos</Link></li>

                <Link to={"/loginCreate"} target="_blank" className="btn btn-primary btn-registra text-white">Registra-se</Link>

            </ul>
        </nav >
    </header>
    </>
    )

}