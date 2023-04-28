import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
// import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import { useRef } from "react";
import Swal from 'sweetalert2';
import PrevisualizacaoImagem from "../../../dashboard/components/estrutura/PrevisualizacaoImagem";
const FORMATOS_SUPORTADOS = ["image/jpg", "image/jpeg", "image/png"]




export default function AdicionarFotoComprovativo() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const { idReserva } = useParams()
    const [nomeUtilizador, setNomeUtilizador] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);

            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }



        }
        fetchData();
    }, []);

    const fileRef = useRef()


    console.log(idReserva)
    console.log(data)
    console.log(nomeUtilizador)

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







                        if (FORMATOS_SUPORTADOS.includes(values.file.type)) {

                            // Swal.fire({
                            //     icon: 'success',
                            //     title: 'Comprovativo válido',
                            //     showConfirmButton: false,
                            //     timer: 2500
                            // })

                            if (values.file.size <= 40000) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Comprovativo válido',
                                    showConfirmButton: false,
                                    timer: 2500
                                }).then(() => {

                                    const form = new FormData();
                                    form.append('foto', values.file);


                                    console.log(values.file.name)

                                    data.map((item, index) => {


                                        if (item.email === nomeUtilizador) {

                                            axios.put(`http://localhost:3456/participante/adicionarComprovaito/${idReserva}/${item.id}`,
                                                form,

                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                                                    }
                                                },
                                                {
                                                    foto: values.file.name
                                                }

                                            ).then(res => {
                                                console.log(res)
                                                alert("Ok - 200")
                                            }).catch((error) => {
                                                console.log(error)
                                            })

                                        }

                                    })




                                })
                            } else {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Verifique se está enviado um comprovativo de transfêrencia bancaria',
                                    showConfirmButton: false,
                                    timer: 2500
                                })
                            }

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Tipo de ficheiro não suportado',
                                showConfirmButton: false,
                                timer: 3500
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
