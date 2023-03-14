import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"

export default function CriarOrador() {
    return (
        <>
          <PrimeiroHeader nome={"Orador"}></PrimeiroHeader>

            <form action="#" method="get">

                <div className="container criar_evento_CriarEvento">



                    <div className="
                        criar_evento_div_CriarEvento container
                        ">

                        <div>
                            <label htmlFor="">Evento <span
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
                            <label htmlFor="">Nome <span
                                className="obrigatorio"
                            >*</span></label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do orador"
                            />
                        </div>

                        <div style={{ visibility: "hidden" }}>
                            <label htmlFor="">Endereço <span>*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Endereço do evento"
                            />
                        </div>

                        <div style={{ visibility: "hidden" }}>
                            <label htmlFor="">Categoria <span>*</span></label>


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

                    <div className="criar_evento_div_CriarEvento container"
                        style={{ visibility: "hidden" }}
                    >

                        <div>
                            <label htmlFor="">Data de inicio <span>*</span></label>


                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>


                        <div>
                            <label htmlFor="">Data de termino <span>*</span></label>

                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>

                        <div >
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




                    <div className="criar_evento_div_textarea_orador container"
                        style={{ visibility: "hidden" }}
                    >

                        <div>
                            <label htmlFor="">Descrição <span>*</span></label>

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