import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from "axios";
import { Formik, Field, Form } from "formik";
import swal from 'sweetalert';



export default function AutenticarAdmin() {
    const navigate = useNavigate()

    const [data, setData] = useState([]);

    const utilizador = "ADMIN"
    const banido = false
    const verificado = false




    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);


    // Validações com o yup
    const CriarContaSchema = Yup.object().shape({
        codigo: Yup.string("Nome inválido")
            .min(1, "O código de verificação é muito curto")
            .required("O código de verificação obrigátorio")
    })

    return (
        <>



            <div>
                <Formik
                    validationSchema={CriarContaSchema}
                    initialValues={{
                        codigo: ""
                    }}
                    onSubmit={async (values) => {
                        data.map(item => {
                            if (
                                item.utilizador === utilizador
                                &&
                                item.banido === banido
                                &&
                                item.codigo === values.codigo
                                &&
                                item.verificado === verificado
                            ) {

                                axios.put('http://localhost:3456/organizador/verificarContaOrganizador',
                                    {
                                        codigoVerificacao: values.codigo
                                    }).then(async (sucesso) => {
                                        console.log(sucesso)

                                        setTimeout(async () => {
                                            await swal("Conta autenticada", `Já pode fazer login na aplicação.`, "success").then(async () => {
                                                navigate("/reservaOnline/admin/login")
                                            })

                                        }, 800);

                                        // setTimeout(() => {
                                        //     navigate("/reservaOnline/organizador/login")
                                        //     // alert(JSON.stringify(values, null, 2));
                                        // }, 400);
                                    }).catch((error) => {
                                        console.log(error)
                                        swal("Erro de autenticação", `Conta de participante e de organizador não podem ser autenticadas aqui.`, "warning")
                                    })

                            } else {
                                swal("Erro de autenticação", `Conta de participante e de organizador não podem ser autenticadas aqui.`, "warning")
                            }
                        })


                    }}
                >
                    {({ isSubmitting, errors, touched, values }) => (
                        <Form>

                            <div className
                                ="limiter">
                                <div className
                                    ="container-login100"
                                >
                                    <div className
                                        ="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-54">
                                        <div
                                            className="login100-form validate-form">
                                            <span className
                                                ="login100-form-title p-b-15">
                                                Autenticação
                                            </span>



                                            <div className
                                                ="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
                                                <span className
                                                    ="label-input100">Introduzir código de autenticação</span>
                                                <Field
                                                    className="input100 input_logar_criar" type="text"
                                                    name="codigo"
                                                    placeholder="Código de autenticação"
                                                />

                                                {data.map(item => {
                                                    if (item.codigo === values.codigo
                                                        &&
                                                        item.utilizador === utilizador) {
                                                        return (<div key={item.id} >
                                                            <p className="container" style={{ color: "green" }}>Código de confirmação válido.</p>
                                                        </div>
                                                        )
                                                    }
                                                }

                                                )}

                                                {errors.codigo && touched.codigo ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.codigo}
                                                    </div>
                                                ) : null}
                                                <span className
                                                    ="focus-input100"></span>
                                            </div>



                                            <div className="text-right p-t-8 p-b-15">

                                            </div>

                                            <div className="container-login100-form-btn">
                                                <div className="wrap-login100-form-btn">
                                                    <div className="login100-form-bgbtn"></div>
                                                    <button

                                                        className="login100-form-btn"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        Autenticar
                                                    </button>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div >
                            </div >


                        </Form>
                    )}
                </Formik>
            </div>




        </>
    )

}

