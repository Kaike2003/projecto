import React, { useEffect, useState } from "react";
import "./css/main.css"
import "./css/util.css"
import { Link , useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Modal from "react-modal"
import { X } from "lucide-react";




Modal.setAppElement("#root")

export default function AutenticarParticipante() {
    const navigate = useNavigate ()

    const [data, setData] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }




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
        ,

    })

    return (
        <>



            <Modal
                className={"modalsucesso"}
                overlayClassName={"Overlay"}
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}

            >

                <div
                    className="contasucesso container">
                    <X
                        size={28}
                        onClick={handleCloseModal} className="btn_fechar_hidden ">Fechar</X>
                    <span
                        style={{ fontSize: "20px" }}
                    >Conta criada com sucesso</span>
                    <X
                        size={28}
                        onClick={handleCloseModal} className="btn_fechar ">Fechar</X>
                </div>

                <div>
                    <p className="mb-3 mt-3">Sua conta foi criada com sucesso. Verifique seu email. Enviamos para você um codigo de autenticação para ativar a sua conta.</p>

                    <p>
                        <Link to={"/palestrante/verificarContaPalestrante"}
                            target="_blank"
                            style={{ color: "white" }}>
                            Click aqui para poder ativar sua conta.
                        </Link>
                    </p>

                </div>



            </Modal>

            <Formik
                initialValues={{
                    codigo: ""
                }}

                validationSchema={CriarContaSchema}
                onSubmit={(values, { setSubmitting }) => {



                    data.map(item => {
                        if (item.id === values.codigo) {
                            console.log("Já existe um usuário cadastrado com este mesmo email. Use outro email.")
                        } else {
                            console.log(values.codigo)
                            // setTimeout(() => {
                            //     handleOpenModal()
                            // }, 600)
                        }
                    })





                    axios.put( 'http://localhost:3456/participante/verificarContaPalestrante',
                    	{
                    		codigoVerificacao : values.codigo
                    	}).then((sucesso) => {
                    		console.log(sucesso)
                    		setTimeout(() => {
                                navigate("/palestrante/loginPalestrante")
                    			alert(JSON.stringify(values, null, 2));
                    			setSubmitting(false);
                    		}, 400);
                    	}).catch((error) => {
                    		console.log(error)
                    	})


                }}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} >

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
                                            Validar conta
                                        </span>

                                        <div className
                                            ="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
                                            <span className
                                                ="label-input100">Introduzir código de verificação</span>
                                            <input className
                                                ="input100" type="text" name="codigo" placeholder="Código de verificação"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.codigo}
                                            />
            {data.map(item => {
             if (item.codigo === values.codigo && item.utilizador === "PARTICIPANTE") {
             return (<div key={item.id} >
                 <p className="container" style={{ color: "green" }}>Código de confirmação válido.</p>
                         </div>
                 )
            } 

                                            })}
                                            {errors.codigo && touched.codigo ? (
                                                <div className="container"
                                                    style={{ color: "red" }}
                                                >

                                                    {errors.codigo}
                                                </div>
                                            ) : null}

                                            <span className
                                                ="focus-input100">
                                            </span>
                                        </div>



                                        <div className="text-right p-t-8 p-b-15">

                                        </div>

                                        <div className="container-login100-form-btn">
                                            <div className="wrap-login100-form-btn">
                                                <div className="login100-form-bgbtn"></div>
                                                <button

                                                    className="login100-form-btn"
                                                    type="submit" disabled={isSubmitting}
                                                >
                                                    Verificar
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </div >


                    </form>
                )}
            </Formik>



        </>
    )

}

