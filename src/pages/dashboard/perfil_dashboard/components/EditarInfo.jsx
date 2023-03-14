import React from "react"
import "./perfil.css"

export default function EditarInfo() {

    return (
        <>

            <form action="#" method="get">

                <div className="container perfil_organizador">



                    <div className="editar_perfil_organizador container">


                        <div>
                            <label htmlFor="">Nome<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do bilhete"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Endereço<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do bilhete"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Email<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>


                        <div>
                            <label htmlFor="">Data de nascimento<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Telefone<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Telefone"
                            />

                        </div>

                    </div>

                    <div className="container editar_perfil_botao_salvar">
                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>
                    </div>



                </div>


            </form>

        </>
    )

}