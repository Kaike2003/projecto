import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";


export default function CriarCategoria() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);

    console.log("Categorias registradas", data)


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
                        alert("Dados correctos")

                        data.map(item => {
                            if (item.nome !== values.nome) {
                                axios.post("http://localhost:3456/admin/categoria",
                                    {
                                        nome: values.nome,
                                    }).then((sucesso) => {
                                        console.log(sucesso)
                                        alert(JSON.stringify(values, null, 2));
                                        // navigate("/reservaOnline/organizador/autenticarConta")
                                    }).catch((error) => {
                                        console.log(error)
                                    })
                            } else {
                                alert("Essa categoria já foi registrada.");
                                return;
                            }
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
                                                                <p className="container" style={{ color: "red" }}>Essa categoria já foi registrada.</p>
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

