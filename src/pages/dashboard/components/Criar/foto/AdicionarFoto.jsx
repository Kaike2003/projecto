import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"
import "./AdicionarFoto.css"

export default function AdicionarFoto({ titulo, visibilidade, nome, selecionar }) {


    return (
        <>

            <PrimeiroHeader nome={titulo}></PrimeiroHeader>

            <form action="#" method="get" >

                <div className="container criar_evento_CriarEvento">


                    <div className="
                    criar_evento_div_CriarEvento container
                    ">

                        <div>
                            <label htmlFor="">Evento<span
                                className="obrigatorio"
                            >*</span></label>


                            <select
                                className="select_criarEvento_AdicionarFoto"
                                name="" id="" >
                                <option value="">Selecionar evento</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>

                        <div
                            style={{ display: `${visibilidade}` }}

                        >
                            <label htmlFor="">{nome}<span
                                className="obrigatorio"
                            >*</span></label>


                            <select
                                className="select_criarEvento_AdicionarFoto"
                                name="" id="" >
                                <option value="">Selecionar {selecionar}</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>


                        <div class="foto-upload">
                            <label for="form-field-field_53c80dc" class="elementor-field-label">            Clique para selecionar uma imagem
                                <span
                                    className="nao_Obrigatorio">*</span>

                            </label>
                            <input type="file" name="" id="input_file" required="required" aria-required="true" />
                        </div>

                        <div style={{ visibility: "hidden" }}>
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

                        <div style={{ visibility: "hidden" }}>
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



                    </div>

                    <div className="criar_evento_div_CriarEvento container" style={{ visibility: "hidden" }}>

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




                    <div className="criar_evento_div_adicionarfoto container" style={{ visibility: "hidden" }}>

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