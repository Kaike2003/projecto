import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import swal from 'sweetalert';





export default function RecuperarSenhaAdmin() {
    const navigate = useNavigate()

    const [data, setData] = useState([]);

    const utilizador = "ADMIN"
    const banido = false



    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);
        }
        fetchData();
    }, []);


    // Validações com o yup
    const CriarContaSchema = Yup.object().shape({
        email: Yup.string().email('Email inválido')
            .required('Email é obrigátorio')
    })

    return (
        <>


            <div>
                <Formik
                    validationSchema={CriarContaSchema}
                    initialValues={{
                        email: ""
                    }}
                    onSubmit={async (values) => {

                        data.map(item => {
                            if (
                                item.utilizador === utilizador
                                &&
                                item.banido === banido
                                &&
                                item.email === values.email) {


                                axios.put('http://localhost:3456/admin/recuperarSenha',
                                    {
                                        email: values.email
                                    }).then((sucesso) => {
                                        console.log(sucesso)


                                        setTimeout(async () => {
                                            await swal("Senha alterada", `Enviamos para o seu email a sua palavra passe nova.`, "success").then(async () => {
                                                navigate("/reservaOnline/admin/login")
                                            })

                                        }, 800);

                                    }).catch((error) => {
                                        console.log(error)
                                    })


                            } else {
                                setTimeout(async () => {
                                    await swal("Email errado", `Aqui só autentica-se email que foram cadastrado para conta de Administrador.`, "warning").then(async () => {
                                        navigate("/reservaOnline/admin/recuperarSenha")
                                    })

                                }, 800);
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
                                                Recuperar senha
                                            </span>



                                            <div className
                                                ="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
                                                <span className
                                                    ="label-input100">Email</span>
                                                <Field
                                                    className="input100 input_logar_criar"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Reserva@gmail.com"
                                                />

                                                {data.map(item => {
                                                    if (
                                                        item.email === values.email
                                                        &&
                                                        item.utilizador === utilizador
                                                        &&
                                                        item.banido === banido
                                                    ) {
                                                        return (<div key={item.id} >
                                                            <p className="container" style={{ color: "green" }}>Email válido.</p>
                                                        </div>
                                                        )
                                                    }
                                                }

                                                )}

                                                {errors.email && touched.email ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.email}
                                                    </div>
                                                ) : null}
                                                <span className
                                                    ="focus-input100"></span>
                                            </div>



                                            <div className="text-right p-t-8 p-b-15">
                                                <Link to={"/reservaOnline/admin/login"}>
                                                    Iniciar sessão?
                                                </Link>
                                            </div>

                                            <div className="container-login100-form-btn">
                                                <div className="wrap-login100-form-btn">
                                                    <div className="login100-form-bgbtn"></div>
                                                    <button

                                                        className="login100-form-btn"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        Recuperar
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

