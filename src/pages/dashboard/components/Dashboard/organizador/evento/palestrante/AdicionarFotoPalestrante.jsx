import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import PrevisualizacaoImagem from "../../../../estrutura/PrevisualizacaoImagem";
import { useRef } from "react";
import swal from 'sweetalert';



export default function AdicionarFotoPalestrante() {

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
    //     foto: Yup.string("A foto de ser uma string")
    //         .min(5, "O nome do evento. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do evento. Precisa ter mais de 50 caracteres")
    //         .required("Nome do evento é obrigatorio.")
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

                        const foto = await values.file.name
                        console.log(foto)
                        const formData = new FormData();
                        formData.append('foto', foto);
                        alert("Valores do form data", formData.append('foto', foto))

                        // console.log(formData.append('foto', foto))




                        axios.put(`http://localhost:3456/organizador/evento/detalhe/editar/${idUtilizador}/foto/${idEvento}`, formData).then((sucesso) => {
                            console.log(sucesso)


                            swal("Evento editado", `Evento foi editado com sucesso. Agora podes adicionar outros detalhes.`, "success").then(async () => {
                                // navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}`)
                            })

                        }).catch((error) => {
                            console.log(error)
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
                                        <span>Adicione uma foto ao palestrante</span>
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
