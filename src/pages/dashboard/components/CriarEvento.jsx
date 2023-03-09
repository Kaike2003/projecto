import React from "react"
import "./CriarEvento.css"
import { Mail, User, Lock, Map, AlignCenter } from "lucide-react"

export default function CriarEvento() {

    return (
        <>

            <form action="#" method="get">

                <div className="container criar_evento">
                    

                    <div className="criar_evento_div container">
                        <div>
                            <i><AlignCenter></AlignCenter></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do evento"
                            />
                        </div>

                        <div>
                            <i><Map></Map></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Endereço do evento"
                            />
                        </div>

                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <select 
                            className="select_criarEvento"
                            name="" id="" >
                                <option value="">Categoria</option>
                                <option value="">Palestra</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>


                            </select>
                        </div>

                    </div>

                    <div className="criar_evento_div">

                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>


                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>


                    </div>




                    <div className="criar_evento_div_textarea">

                        <div>
                            <i><Lock style={{ visibility: "hidden" }}></Lock></i>
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


                    <div className="criar_evento_div">


                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                    </div>

                </div>

                <div className="container criar_evento_botao_salvar">
                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>
                </div>

            </form>

        </>
    )

}