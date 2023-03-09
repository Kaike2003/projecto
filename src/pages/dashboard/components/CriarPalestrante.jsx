import React from "react"
import "./CriarPalestrante.css"
import { Mail, User, DollarSign, Map, Facebook, Plus, Instagram } from "lucide-react"

export default function CriarPalestrante() {

    return (
        <>

            <form action="#" method="get">

                <div className="container criar_palestrante">

                    <div className="criar_palestrante_div container">
                        <div>
                            <i><User></User></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do Palestrante"
                            />
                        </div>


                        <div>
                            <i><Facebook></Facebook></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Facebook"
                            />
                        </div>

                        <div>
                            <i><Instagram></Instagram></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Instagram"
                            />
                        </div>



                    </div>

                    <div className="criar_palestrante_div">


                        <div class="elementor-field-type-upload-palestrante elementor-field-group elementor-column elementor-field-group-field_53c80dc elementor-col-50 elementor-field-required">
                            <label for="form-field-field_53c80dc" class="elementor-field-label">
                                Clica aqui para selecionar a foto
                            </label>
                            <input type="file" name="form_fields[field_53c80dc]" id="form-field-field_53c80dc" class="elementor-field elementor-size-lg  elementor-upload-field" required="required" aria-required="true" />
                        </div>




                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="datetime-local"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>


                    </div>


                    <div className="criar_palestrante_div">


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

                <div className="container criar_palestrante_botao_salvar">
                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>
                </div>

            </form>

        </>
    )

}