import React from "react"
import "./perfil.css"

export default function EditarFoto() {

    return (
        <>

            <form action="#" method="get">

                <div className="container perfil_organizador">

                    <div className="editar_perfil_organizador container">

                        <div class="foto-upload">
                            <label for="form-field-field_53c80dc" class="elementor-field-label">
                                Clique para selecionar uma imagem
                            </label>
                            <input type="file" name="" class="input_file" required="required" aria-required="true" />
                        </div>

                    </div>


                    <div className="container editar_foto_botao_salvar">
                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>

                        <button className="btn btn-primary">Salvar </button>
                    </div>

                </div>



            </form>

        </>
    )

}