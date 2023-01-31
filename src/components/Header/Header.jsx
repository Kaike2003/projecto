import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {


    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div className="logo_input">
                    <Link to={"/"}>
                        <h1 className="text-white">logo</h1>
                    </Link>


                </div>

                <ul id="menu">
                    <li className="text-white">Home</li>
                    <li className="text-white">Sobre</li>
                    <li className="text-white me-3">Contatos</li>

                    <Link to={"#"} className="btn btn-primary">cadastra-se</Link>
                </ul>
            </nav>
        </>
    )

}