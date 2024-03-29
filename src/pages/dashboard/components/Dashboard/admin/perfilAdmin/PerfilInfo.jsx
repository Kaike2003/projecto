import React, { useState, useEffect } from "react";
import "./Perfil.css"
import Imagem from "../../../../../../assets/img/palestrante.jpg"
import axios from "axios";
import { format } from "date-fns";
import InatividadePagina from "../../../../../../middlewares/TerminarSessao";


export default function PerfilInfo() {

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

    // console.log(nomeUtilizador)

    

    return (
        <>

            <div className="criar mt-5">
                {/* <div className="exibir_imagem">
                    <img src={Imagem} alt="" />
                </div> */}
                {

                    data.map(item => {

                        if (item.email === nomeUtilizador) {
                            return (
                                <>

                                    <div key={Math.random().toString(36).substring(2)}>

                                        <div className="criar_estrutura_InformacaoEvento container">
                                            <div>
                                                <div className="criar_row">

                                                    <span>Nome</span>
                                                    <div> {item.nome || "ADMIN"} </div>


                                                </div>
                                            </div>

                                            <div>
                                                <div className="criar_row">
                                                    <span>Telefone</span>
                                                    <div> {item.telefone || "Sem número"} </div>

                                                </div>

                                            </div>

                                            <div className="criar_row">


                                                <span>Endereço</span>
                                                <div> {item.localizacao || "Sem endereço"} </div>


                                            </div>


                                            <div className="criar_row">


                                                <span>Email</span>
                                                <div> {item.email} </div>


                                            </div>

                                            <div>
                                                <div className="criar_row">
                                                    <span>Data de nascimento</span>
                                                    <div> {"Sem data de nascimento"} </div>

                                                </div>

                                            </div>





                                        </div>



                                    </div>

                                </>
                            )
                        }


                    })

                }
            </div>


        </>
    )

}
