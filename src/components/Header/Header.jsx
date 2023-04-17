import React, { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react"
import "./Header.css"
import Modal from "react-modal"
import { useContext } from "react";
import { AuthContext } from "../../context/Autenticacao";
import axios from "axios";

Modal.setAppElement("#root")

export default function Header() {

    const { } = useContext(AuthContext)

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
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
                            className="" id="titulo">Reserva online</h2>
                    </Link>

                </div>

                <ul id="menu">
                    <li className="text-white"><Link to={"/reservaOnline/participante"}>Home</Link></li>
                    {/* <li className="text-white"><Link to={"/"}>Sobre</Link></li> */}
                    <li className="text-white me-3">
                        <Link to={"/reservaOnline/participante/reservas"}>Reservas</Link></li>

                    <div className="button_span_user">

                        {data.map(item => {
                            console.log(nomeUtilizador)
                            if (item.email === nomeUtilizador) {
                                return (
                                    <div key={item.id} >
                                        <span
                                            style={{ color: "black" }}

                                        >{item.nome}</span>
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

