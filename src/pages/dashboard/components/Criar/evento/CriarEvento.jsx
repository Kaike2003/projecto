import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"
import "./CriarEvento.css"

export default function CriarEvento() {

    return (
        <>

           <PrimeiroHeader nome={"Evento"}></PrimeiroHeader>

            <form action="#" method="get" >

                <div className="container criar_evento_CriarEvento">


                    <div className="
                    criar_evento_div_CriarEvento container
                    ">
                        <div>
                            <label htmlFor="">Nome<span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do evento"
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
                                placeholder="Endereço do evento"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Categoria<span
                                className="obrigatorio"
                            >*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Categoria</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>

                    </div>

                    <div className="criar_evento_div_CriarEvento container">

                        <div>
                            <label htmlFor="">Data de inicio<span
                                className="obrigatorio"
                            >*</span></label>


                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>


                        <div>
                            <label htmlFor="">Data de termino<span
                                className="obrigatorio"
                            >*</span></label>

                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>

                        <div style={{ display: "none" }}>
                            <label
                                style={{ visibility: "hidden" }}
                                htmlFor="">Categoria</label>

                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>


                    </div>




                    <div className="criar_evento_div_textarea container">

                        <div>
                            <label htmlFor="">Descrição<span
                                className="obrigatorio"
                            >*</span></label>

                            <textarea
                                name="" id=""
                                cols="31" rows="3"
                                placeholder="Descrição do evento"
                            ></textarea>
                        </div>


                    </div>



                    <div className="container evento_botao_salvar">
                        <button className="btn btn-primary">Criar </button>

                        <button className="btn btn-primary">Criar </button>

                        <button className="btn btn-primary">Criar </button>
                    </div>

                </div>



            </form>

        </>
    )

}