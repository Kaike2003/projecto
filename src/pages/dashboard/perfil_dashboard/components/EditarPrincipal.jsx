import React from "react"
import "./EditarPrincipal.css"
import { NavLink, Outlet } from "react-router-dom"

export default function EditarPrincipal() {



  return (
    <>

      <div className="container detalhe_EditarPrincipalDashboard_informacao mt-3">
        <div className="informacaoEditarPrincipal">
          <ul id="menuInformacaoEditarPrincipalDashboard" className="container">

            <NavLink to={"/dashboard/evento/perfil/editar/InformacaoBasica"}>
              <li>
                <button
                >Informações básicas
                </button></li>
            </NavLink>


            <NavLink to={"/dashboard/evento/perfil/editar/senha"}>
              <li>
                <button

                >Senha</button>
              </li>
            </NavLink>

            <NavLink to={"/dashboard/evento/perfil/editar/foto"}>
              <li><button
              >Atualizar foto</button></li>
            </NavLink>

          </ul>
          <div className="container conteudo_InformacaoEditarPrincipalDashboard">
            {

              <Outlet></Outlet>

            }

          </div>
        </div>


      </div>




    </>
  )

}