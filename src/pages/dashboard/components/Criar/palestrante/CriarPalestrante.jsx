import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"
export default function CriarPalestrante() {

    return (
        <>

          <PrimeiroHeader nome={"Palestrante"}></PrimeiroHeader>

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
                                placeholder="Nome do palestrante"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Facebook <span>*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Facebook"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Youtube <span>*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Youtube"
                            />
                        </div>


                        <div>
                            <label htmlFor="">Instagram <span>*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Instagram"
                            />
                        </div>





                    </div>

                    <div className="criar_evento_div_textarea_palestrante container">

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
                        <button className="btn btn-primary">Criar </button>

                        <button className="btn btn-primary">Criar </button>

                        <button className="btn btn-primary">Criar </button>
                    </div>

                </div>


            </form>

        </>
    )

}