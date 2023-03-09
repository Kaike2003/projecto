import React from "react"
import "./EditarSenha.css"
import { Mail, User, Lock, Map, Phone } from "lucide-react"

export default function EditarSenha() {

    return (
        <>

            <form action="#" method="get">

                <div className="container editar_senha">

                    <div className="editar_senha_div">

                        <div>
                            <i><Lock></Lock></i>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Senha antiga"
                            />
                        </div>

                        <div>
                            <i><Lock></Lock></i>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Senha nova"
                            />
                        </div>
                    </div>


                </div>

                <div className="container editar_senha_botao_salvar">
                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>
                </div>

            </form>

        </>
    )

}