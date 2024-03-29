import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"
import TabelaHome from "../tabelas/TabelaHome";
import axios from "axios";
import InatividadePagina from "../../../../../../middlewares/TerminarSessao";

export default function Home() {
    const [data, setData] = useState([])
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })


    useEffect(() => {

        async function fetchData() {



            const response = await axios.get('http://localhost:3456/admin/usuarios/organizador');
            const newData = response.data;
            setData(newData);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))

            }


        }
        fetchData();

    }, []);




    return (
        <>
            <section className="section_home">

                <div className="container dashboardHome">
                    <div className="dashboardHome_button_input">
                        <NavLink to={"/reservaOnline/dashboard/organizador/evento/criar"}>
                            <button
                            >Criar Evento</button>
                        </NavLink>
                        {/* <input type="text" name="" id="" placeholder="Pesquisar evento" /> */}
                    </div>
                </div>


                <div className="section_grid container">

                    <div>

                    </div>


                </div>
                {
                    data.map(item => {

                        if (item.email === nomeUtilizador) {
                            return (
                                <>
                                    <div key={Math.random().toString(36).substring(2)}>
                                        <TabelaHome
                                            idOrganizador={item.id}
                                        />
                                    </div>

                                </>
                            )
                        }

                    })
                }
            </section>

        </>
    )

}