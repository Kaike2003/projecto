import React, { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
import Swal from "sweetalert2"

export default function HeaderSemSessao() {

    const navigate = useNavigate()

    async function IniciarSessao() {

        Swal.fire({
            icon: 'warning',
            title: 'Escolha um tipo de conta',
            text: "Cadastra-se na Venda online, como um participante ou um organizador de eventos.",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '	#198754',
            confirmButtonText: 'Participante',
            cancelButtonText: "Organizador de eventos"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Participante',
                    'Crie uma conta e poderás comprar bilhetes e visualizar eventos.',
                    'info'
                ).then(() => {
                    navigate("/reservaOnline/participante/criarConta")
                })
            } else {
                Swal.fire(
                    'Organizador',
                    'Crie uma conta e poderás criar eventos e ganhar dinheiro com seus eventos',
                    'info'
                ).then(() => {
                    navigate("/reservaOnline/organizador/criarConta")
                })
            }
        })


    }


    return (
        <>

            <nav className="" id="navbar">
                <div className="logo_input">
                    <Link to={"/vendaOnline.com"}>
                        <h2
                            style={{ fontFamily: "Roboto, sem serifa" }}
                            className="" id="titulo">Venda online</h2>
                    </Link>

                </div>

                <ul id="menu">
                    <li >
                        <Link to={"/vendaOnline.com"}>Home</Link>
                    </li>
                    <li className="me-3"
                        onClick={IniciarSessao}
                        style={{
                            color: "black",
                            cursor: "pointer"

                        }}
                    >
                        Login
                    </li>

                </ul>
            </nav>



        </>
    )

}

