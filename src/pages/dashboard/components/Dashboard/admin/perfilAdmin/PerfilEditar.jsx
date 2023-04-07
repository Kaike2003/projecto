import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";


export default function PerfilEditar() {

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



    // const EstruturaSchema = Yup.object().shape({
    //     nomeEvento: Yup.string()
    //         .min(5, "O nome do evento. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do evento. Precisa ter mais de 50 caracteres")
    //     // .required("Nome do evento é obrigatorio.")
    //     ,
    //     nomeLocal: Yup.string()
    //         .min(5, "O nome do local. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do local. Precisa ter mais de 50 caracteres")
    //     // .required('Nome do local é obrigatorio.')
    //     ,
    //     nomeBairro: Yup.string()
    //         .min(5, "O nome do bairro. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do bairro. Precisa ter mais de 50 caracteres")
    //     // .required('Nome do bairro é obrigatorio.')
    //     ,
    //     nomeMunicipio: Yup.string()
    //         .min(5, "O nome do municipio. Precisa ter menos de 5 caracteres")
    //         .max(50, "O nome do municipio. Precisa ter mais de 50 caracteres")
    //     // .required('Nome do municipio é obrigatorio.')
    //     ,
    //     dataInicio: Yup.date()
    //         .min(new Date(), `O eventos devem ser marcados depois ${new Date()}`)
    //         .max(new Date("2023-12-31"), `Os eventos devem ser marcados no ano de ${new Date().getFullYear()}.`)
    //     // .required('Data de início do evento é obrigatorio.')
    //     ,
    //     horaInicio: Yup.string()
    //         .min(5, 'Os eventos só são marcados depois das 7h:00')
    //         .max(5, 'Os eventos só devem ser marcados até as 22h:00')
    //     // .required('Hora de início do evento é obrigatorio.')
    //     ,
    //     dataTermino: Yup.date()
    //         .min(new Date(), `O eventos devem ser marcados depois ${new Date()}`)
    //         .max(new Date("2023-12-31"), `Os eventos devem ser marcados no ano de ${new Date().getFullYear()}.`)
    //     // .required('Data de termino do evento é obrigatorio.')
    //     ,
    //     horaTermino: Yup.string()
    //         .min(5, 'Os eventos só são marcados depois das 7h:00')
    //         .max(5, 'Os eventos só devem ser marcados até as 22h:00')
    //     // .required('Hora de termino do evento é obrigatorio.')
    //     ,
    //     nomeTextearea: Yup.string()
    //         .min(30, "A descrição. Precisa ter menos de 5 caracteres")
    //         .max(900, "A descrição. Precisa ter mais de 500 caracteres")
    //     // .required('Descricação do evento é obrigatorio.')
    //     ,
    //     nomeCategoria: Yup.string()
    //         .min(4, "A categoria. Precisa ter menos de 5 caracteres")
    //         .max(80, "A categoria. Precisa ter mais de 50 caracteres")
    //     // .required('Nome da categória é obrigatorio.')
    // })

    return (
        <>



            <div>


                <Formik
                    validationSchema={"CriarContaSchema"}
                    initialValues={{
                        nome: "",
                        email: "",
                        password: "",
                        dataNascimento: ""
                    }}
                    enableReinitialize
                    onSubmit={async (values) => {
                        alert("Dados correctos")

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
                    {({ isSubmitting, errors, touched, values }) => (

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
                                        type="submit">Editar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>


                                            <div className="criar_row">
                                                <span>Nome</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome do evento"
                                                />
                                            </div>

                                        </div>

                                        <div>

                                            <div className="criar_row">
                                                <span>Telefone</span>
                                                <Field
                                                    type="number"
                                                    name="telefone"
                                                    placeholder="9xx-xxx-xxx"
                                                />
                                            </div>




                                        </div>


                                        <div>

                                            <div className="criar_row">
                                                <span>Endereço</span>
                                                <Field
                                                    type="text"
                                                    name="localizacao"
                                                    placeholder="Endereço"
                                                />
                                            </div>

                                        </div>


                                        <div>

                                            <div className="criar_row">
                                                <span>Data de nascimento</span>
                                                <Field
                                                    type="date"
                                                    name="dataNascimento"
                                                />
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

