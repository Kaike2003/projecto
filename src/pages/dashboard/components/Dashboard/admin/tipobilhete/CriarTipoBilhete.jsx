import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function CriarTipoBilhete() {

    const navigate = useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/tipoBilhete/todosTipobilhete');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);

    console.log("Tipo de bilhetes registrados", data)


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

                        // data.map(item => {
                        //     if (item.nome !== values.nome) {
                            
                        //     } else {
                        //         alert("Esse tipo de bilhebte já foi registrado.");
                        //         return;
                        //     }
                        // })


                        axios.post("http://localhost:3456/admin/tipoBilhete",
                        {
                            nome: values.nome,
                        }).then((sucesso) => {
                            console.log(sucesso)
                            alert(JSON.stringify(values, null, 2));
                            navigate("/reservaOnline/dashboard/admin/bilhete/listar")
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
                                        <span>Adicione as principais informações do tipo de bilhete.</span>
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
                                                <span>Nome do tipo de bilhete</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome do tipo de bilhete"
                                                />
                                                {data.map(item => {
                                                    if (item.nome === values.nome) {
                                                        return (
                                                            <div key={item.id} >
                                                                <p className="container" style={{ color: "red" }}>Esse tipo de bilehte já foi registrado.</p>
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

