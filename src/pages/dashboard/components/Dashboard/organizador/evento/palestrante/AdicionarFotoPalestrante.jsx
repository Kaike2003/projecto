import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import PrevisualizacaoImagem from "../../../../estrutura/PrevisualizacaoImagem";
import { useRef } from "react";
import Swal from 'sweetalert2';
import InatividadePagina from "../../../../../../../middlewares/TerminarSessao";

const FORMATOS_SUPORTADOS = ["image/jpg", "image/jpeg", "image/png"]




export default function AdicionarFotoPalestrante() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const { idPalestrante, idEvento } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);

    const fileRef = useRef()




    // const FotoSchema = Yup.object().shape({
    //     foto: Yup.string("A foto de ser uma string")
    //         .min(5, "O nome do evento. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do evento. Precisa ter mais de 50 caracteres")
    //         .required("Nome do evento é obrigatorio.")
    // })

    InatividadePagina()

    return (
        <>



            <div>


                <Formik
                    initialValues={{
                        foto: ""
                    }}
                    enableReinitialize
                    onSubmit={async (values) => {



                        if (FORMATOS_SUPORTADOS.includes(values.file.type)) {

                            const form = new FormData();
                            form.append('foto', values.file);


                            axios.put(`http://localhost:3456/organizador//evento/detalhe/editar/${idEvento}/palestrante/${idPalestrante}/foto`,
                                form,
                                {
                                    foto: values.file.name
                                }).then((sucesso) => {
                                    // console.log(sucesso)

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Foto adicionada',
                                        showConfirmButton: false,
                                        timer: 2500
                                    })
                                }).catch((error) => {
                                    console.log(error)
                                })


                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Tipo de ficheiro não suportado',
                                showConfirmButton: false,
                                timer: 3500
                            })
                        }





                    }}
                >
                    {({ isSubmitting, errors, touched, values, setFieldValue }) => (

                        <Form>

                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Adicione uma foto ao palestrante</span>
                                    </div>
                                    <button
                                        className="PnomeBotaoOrganizador"
                                        type="submit">Salvar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">


                                                <div className="criar_row">
                                                    <span>Imagem</span>
                                                    {errors.foto && touched.foto ? (
                                                        <div className="error_Yup">{errors.foto}</div>
                                                    ) : null}
                                                    {values.file && <PrevisualizacaoImagem
                                                        file={values.file} />}
                                                    <input
                                                        ref={fileRef}
                                                        name="foto"
                                                        hidden
                                                        type="file"
                                                        value={values.foto}
                                                        onChange={(e) => {
                                                            setFieldValue("file", e.target.files[0])
                                                            // console.log((e.target.files[0]))
                                                        }}

                                                    />
                                                    {/* <button

                                            >Upload</button> */}
                                                    <label
                                                        onClick={() => {
                                                            fileRef.current.click()
                                                        }}
                                                        htmlFor="file" className="file_image">
                                                        Adicionar foto
                                                    </label>
                                                </div>


                                            </div>




                                        </div>



                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div >


        </>

    )

}
