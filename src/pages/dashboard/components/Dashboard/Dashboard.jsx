import React, { useState, useContext, createContext } from "react"
import 'animate.css';
import "./Dashboard.css"
import { Outlet, NavLink, Link } from "react-router-dom"
import { MdHome, MdEventAvailable } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import Orador from "../../../../assets/icons/sidebar/orador.png"
import Palestrante from "../../../../assets/icons/sidebar/palestrante.png"
import Estatistica from "../../../../assets/icons/sidebar/estatistica.png"
import { Contexto } from "../../../../components/Dashboard/DashboardLayout";
import { ContextDashboard } from "../../../../context/Context";
import { User } from "lucide-react";


export default function Dashboard() {

    const size = 32
    const { CPadmin, CPli } = useContext(ContextDashboard)


    return (
        <>
            <main id="main h-100">
                <div className="dashboardevento_Lados">

                    <div className="dashboardevento_LadoEsquerdo">


                        <ul id="menu_dashboard">

                            <div>
                                <NavLink to={"/organizador"}>
                                    Logo
                                </NavLink>
                            </div>

                            <div id="menu_dashboard_last">
                                <li>
                                    <NavLink to={"/organizador/evento"}>
                                        Evento
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/organizador/estatistica"}>
                                        Estatística
                                    </NavLink>
                                </li>

                                <NavLink to={"/organizador/perfil"}>
                                    <div className="button_span_user">


                                        <div>
                                            <User
                                            >
                                            </User>
                                        </div>


                                        <span>Kaike Bartolomeu</span>

                                    </div>
                                </NavLink>

                                {/* <NavLink to={
                                    CPadmin ?
                                        "/administrador/eventos" :
                                        "/organizador/evento"}>
                                    <li
                                        title="Evento"
                                    >
                                        <span>

                                            <MdEventAvailable
                                                size={size}
                                                className="home_icones"
                                            />
                                        </span>
                                    </li>

                                </NavLink>



                                <NavLink to={
                                    CPadmin ?
                                        "/administrador/estatistica" :
                                        "/organizador/estatistica"
                                }>

                                    <li
                                        title="Estatistica"
                                    >

                                        <img src={Estatistica} alt="" />
                                    </li>

                                </NavLink> */}

                            </div>



                            {/* <NavLink to={
     CPadmin ?
         "/administrador/home" :
         "/organizador/home"
 }>
     <li
         title="Home"
     >
         <span>

             <MdHome
                 size={size}
                 className="home_icones"
             />
         </span>
     </li>

 </NavLink>

 <NavLink to={
     CPadmin ?
         "/administrador/eventos" :
         "/organizador/evento"}>
     <li
         title="Evento"
     >
         <span>

             <MdEventAvailable
                 size={size}
                 className="home_icones"
             />
         </span>
     </li>

 </NavLink>


 <NavLink to={"/organizador/bilhete"}>
     <li
         style={{ display: `${CPli}` }}
         title="Bilhete"
     >
         <span>

             <IoTicketOutline
                 size={size}
                 className="home_icones"

             />
         </span>
     </li>
 </NavLink>


 <NavLink

     to={

         CPadmin ?
             "/administrador/admin" :
             "/organizador/orador"}>

     <li

         title="Orador"
     >
         <span> <img src={Orador} alt="" />  </span>
     </li>
 </NavLink>



 <NavLink
     to={
         CPadmin ?
             "/administrador/usuarios" :
             "/organizador/palestrante"
     }>
     <li
         title="Palestrante"
     >
         <span>
             <img src={Palestrante} alt="" />

         </span>

     </li>

 </NavLink>

 <NavLink to={
     CPadmin ?
         "/administrador/estatistica" :
         "/organizador/estatistica"
 }>

     <li
         title="Estatistica"
     >

         <img src={Estatistica} alt="" />
     </li>

 </NavLink>

 <li><div className="button_span_user">

     <button><User
         color="black">
     </User>
     </button>

     <span>nome do usuário</span>

 </div></li> */}


                        </ul>


                    </div>

                    <div className="dashboardevento_LadoDireito">

                        <Outlet>




                        </Outlet>


                    </div>


                </div>
            </main>

        </>
    )

}