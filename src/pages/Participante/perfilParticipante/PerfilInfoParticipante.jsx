import React, { useState, useEffect } from "react";
import "./Perfil.css"
import axios from "axios";
import { format } from "date-fns";
import InatividadePagina from "../../../middlewares/TerminarSessao";



export default function PerfilInfoParticipante() {



    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);
        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }
        fetchData();
    }, []);

    console.log(nomeUtilizador)

    const urlImageParticipante = "http://localhost:3456/public/upload/usuarios/participante/"


    InatividadePagina()

    return (
        <>

            <div className="criar mt-5">


                {

                    data.map(item => {

                        if (item.email === nomeUtilizador) {
                            return (
                                <>
                                    <div className="exibir_imagem exibir_imagem_participante">
                                        <img src={urlImageParticipante + item.foto} alt="" />
                                    </div>

                                    <div key={Math.random().toString(36).substring(2)}>

                                        <div className="criar_estrutura_InformacaoEvento container">
                                            <div className="criar_row">

                                                <span>Nome</span>
                                                <div> {item.nome || "ADMIN"} </div>


                                            </div>

                                            <div className="criar_row">
                                                <span>Telefone</span>
                                                <div> {item.telefone || "Sem número"} </div>

                                            </div>


                                            <div className="criar_row">


                                                <span>Endereço</span>
                                                <div> {item.localizacao || "Sem endereço"} </div>


                                            </div>

                                            <div className="criar_row">


                                                <span>Email</span>
                                                <div> {item.email} </div>


                                            </div>

                                            <div className="criar_row">
                                                <span>Data de nascimento</span>
                                                <div> {format(new Date(item.dataNascimento), "dd-MM-yyyy")} </div>

                                            </div>

                                            <div className="criar_row">
                                                <span>Verificado</span>
                                                <div style={{ color: "green" }}> {
                                                    item.verificado === true ?
                                                        "Conta verificada" : "Conta não verificada"} </div>

                                            </div>

                                        </div>



                                    </div>

                                </>
                            )
                        }


                    })

                }
            </div >


        </>
    )

}
