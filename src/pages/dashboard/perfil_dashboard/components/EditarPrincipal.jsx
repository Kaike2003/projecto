import React, { useState } from "react"
import "./EditarPrincipal.css"
import img from "../../../../assets/img/kaike3.png"
import EditarInfo from "./EditarInfo"
import EditarSenha from "./EditarSenha"
import EditarFoto from "./EditarFoto"
import { NavLink, Outlet } from "react-router-dom"

export default function EditarPrincipal() {

  const [alterar, setAlterar] = useState(() => {
    return 1
  })


  const editarOnclick = (e) => {
    return setAlterar((old) => {
      return old = 1
    })
  }
  const historicoOnclick = (e) => {
    return setAlterar((old) => {
      return old = 3
    })
  }
  const eventoOnclick = (e) => {
    return setAlterar((old) => {
      return old = 2
    })
  }



  function escolha(valor) {

    if (valor === 1) {
      return <EditarInfo></EditarInfo>
    } else if (valor === 2) {
      return <EditarSenha></EditarSenha>
    }
    else if (valor == 3) {
      return <EditarFoto></EditarFoto>
    }

  }

  return (
    <>

      <div className="container detalhe_EditarPrincipalDashboard_informacao mt-3">
        <div className="informacaoEditarPrincipal">
          <ul id="menuInformacaoEditarPrincipalDashboard" className="container">

            <NavLink to={"/dashboard/perfil/editar/InformacaoBasica"}>
              <li>
                <button
                  onClick={editarOnclick}>Informações básicas
                </button></li>
            </NavLink>


            <NavLink to={"/dashboard/perfil/editar/senha"}>
              <li>
                <button
                  onClick={eventoOnclick}
                >Senha</button>
              </li>
            </NavLink>

            <NavLink to={"/dashboard/perfil/editar/foto"}>
              <li><button
                onClick={historicoOnclick}
              >Atualizar foto</button></li>
            </NavLink>

          </ul>
          <div className="container conteudo_InformacaoEditarPrincipalDashboard">
            {

              <Outlet>{escolha(alterar)}</Outlet>

            }
            {/* <Editar></Editar> */}
            {/* <Historico></Historico> */}
          </div>
        </div>


      </div>




    </>
  )

}