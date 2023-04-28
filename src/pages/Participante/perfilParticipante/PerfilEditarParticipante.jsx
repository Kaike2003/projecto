import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../pages/dashboard/components/estrutura/evento/css/Criar.css"

import axios from "axios";
import { format } from "date-fns";
import Swal from 'sweetalert2';


export default function PerfilEditarParticipante() {

    const navigate = useNavigate()


    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

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

    console.log(nomeUtilizador)




    const EstruturaEditarPerfil = Yup.object().shape({
        nome: Yup.string("Nome inválido")
            .min(3, "Nome muito curto")
            .max(50, "Nome muito longo")
            .required("Nome é obrigátorio")
        ,
        dataNascimento: Yup.date("Data de nascimento obrigátoria")
            .max(new Date())
            .required("Data de nascimento é obrigátoria"),

    })

    console.log(data)



    return (
        <>


            {

                data.map(item => {
                    if (item.email === nomeUtilizador) {

                        const dadosSalvos = {
                            nome: item.nome,
                            telefone: Number(item.telefone),
                            localizacao: item.localizacao,
                            dataNascimento: format(new Date(item.dataNascimento), "yyyy-MM-dd")

                        }

                        console.log(dadosSalvos.telefone)

                        const valoresInicias = {
                            nome: "",
                            dataNascimento: "",
                            telefone: 0,
                            localizacao: ""
                        }
                        return (
                            <>

                                <div key={Math.random().toString(36).substring(2)}>


                                    <Formik
                                        validationSchema={EstruturaEditarPerfil}
                                        initialValues={dadosSalvos || valoresInicias}
                                        enableReinitialize
                                        onSubmit={async (values) => {

                                            console.log(values)

                                            axios.put(`http://localhost:3456/participante/perfil/${item.id}/atualizarInformacaoBasica`,
                                                {
                                                    nome: values.nome,
                                                    dataNascimento: new Date(values.dataNascimento),
                                                    telefone: Number(values.telefone),
                                                    localizacao: values.localizacao
                                                },
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${localStorage.getItem("@Auth:token")}`
                                                    }
                                                }

                                            ).then((sucesso) => {

                                                console.log(sucesso)

                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Usuário editado',
                                                    html: `${values.nome} suas alterações foram salvas com sucesso.`,
                                                    showConfirmButton: false,
                                                    timer: 2500
                                                })


                                            }).catch((error) => {
                                                console.log(error)
                                            })




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
                                                                        placeholder="Nome do usuário"
                                                                    />
                                                                </div>

                                                                {errors.nome && touched.nome ? (
                                                                    <div className="container"
                                                                        style={{ color: "red" }}
                                                                    >

                                                                        {errors.nome}
                                                                    </div>
                                                                ) : null}


                                                            </div>

                                                            <div>

                                                                <div className="criar_row">
                                                                    <span>Telefone</span>
                                                                    <Field
                                                                        type="number"
                                                                        name="telefone"
                                                                        placeholder="Ditige seu número de telefone"
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

                                                                    {errors.dataNascimento && touched.dataNascimento ? (
                                                                        <div className="container"
                                                                            style={{ color: "red" }}
                                                                        >

                                                                            {errors.dataNascimento}
                                                                        </div>
                                                                    ) : null}



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
                })

            }













        </>

    )

}

