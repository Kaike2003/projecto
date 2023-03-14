import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"
export default function EditarPalestrante() {

    return (
        <>

        <PrimeiroHeader nome={"Editar palestrante"}></PrimeiroHeader>

            <form action="#" method="get">

                <div className="container criar_evento_CriarEvento">


                    <div className="
                                criar_evento_div_CriarEvento container
                                ">

                        <div>
                            <label htmlFor="">Evento<span
                                className="obrigatorio"
                            >*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar evento</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Palestrante<span
                                className="obrigatorio"
                                >*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar palestrante</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>



                        <div>
                            <label htmlFor="">Nome<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do palestrante"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Facebook<span className="nao_Obrigatorio">*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Facebook"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Youtube<span
                                className="nao_Obrigatorio"
                            >*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Youtube"
                            />
                        </div>


                        <div>
                            <label htmlFor="">Instagram<span
                                className="nao_Obrigatorio"
                            >*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Instagram"
                            />
                        </div>





                    </div>

                    <div className="criar_evento_div_textarea container">

                        <div style={{ visibility: "hidden" }}>
                            <label htmlFor="">Descrição <span>*</span></label>

                            <textarea
                                name="" id=""
                                cols="31" rows="3"
                                placeholder="Descrição do evento"
                            ></textarea>
                        </div>


                    </div>

                    <div className="container evento_botao_salvar">
                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>
                    </div>

                </div>

            
            </form>

        </>
    )

}