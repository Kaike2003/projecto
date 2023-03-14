import React from "react";
import { Link } from "react-router-dom";
import "./DashboardHomeHeader .css"

export default function DashboardHomeHeader() {

    return (
        <>
            <div className="container dashboardHome">
                <div className="dashboardHome_button_input">
                    <Link to={"/dashboard/evento/criarEvento"}>
                    <button>Criar Evento</button>
                    </Link>
                    <input type="text" name="" id="" placeholder="Pesquisar evento" />
                    <select name="" id="" className="conteudo_categoria_dashboardHomeHeader">
                        <option value="">Categoria</option>
                        <option value="">Palestra</option>
                        <option value="">Shows</option>
                        <option value="">Teatro</option>
                        <option value="">Concerto</option>
                    </select>
                    <select name="" id="" className="conteudo_categoria_dashboardHomeHeader">
                        <option value="">Mês</option>
                        <option value="">Março</option>
                        <option value="">Abril</option>
                        <option value="">Junho</option>
                        <option value="">Julho</option>
                    </select>
                </div>
            </div>


        </>
    )

}