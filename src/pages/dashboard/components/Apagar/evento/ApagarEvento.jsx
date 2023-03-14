import React from "react"
import PrimeiroHeader from "../../primeiroHeader/PrimeiroHeader"


export default function ApagarEvento() {

    return (
        <>
            <PrimeiroHeader nome={"Apagar evento<"}></PrimeiroHeader>

            <form action="#" method="get">

                <div className="container criar_evento_CriarEvento">


                    <div className="
                            criar_evento_div_CriarEvento container
                            ">

                        <div>
                            <label htmlFor="">Evento <span>*</span></label>


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

                        <div style={{ visibility: "hidden" }}>
                            <label htmlFor="">Orador <span>*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar orador</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
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

                        <div>
                            <label htmlFor="">Categoria <span>*</span></label>


                            <select
                                className="select_criarEvento_CriarEvento"
                                name="" id="" >
                                <option value="">Selecionar categoria</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>


                    </div>




                    <div className="criar_evento_div_textarea container"
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

                        {/* <div>
        
                                    <div class="elementor-field-type-upload elementor-field-group elementor-column elementor-field-group-field_53c80dc elementor-col-50 elementor-field-required">
                                        <label for="form-field-field_53c80dc" class="elementor-field-label">
                                            Clique selecionar sua imagem
                                        </label>
                                        <input type="file" name="form_fields[field_53c80dc]" id="form-field-field_53c80dc" class="elementor-field elementor-size-lg  elementor-upload-field" required="required" aria-required="true" />
                                    </div>
        
                                </div> */}



                        {/* <div>
                                    <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                                    <input
                                        style={{ visibility: "hidden" }}
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="Digite seu email"
                                    />
                                </div> */}
                    </div>

                    <div className="container evento_botao_excluir">
                        <button className="btn btn-primary">Excluir </button>

                        <button className="btn btn-primary">Excluir </button>

                        <button className="btn btn-primary">Excluir </button>
                    </div>

                </div>



            </form>

        </>
    )

}