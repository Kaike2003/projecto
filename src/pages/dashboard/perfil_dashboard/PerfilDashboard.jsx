import React, { useState } from "react"
import "./PerfilDashboard.css"
import img from "../../../assets/img/kaike3.png"
import Editar from "./components/Editar"
import Historico from "./components/Historico"

export default function PerfilDashboard() {

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

    if (valor == 1) {
      return <Editar></Editar>
    } else if (valor == 3) {
      return <Historico></Historico>
    }

  }

  return (
    <>

      <div className="dashboard_perfilDashboard_Titulo_Criar container">
        <span>Perfil</span>
      </div>
      <div className="container detalhe_perfilDashboard_informacao">


        <div className="detalhe_perfilDashboard">
          <div className="detalhe_perfilDashboard_foto_info">
            <div className="foto">
              <img src={img} alt="" />
            </div>
            <div className="nome">
              <h2>Kaike Bartolomeu</h2>
            </div>
          </div>

          <div className="detalhe_perfilDashboard_detalhes container">
            <div>
              <span className="espacomento">email</span>
              <span>Kaike@gmail.com</span>
            </div>

            <div>
              <span className="espacomento">Data Nascimento</span>
              <span>Kaike@gmail.com</span>
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
            <li><button

              onClick={editarOnclick}>Editar</button></li>
            <li><button

              onClick={eventoOnclick}
            >Eventos</button></li>
            <li><button

              onClick={historicoOnclick}
            >Historicos</button></li>
          </ul>
          <div className="container conteudo_InformacaoPerfilDashboard">
            {

              escolha(alterar)

            }
            {/* <Editar></Editar> */}
            {/* <Historico></Historico> */}
          </div>
        </div>


      </div>




    </>
  )

}