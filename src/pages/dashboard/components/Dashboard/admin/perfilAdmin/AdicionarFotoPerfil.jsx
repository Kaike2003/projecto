import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import PrevisualizacaoImagem from "../../../estrutura/PrevisualizacaoImagem";
import { useRef } from "react";


export default function AdicionarFotoPerfil() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newData = response.data;
            setData(newData);
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
                        alert("Dados correctos")

                        console.log(values.file.name)

                        // data.map(item => {
                        //     if (item.email === values.email) {
                        //         alert("Já existe um nome e ou email cadastrado.");
                        //         return;
                        //     } else if (item.nome === values.nome) {
                        //         alert("Já existe um nome e ou nome cadastrado.");
                        //         return;
                        //     } else {

                        //         axios.post("http://localhost:3456/organizador/create",
                        //             {
                        //                 nome: values.nome,
                        //                 palavraPasse: values.password,
                        //                 email: values.email,
                        //                 localizacao: "Zango",
                        //                 telefone: "953164154",
                        //                 dataNascimento: values.dataNascimento
                        //             }).then((sucesso) => {
                        //                 console.log(sucesso)
                        //                 alert(JSON.stringify(values, null, 2));
                        //                 navigate("/reservaOnline/organizador/autenticarConta")

                        //             }).catch((error) => {
                        //                 console.log(error)
                        //             })



                        //     }
                        // })





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
                                                            console.log((e.target.files[0]))
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
