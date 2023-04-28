import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


export default function CriarCategoria() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);

    // console.log("Categorias registradas", data)


    const CriarCategoria = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome da categoria. Precisa ter menos de 3 caracteres")
            .max(50, "O nome da categoria. Precisa ter pelo menos 50 caracteres")
            .required("Nome da categoria é obrigátorio.")
    })

    return (
        <>



            <div>


                <Formik
                    validationSchema={CriarCategoria}
                    initialValues={{
                        nome: "",
                    }}
                    onSubmit={async (values) => {

                        console.log(values)

                        axios.post("http://localhost:3456/admin/categoria",
                            {
                                nome: values.nome,
                            }).then((sucesso) => {
                                console.log(sucesso)


                                Swal.fire({
                                    icon: 'success',
                                    title: `Categoria ${values.nome}`,
                                    showConfirmButton: false,
                                    timer: 2500
                                }).then(() => {
                                    navigate("/reservaOnline/dashboard/admin/categoria/listar")
                                })

                            }).catch((error) => {

                                Swal.fire({
                                    icon: 'info',
                                    title: `Categoria ${values.nome}`,
                                    html: "Já foi cadastrada na aplicação.",
                                    showConfirmButton: false,
                                    timer: 3500
                                })
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
                                        <span>Adicione as principais informações da categoria.</span>
                                    </div>
                                    <button
                                        className="PnomeBotao"
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{ background: "#7b7c7c", color: "white" }}
                                    >Criar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">
                                                <span>Nome da categoria</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome da categoria"
                                                />
                                                {data.map(item => {
                                                    if (item.nome === values.nome) {
                                                        return (
                                                            <div key={item.id} >
                                                                <p className="container" style={{ color: "red" }}>Essa categoria já foi cadastrada.</p>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                {errors.nome && touched.nome ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.nome}
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

