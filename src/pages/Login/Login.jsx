import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import { Formik } from "formik"
import { BsFillPersonFill, BsEnvelopeFill, BsFillLockFill, BsFillCalendarFill } from "react-icons/bs";
import * as Yup from 'yup';
import { useRef } from "react";
import { Route } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState(() => {
        return []
    })



    // Criar pessoa com Enter
    function adicionarEnter(event) {
        if (event.code === "Enter") {
        }
    }

    // Storage
    // Carregar
    useEffect(() => {

        if (localStorage.getItem("usuarios") !== null) {
            setUsuarios(JSON.parse(localStorage.getItem("usuarios")))
        }

    }, [])

    // atualizar
    useEffect(() => {

        localStorage.setItem("usuarios", JSON.stringify(usuarios))

    }, [usuarios])

    console.table(`Usuario cadastrados`, usuarios)


    var body = document.querySelector("body");


    function btnSignin() {
        body.className = "sign-in-js";
    };

    function btnSignup() {
        body.className = "sign-up-js";
    }

    // Ref
    const inputNome = useRef()
    const inputPassword = useRef()
    const inputEmail = useRef()


    // Validações com o yup
    const CriarContaSchema = Yup.object().shape({
        nome: Yup.string("Nome inválido")
            .min(3, "Nome muito curto")
            .max(50, "Nome muito longo")
            .required("Nome é obrigátorio"),
        email: Yup.string().email('Email inválido').required('Email é obrigátorio'),
        password: Yup.string("Passowrd obrigátorio")
            .min(3, "Senha muito curta")
            .max(100, "Senha muito longa")
            .required("Senha é obrigatoria"),
        dataNascimento: Yup.date("Data de nascimento obrigátoria")
            .max(new Date())
            .required("Data de nascimento é obrigátoria"),

        email: Yup.string().email('Email inválido').required('Email é obrigátorio'),
        password: Yup.string("Passowrd obrigátorio")
            .min(3, "Senha muito curta")
            .max(100, "Senha muito longa")
            .required("Senha é obrigatoria"),

    })

    return (
        <>
            <Formik
                initialValues={{ nome: "", email: "", password: "", dataNascimento: "" }}

                validationSchema={CriarContaSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {


                        // Verificar se o email já existe

                        let duplicado = usuarios.find((usuario) =>
                            usuario.email === values.email &&
                            usuario.nome === values.nome
                        )

                        if (typeof (duplicado) !== "undefined") {
                            alert("Duplicado")
                            return
                        }

                        setUsuarios((old) => {
                            return old = [...usuarios, values]
                        })

                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false);

                    }, 400)
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

                        <div className="container_loginCreate">
                            <div className="content first-content">
                                <div className="first-column">
                                    <h2 className="title title-primary">
                                        Bem vindo de volta!</h2>
                                    <p className="description description-primary">
                                        Para manter-se conectado conosco</p>
                                    <p className="description description-primary">
                                        faça o login com suas informações pessoais</p>
                                    <button id="signin" onClick={btnSignin} className="btn_loginCreate btn-primary_loginCreate">
                                        Entrar</button>
                                </div>
                                <div className="second-column">
                                    <h2 className="title title-second">Criar Conta</h2>
                                    <div

                                        className="form">
                                        <label className="label-input" htmlFor="">
                                            <i className="far fa-user icon-modify"><BsFillPersonFill></BsFillPersonFill></i>
                                            <input
                                                ref={inputNome}
                                                type="text"
                                                name="nome"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nome} placeholder="Nome"


                                            />
                                        </label>
                                        {errors.nome && touched.nome ? (
                                            <div className="container"
                                                style={{ color: "red" }}
                                            >

                                                {errors.nome}
                                            </div>
                                        ) : null}

                                        <label className="label-input" htmlFor="">
                                            <i className="far fa-envelope icon-modify"><BsEnvelopeFill></BsEnvelopeFill></i>
                                            <input
                                                ref={inputEmail}
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}

                                            />
                                        </label>

                                        {errors.email && touched.email ? (
                                            <div
                                                className="container"
                                                style={{ color: "red" }}
                                            >

                                                {errors.email}</div>
                                        ) : null}

                                        <label className="label-input" htmlFor="">
                                            <i className="fas fa-lock icon-modify"><BsFillLockFill></BsFillLockFill></i>
                                            <input
                                                ref={inputPassword}
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password} placeholder="Password"
                                            />
                                        </label>
                                        {errors.password && touched.password ? (
                                            <div
                                                className="container"
                                                style={{ color: "red" }}
                                            >

                                                {errors.password}</div>
                                        ) : null}

                                        <label className="label-input" htmlFor="">
                                            <i className="fas fa-lock icon-modify"><BsFillCalendarFill></BsFillCalendarFill></i>
                                            <input
                                                type="date"
                                                name="dataNascimento"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dataNascimento}

                                            />

                                        </label>

                                        {errors.dataNascimento && touched.dataNascimento ? (
                                            <div
                                                className="container"
                                                style={{ color: "red" }}
                                            >

                                                {errors.dataNascimento}</div>
                                        ) : null}
                                        <button
                                            type="submit"
                                            className="btn_loginCreate btn-second_loginCreate"
                                        > Inscrever-se</button>
                                    </div>
                                </div>{/*<!-- second column --> */}
                            </div>{/*<!-- first content -->*/}
                            <div className="content second-content">
                                <div className="first-column">
                                    <h2 className="title title-primary">Olá amigo!</h2>
                                    <p className="description description-primary">
                                        Insira seus dados pessoais</p>
                                    <p className="description description-primary">
                                        e comece a jornada conosco</p>
                                    <button id="signup" onClick={btnSignup} className="btn_loginCreate btn-primary_loginCreate">
                                        Inscrever-se</button>
                                </div>
                                <form onSubmit={handleSubmit} className="second-column">
                                    <h2 className="title title-second">Login</h2>
                                    <div className="form">

                                        <label className="label-input" htmlFor="">
                                            <i className="far fa-envelope icon-modify"><BsEnvelopeFill></BsEnvelopeFill></i>
                                            <input
                                                ref={inputEmail}
                                                type="email"
                                                name="email"
                                            
                                            />
                                        </label>
                                        
                                        <label className="label-input" htmlFor="">
                                            <i className="fas fa-lock icon-modify"><BsFillLockFill></BsFillLockFill></i>
                                            <input
                                                ref={inputPassword}
                                                type="password"
                                                name="password"
                                                 />
                                        </label>

                                        <a className="password" href="#">
                                            Esqueceu sua senha?</a>
                                        <button
                                            type="submit"
                                            className="btn_loginCreate btn-second_loginCreate"
                                        >Entrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </form>
                )}
            </Formik>
        </>
    )

}

