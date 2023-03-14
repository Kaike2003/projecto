import React, { useState } from "react"
import { Outlet, NavLink } from "react-router-dom"
import "./components/perfil.css"
import img from "../../assets/img/palestrante.jpg"

export default function Perfil() {

 




  return (
    <>

<h2 className="primeiroHeader">Perfil</h2>
      <div className="container detalhe_perfilDashboard_informacao">
        <div className="detalhe_perfilDashboard">
          <div className="detalhe_perfilDashboard_foto_info">
            <div className="foto">
              <img src={img} alt="" />
            </div>
            <div className="nome">
              <h4>Kaike Bartolomeu</h4>
            </div>
          </div>

          <div className="detalhe_perfilDashboard_detalhes container">
            <div>
              <span className="espacomento">email</span>
              <span>Kaike@gmail.com</span>
            </div>

            <div>
              <span className="espacomento">Data Nascimento</span>
              <span>2003</span>
            </div>

            <div>
              <span className="espacomento">Endereço</span>
              <span>Luanda</span>
            </div>

            <div>
              <span className="espacomento">Telefone</span>
              <span>9431612154</span>
            </div>
            <div>
              <span className="espacomento">Eventos</span>
              <span>20</span>
            </div>
            <div>
              <span className="espacomento">Bilhetes</span>
              <span>30</span></div>
          </div>
        </div>
        <div className="informacaoPerfilDashboard">
          <ul id="menuInformacaoPerfilDashboard" className="container">

            <NavLink to={"/perfil/editar"}>
              <li>
                <button
                >Editar</button>
              </li>
            </NavLink>

            <NavLink to={"/login"}>
              <li>
                <button
                >Sair</button>
              </li>
            </NavLink>

          </ul>
          <div className="container conteudo_InformacaoPerfilDashboard">
            {

              <Outlet></Outlet>

            }
          </div>
        </div>


      </div >



      

    </>
  )

}