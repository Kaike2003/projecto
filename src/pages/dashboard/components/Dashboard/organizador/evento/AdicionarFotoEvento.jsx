import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import PrevisualizacaoImagem from "../../../estrutura/PrevisualizacaoImagem";
import { useRef } from "react";
import Swal from 'sweetalert2';
import InatividadePagina from "../../../../../../middlewares/TerminarSessao";
const FORMATOS_SUPORTADOS = ["image/jpg", "image/jpeg", "image/png"]



export default function AdicionarFotoEvento() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const { idUtilizador, idEvento } = useParams()

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
    //     foto: Yup.mixed().nullable().test(
    //         "FILE_SIZE",
    //         "Uploaded file is too big.",
    //         // (value) => !value || (value && value.size <= 4000)
    //         (value) => console.log("Tamnho", value)

    //     ).test(
    //         "FILE_FORMART",
    //         "Upload file has unsupported format",
    //         (value) => console.log("Formato", value)

    //         // (value) => !value || (value && FORMATOS_SUPORTADOS.includes(value?.type))
    //     )
    // })


    return (
        <>



            <div>

                <Formik
                    initialValues={{
                        foto: ""
                    }}
                    // validationSchema={FotoSchema}
                    enableReinitialize
                    onSubmit={async (values) => {


                        if (FORMATOS_SUPORTADOS.includes(values.file.type)) {

                            const form = new FormData();
                            form.append('foto', values.file);

                            console.log(values.file.name)

                            axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idUtilizador}/foto/${idEvento}`,
                                form,
                                {
                                    foto: values.file.name
                                }).then(res => {
                                    console.log(res)

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Foto adicionada',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                }).catch((error) => {
                                    console.log(error)
                                })



                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Tipo de ficheiro não suportado',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }





                        try {

                            // axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idUtilizador}/foto/${idEvento}`, formData).then((sucesso) => {
                            //     console.log(sucesso)
                            //     swal("Foto envidada com sucesso", `A foto do seu evento já foi envida.`, "success")

                            // }).catch((error) => {
                            //     console.log(error)
                            //     swal("Erro ao enviar a imagem", `A foto do seu evento já foi envida.`, "warning")
                            // })

                        } catch (error) {
                            console.log(error)
                        }


                    }}
                >
                    {({ isSubmitting, errors, touched, values, setFieldValue, handleBlur, handleChange }) => (

                        <Form>

                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Adicione uma foto ao seu evento</span>
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
                                                        id="foto"
                                                        name="foto"
                                                        hidden
                                                        type="file"
                                                        value={values.foto}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        onChange={(e) => {
                                                            setFieldValue("file", e.target.files[0])
                                                            console.log((e.target.files[0]))
                                                        }}

                                                    />

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
