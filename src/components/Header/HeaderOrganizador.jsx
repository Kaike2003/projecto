import React, { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
import Swal from "sweetalert2"
import axios from "axios";

export default function HeaderOrganizador() {

    const navigate = useNavigate()

    const fotoAdmin = "http://localhost:3456/public/upload/usuarios/organizador/"
    const urlPrivadaOrganizador = "/reservaOnline.com/organizador"


    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);
        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }
        fetchData();
    }, []);



    return (
        <>

            <nav className="" id="navbar">
                <div className="logo_input">
                    <Link to={"/reservaOnline/participante"}>
                        <h2
                            style={{ fontFamily: "Roboto, sem serifa" }}
                            className="" id="titulo">Venda online</h2>
                    </Link>

                </div>

                <ul id="menu">
                    <li >
                        <Link to={urlPrivadaOrganizador}>Home</Link>
                    </li>
                    <li className="me-3">
                        <Link to={urlPrivadaOrganizador + "/evento"}>Eventos</Link>
                    </li>

                    <div className="button_span_user">
                        {data.map(item => {
                            console.log(nomeUtilizador)
                            if (item.email === nomeUtilizador) {
                                return (
                                    <div key={item.id} >
                                        <img
                                            className="fotoUsuario"
                                            src={fotoAdmin + item.foto} alt="" />
                                    </div>
                                )
                            }
                        })}
                    </div>

                </ul>
            </nav>



        </>
    )

}

