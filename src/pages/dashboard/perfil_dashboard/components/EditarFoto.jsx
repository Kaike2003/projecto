import React from "react"
import "./EditarFoto.css"
import { Lock  } from "lucide-react"

export default function EditarFoto() {

    return (
        <>

            <form action="#" method="get">

                <div className="container editar_foto">

                    <div className="editar_foto_div">

                    <div class="foto-upload">
                                <label for="form-field-field_53c80dc" class="elementor-field-label">
                                    Clique selecionar sua imagem
                                </label>
                                <input type="file" name="form_fields[field_53c80dc]" id="form-field-field_53c80dc" class="elementor-field elementor-size-lg  elementor-upload-field" required="required" aria-required="true" />
                            </div>
                                
                    </div>


                </div>

                <div className="container editar_foto_botao_salvar">
                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>

                    <button className="btn btn-primary">Salvar </button>
                </div>

            </form>

        </>
    )

}