import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function Reservas() {

    const [data, setData] = useState([])
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);

    const urlPrivadaParticipante = "/reservaOnline/participante/reservas/"


    return (
        <>
            <div className="invisivel_visualizar"></div>



            <div className="titulo_evento_lista container" >
                <div className="titulo_evento container">Historico de reservas</div>
                <div className="eventos_lista container">
                    {
                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {
                                return (
                                    <>

                                        <NavLink
                                            to={urlPrivadaParticipante + `naoPagas/${item.id}`}
                                        >
                                            <span>Não pagas</span>
                                        </NavLink>



                                        <NavLink
                                            key={Math.random().toString(36).substring(2)}
                                            to={urlPrivadaParticipante + `pagas/${item.id}`}
                                        >
                                            <span>Pagas</span>

                                        </NavLink>


                                        <NavLink
                                            key={Math.random().toString(36).substring(2)}
                                            to={urlPrivadaParticipante + `meusEventos/${item.id}`}
                                        >
                                            <span>Meus bilhetes</span>

                                        </NavLink>


                                    </>
                                )
                            }
                        })
                    }


                </div>
            </div>

            <div>
                <Outlet />
            </div>

        </>


    )



}