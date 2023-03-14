import React, { useState } from "react"
import "./DashboardEvento.css"
import { Link, Outlet, NavLink } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import PrimeiroHeader from "../primeiroHeader/PrimeiroHeader"

export default function DashboarEvento() {

    const color = "white"
    const paddingLeft = "15%"


    const [ladoEsquerdo, setLadoEsquerdo] = useState(() => {
        return {
            numero: 1,
            display: "grid", gridTemplateColumns: "16% 86%"
        }
    })

    const [basico, setBasico] = useState(() => {
        return { display: "none", marginBottom: "0", transition: "" }
    })


    const [bilhete, setBilhete] = useState(() => {
        return { display: "none", marginBottom: "0", transition: "" }
    })

    const [orador, setOrador] = useState(() => {
        return { display: "none", marginBottom: "0", transition: "" }
    })

    const [palestrante, setPalestrante] = useState(() => {
        return { display: "none", marginBottom: "0", transition: "" }
    })

    const desaparecerLadoEsquerdo = () => {


        if (ladoEsquerdo.numero === 1) {

            setLadoEsquerdo((old) => {
                return old = {
                    display: "grid",
                    gridTemplateColumns:
                        "0% 100%"
                }
            })

        } else {
            setLadoEsquerdo((old) => {
                return old = {
                    numero: 1,
                    display: "grid", gridTemplateColumns: "16% 86%"
                }
            })
        }

    }

    const Orador = () => {
        if (orador.display === "none") {



            setOrador((old) => {
                return old = { display: "flex", marginBottom: "0", transition: "display 2s" }
            })


        } else {

            setOrador((old) => {
                return old = { display: "none", marginBottom: "0" }
            })
        }
    }

    const Basico = () => {
        if (basico.display === "none") {

            setBasico((old) => {
                return old = { display: "flex", marginBottom: "0", transition: "display 2s" }
            })
        } else {

            setBasico((old) => {
                return old = { display: "none", marginBottom: "0" }
            })
        }
    }

    const Bilhete = () => {
        if (bilhete.display === "none") {

            setBilhete((old) => {
                return old = { display: "flex", marginBottom: "0", transition: "display 2s" }
            })
        } else {

            setBilhete((old) => {
                return old = { display: "none", marginBottom: "0" }
            })
        }
    }

    const Palestrante = () => {
        if (palestrante.display === "none") {

            setPalestrante((old) => {
                return old = { display: "flex", marginBottom: "0", transition: "display 2s" }
            })
        } else {

            setPalestrante((old) => {
                return old = { display: "none", marginBottom: "0" }
            })
        }
    }






    return (
        <>
            
            <div className="dashboardevento_Lados"
                style={{
                    display: ladoEsquerdo.display,
                    gridTemplateColumns: ladoEsquerdo.gridTemplateColumns
                }}
            >

                <div className="dashboardevento_LadoEsquerdo">

                    <div className="dashboardevento_LadoEsquerdo_span">


                        <div className="dashboardevento_LadoEsquerdoDivUl">

                            <ul id="menu_logo">
                                <li onClick={desaparecerLadoEsquerdo}
                                    className="fecharLadoEsquedo">
                                    <h2><ArrowLeft></ArrowLeft></h2></li>
                                <Link to={"/dashboard"}>
                                    <li className="logo_li">
                                        <h2>Logo</h2>

                                    </li>
                                </Link>
                            </ul>

                            <ul id="">

                                <NavLink to={"/dashboard/evento/criarEvento"}>
                                    <li
                                        onClick={Basico}

                                    >
                                        Evento
                                    </li>

                                    <NavLink
                                        to={"/dashboard/evento/adicionarFotoEvento"}
                                    >

                                        <p
                                            style={{
                                                display: basico.display, marginBottom: basico.marginBottom,
                                                transition: basico.transition,
                                                color: color,
                                                paddingLeft: paddingLeft


                                            }}
                                        >Adicionar foto</p>

                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/EventoLista"}
                                    >

                                        <p
                                            style={{
                                                display: basico.display, marginBottom: basico.marginBottom,
                                                transition: basico.transition,
                                                color: color,
                                                paddingLeft: paddingLeft


                                            }}
                                        >Lista de evento</p>

                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/editarEvento"}
                                    >

                                        <p
                                            style={{
                                                display: basico.display, marginBottom: basico.marginBottom,
                                                transition: basico.transition,
                                                color: color,
                                                paddingLeft: paddingLeft


                                            }}
                                        >Editar evento</p>

                                    </NavLink>


                                    <NavLink
                                        to={"/dashboard/evento/apagarEvento"}
                                    >

                                        <p
                                            style={{
                                                display: basico.display, marginBottom: basico.marginBottom,
                                                transition: basico.transition,
                                                color: color,
                                                paddingLeft: paddingLeft
                                            }}
                                        >Apagar evento</p>

                                    </NavLink>

                                </NavLink>

                                <NavLink to={"/dashboard/evento/criarBilhete"}>
                                    <li
                                        onClick={Bilhete}
                                    >
                                        Bilhete
                                    </li>
                                    <NavLink
                                        to={"/dashboard/evento/BilheteLista"}
                                    >
                                        <p
                                            style={{
                                                display: bilhete.display, marginBottom: bilhete.marginBottom,
                                                transition: bilhete.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Lista de bilhete</p>

                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/editarBilhete"}
                                    >
                                        <p
                                            style={{
                                                display: bilhete.display, marginBottom: bilhete.marginBottom,
                                                transition: bilhete.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Editar bilhete</p>

                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/apagarBilhete"}
                                    >
                                        <p
                                            style={{
                                                display: bilhete.display, marginBottom: bilhete.marginBottom,
                                                transition: bilhete.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Apagar bilhete</p>

                                    </NavLink>

                                </NavLink>


                                <NavLink

                                    to={"/dashboard/evento/CriarOrador"}>

                                    <li
                                        onClick={Orador}
                                    >
                                        Orador
                                    </li>
                                    <NavLink
                                        to={"/dashboard/evento/OradorLista"}>

                                        <p
                                            style={{
                                                display: orador.display, marginBottom: orador.marginBottom,
                                                transition: orador.transition,
                                                color: color,
                                                paddingLeft: paddingLeft
                                            }}
                                        >Lista de orador</p>
                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/editarOrador"}>

                                        <p
                                            style={{
                                                display: orador.display, marginBottom: orador.marginBottom,
                                                transition: orador.transition,
                                                color: color,
                                                paddingLeft: paddingLeft
                                            }}
                                        >Editar orador</p>
                                    </NavLink>


                                    <NavLink
                                        to={"/dashboard/evento/apagarOrador"}>

                                        <p
                                            style={{
                                                display: orador.display, marginBottom: orador.marginBottom,
                                                transition: orador.transition,
                                                color: color,
                                                paddingLeft: paddingLeft
                                            }}
                                        >Apagar orador</p>
                                    </NavLink>

                                </NavLink>



                                <NavLink
                                    to={"/dashboard/evento/criarPalestrante"}>
                                    <li
                                        onClick={Palestrante}
                                    >

                                        Palestrante
                                    </li>

                                    <NavLink
                                        to={"/dashboard/evento/adicionarFotoPalestrante"}
                                    >

                                        <p
                                            className="p_lista"
                                            style={{
                                                display: palestrante.display, marginBottom: palestrante.marginBottom,
                                                transition: palestrante.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Adicionar foto</p>

                                    </NavLink>


                                    <NavLink
                                        to={"/dashboard/evento/PalestranteLista"}
                                    >

                                        <p
                                            className="p_lista"
                                            style={{
                                                display: palestrante.display, marginBottom: palestrante.marginBottom,
                                                transition: palestrante.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Lista de palestrante</p>

                                    </NavLink>

                                    <NavLink
                                        to={"/dashboard/evento/editarPalestrante"}
                                    >

                                        <p
                                            className="p_lista"
                                            style={{
                                                display: palestrante.display, marginBottom: palestrante.marginBottom,
                                                transition: palestrante.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Editar palestrante</p>

                                    </NavLink>



                                    <NavLink
                                        to={"/dashboard/evento/apagarPalestrante"}
                                    >

                                        <p
                                            className="p_lista"
                                            style={{
                                                display: palestrante.display, marginBottom: palestrante.marginBottom,
                                                transition: palestrante.transition,
                                                color: color,
                                                paddingLeft: paddingLeft

                                            }}
                                        >Apagar palestrante</p>

                                    </NavLink>


                                </NavLink>

                                <NavLink to={"/dashboard/evento/estatistica"}>

                                    <li>Estatistica</li>

                                </NavLink>

                                <NavLink to={"/dashboard/evento/perfil"}>

                                    <li>Perfil</li>

                                </NavLink>


                            </ul>


                        </div>
                    </div>

                </div>

                <div className="dashboardevento_LadoDireito">
          
                    <Outlet>

                    </Outlet>


                </div>


            </div>

        </>
    )

}