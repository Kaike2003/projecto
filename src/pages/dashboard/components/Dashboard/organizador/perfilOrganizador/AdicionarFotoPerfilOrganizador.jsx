import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import PrevisualizacaoImagem from "../../../estrutura/PrevisualizacaoImagem";
import { useRef } from "react";
import Swal from "sweetalert2"
import InatividadePagina from "../../../../../../middlewares/TerminarSessao";


export default function AdicionarFotoPerfilOrganizador() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = ([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);
        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }

        fetchData();
    }, []);

    const fileRef = useRef()



    // const EstruturaSchema = Yup.object().shape({
    //     nomeEvento: Yup.string()
    //         .min(5, "O nome do evento. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do evento. Precisa ter mais de 50 caracteres")
    //     // .required("Nome do evento é obrigatorio.")
    // })


    return (
        <>



            <div>


                <Formik
                    initialValues={{
                        foto: ""
                    }}
                    enableReinitialize
                    onSubmit={async (values) => {
                        const form = new FormData();
                        form.append('foto', values.file);


                        data.map(item => {
                            if (item.email === nomeUtilizador) {
                                return axios.put(`http://localhost:3456/organizador/perfil/${item.id}/adicionarFotoOrganizador`,
                                    form,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                                        }
                                    }
                                    ,
                                    {
                                        foto: values.file.name
                                    }).then((sucesso) => {
                                        // console.log(sucesso)


                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Foto alterada com sucesso',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })


                                    }).catch((error) => {
                                        console.log(error)
                                    })
                            }
                        })





                    }}
                >
                    {({ isSubmitting, errors, touched, values, setFieldValue }) => (

                        <Form>

                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Edite as informações da sua conta.</span>
                                    </div>
                                    <button
                                        className="PnomeBotao"
                                        type="submit">Salvar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">


                                                <div className="criar_row">
                                                    <span>Imagem</span>
                                                    {errors.file && touched.file ? (
                                                        <div className="error_Yup">{errors.file}</div>
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
            </div>


        </>

    )

}
