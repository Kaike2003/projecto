import React from "react"
import "./Editar.css"
import { Mail, User, Lock, Map, Phone } from "lucide-react"

export default function Editar() {

    return (
        <>

            <form action="#" method="get">

                <div className="container editar_perfil">

                    <div className="editar_perfil_div">
                        <div>
                            <i><User></User></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Digite seu nome"
                            />
                        </div>

                        <div>
                            <i><Map></Map></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Digite seu endereço"
                            />
                        </div>

                    </div>

                    <div className="editar_perfil_div">

                        <div>
                            <i><Mail></Mail></i>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                    </div>




                    <div className="editar_perfil_div">
                        <div>

                            <i><Phone></Phone></i>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Telefone"
                            />

                        </div>

                        <div>
                            <i><Lock></Lock></i>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Digite seu nova"
                            />
                        </div>
                    </div>


                    <div className="editar_perfil_div">

                        <div>
                            <i><Lock></Lock></i>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Digite seu nova"
                            />
                        </div>
                    </div>

                </div>

                <div className="container editar_perfil_botao_salvar">
                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>
                </div>

            </form>

        </>
    )

}