import React, { useEffect, useState, useContext } from "react";
import "../Organizador/css/main.css"
import "../Organizador/css/util.css"
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { X } from "lucide-react";
import { AuthContext } from "../../context/Autenticacao";



export const LoginParticipante = () => {
	const navigate = useNavigate()
	const { signInParticipante, signed } = useContext(AuthContext)


	const [data, setData] = useState([]);

	const utilizador = "PARTICIPANTE"


	console.log(data)



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

		email: Yup.string().email('Email inválido')
			.required('Email é obrigátorio')
		,
		password: Yup.string("Passowrd obrigátorio")
			.min(3, "Senha muito curta")
			.max(100, "Senha muito longa")
			.required("Senha é obrigatoria")

	})


	if (signed) {
		navigate("/reservaOnline/participante")
	} else {
		return (
			<>

				<div>
					<Formik
						validationSchema={CriarContaSchema}
						initialValues={{
							nome: "",
							email: "",
							password: "",
							dataNascimento: ""
						}}
						onSubmit={async (values) => {

							data.map(item => {
								if (item.email === values.email && item.utilizador === utilizador) {
									const email = values.email
									const palavraPasse = values.password

									const data = {
										email, palavraPasse
									}

									signInParticipante(data)

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
													Login
												</span>



												<div className
													="wrap-input100 validate-input m-b-15" data-validate="Email é obrigátorio">
													<span className
														="label-input100">Email</span>
													<Field
														className="input100 input_logar_criar" type="email"
														name="email"
														placeholder="Email"

													/>
													<span className
														="focus-input100" ></span>
													{data.map(item => {
														if (item.email === values.email) {
															return (
																<div key={item.id} >
																	<p className="container" style={{ color: "green" }}>Email correcto</p>
																</div>
															)
														}
													})}
													{errors.email && touched.email ? (
														<div className="container"
															style={{ color: "red" }}
														>

															{errors.email}
														</div>
													) : null}
												</div>

												<div className="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
													<span className
														="label-input100">Senha</span>
													<Field
														className="input100 input_logar_criar"
														type="password"
														name="password"
														placeholder="Senha"
													/>



													{errors.password && touched.password ? (
														<div className="container"
															style={{ color: "red" }}
														>

															{errors.password}
														</div>
													) : null}
													<span className
														="focus-input100"></span>
												</div>



												<div className="text-right p-t-8 p-b-15">
													<Link to={"/reservaOnline/participante/recuperarSenha"}>
														Esqueceu palavra passe?
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
															Entrar
														</button>
													</div>
												</div>



												<div className="txt1 text-center p-t-25 p-b-0">
													<span>
														<Link to={"/reservaOnline/participante/criarConta"} >
															Criar conta
														</Link>
													</span>
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



}