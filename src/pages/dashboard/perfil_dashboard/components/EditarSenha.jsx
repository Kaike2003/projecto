import React from "react"
import "./perfil.css"

export default function EditarSenha() {

    return (
        <>

            <form action="#" method="get">

                <div className="container perfil_organizador">

                    <div className="editar_perfil_organizador container">

                        <div>
                            <label htmlFor="">Senha<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Senha antiga"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Senha<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Senha nova"
                            />
                        </div>
                    </div>

                    <div className="container editar_senha_botao_salvar">
                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>
                    </div>

                </div>


            </form>

        </>
    )

}