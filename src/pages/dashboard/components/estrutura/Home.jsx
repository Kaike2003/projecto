import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"
import EventoCardPago_Gratis from "../../../card_evento/EventoCardPago_Gratis";
import CardEventoPago from "../../../card_evento/components/EventoCardPago_Gratis";

export default function Home({ titulo }) {

    return (
        <>
            <section className="section_home">

                <div className="container dashboardHome">
                    <div className="dashboardHome_button_input">
                        <a herf={"/dashboard/evento/criarEvento"}>
                            <button>Criar Evento</button>
                        </a>
                        <input type="text" name="" id="" placeholder="Pesquisar evento" />
                    </div>
                </div>


              <div className="section_grid container">
                   
                   <div>
                 
                   </div>


              </div>
                {/* 
                <div className="titulo_evento_home container">{titulo}</div>

                <div className="evento_home container">
                    <span>Teu próximo evento</span>
                    <div>
                        Você ainda não tem nenhum evento. Vamos criar um!
                        <NavLink to={"/organizador/evento/criar"}>
                            <button>Criar evento</button>
                        </NavLink>
                    </div>
                </div> */}
            </section>

        </>
    )

}