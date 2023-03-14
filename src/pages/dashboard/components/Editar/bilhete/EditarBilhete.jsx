
import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"


export default function EditarBilhete() {

    return (
        <>
            <PrimeiroHeader nome={"Editar bilhete"} />

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
                            <label htmlFor="">Bilhete<span
                                className="obrigatorio"
                                >*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar bilhete</option>
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
                                placeholder="Nome do bilhete"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Quantidade<span
                                className="obrigatorio"
                                >*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Quantidade de bilhetes"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Preço<span
                                className="obrigatorio"
                                >*</span></label>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Preço do bilhete"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Tipo de bilhete<span
                                className="obrigatorio"
                                >*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar tipo de bilhete</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>



              

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

                   

                    </div>




                    <div className="criar_evento_div_textarea_bilhete container"
                    style={{visibility: "hidden"}}
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
                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>
                    </div>

                </div>


            </form>

        </>
    )

}