import React from "react"
import "./CriarOrador.css"
import { Mail, User, DollarSign, Map, Facebook, Plus, Instagram } from "lucide-react"

export default function CriarOrador() {

    return (
        <>

            <form action="#" method="get">

                <div className="container criar_orador">

                    <div className="criar_orador_div container">
                        <div>
                            <i><User></User></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do Orador"
                            />
                        </div>


                        <div>
                            <i><Facebook 
                                style={{ visibility: "hidden" }}
                            
                            ></Facebook></i>
                            <input
                                style={{ visibility: "hidden" }}

                                type="text"
                                name=""
                                id=""
                                placeholder="Facebook"
                            />
                        </div>

                        <div>
                            <i><Instagram
                                style={{ visibility: "hidden" }}
                            
                            ></Instagram></i>
                            <input
                                style={{ visibility: "hidden" }}

                                type="text"
                                name=""
                                id=""
                                placeholder="Instagram"
                            />
                        </div>



                    </div>

                    <div className="criar_orador_div">


                        <div
                                style={{ visibility: "hidden" }}
                        
                        class="elementor-field-type-upload-palestrante elementor-field-group elementor-column elementor-field-group-field_53c80dc elementor-col-50 elementor-field-required">
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


                    <div className="criar_orador_div">


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

                <div className="container criar_orador_botao_salvar">
                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>
                </div>

            </form>

        </>
    )

}