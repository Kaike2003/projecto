import React, { useEffect, useState } from "react";
import "./css/main.css"
import "./css/util.css"
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Swal from 'sweetalert2'
import { format } from "date-fns";




export const CriarOrganizador = () => {
	const navigate = useNavigate()

	const [data, setData] = useState([]);


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
		nome: Yup.string("Nome inválido")
			.min(3, "Nome muito curto")
			.max(50, "Nome muito longo")
			.required("Nome é obrigátorio")
		,
		email: Yup.string().email('Email inválido')
			.required('Email é obrigátorio')
		,
		password: Yup.string("Passowrd obrigátorio")
			.min(3, "Senha muito curta")
			.max(100, "Senha muito longa")
			.required("Senha é obrigatoria")
		,
		dataNascimento: Yup.date("Data de nascimento obrigátoria")
			.min(new Date("1925-01-01"), "Data de nascimento minima é até 1926.")
			.max(new Date("2004-12-31"), "Data de nascimento máxima é até 2004.")
			.required("Data de nascimento é obrigátoria"),
	})




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

						console.log(values)

						axios.post("http://localhost:3456/organizador/create",
							{
								nome: values.nome,
								palavraPasse: values.password,
								email: values.email,
								localizacao: "Angola-Luanda",
								telefone: 943162154,
								dataNascimento: values.dataNascimento
							}).then((sucesso) => {
								console.log(sucesso)

								setTimeout(async () => {


									Swal.fire({
										icon: 'success',
										title: 'Conta criada',
										html: "Enivamos para você um código para autenticar sua conta na nossa aplicação.",
										showConfirmButton: false,
										timer: 1500
									}).then(async () => {
										navigate("/reservaOnline/organizador/autenticarConta")
									})


								}, 800);

							}).catch((error) => {
								console.log(error)
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
												Criar conta
											</span>

											<div className
												="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
												<span className
													="label-input100">Nome</span>
												<Field
													className="input100 input_logar_criar" type="text" name="nome" placeholder="Nome"

												/>
												{data.map(item => {
													if (item.nome === values.nome) {
														return (
															<div key={item.id} >
																<p className="container" style={{ color: "red" }}>Já existe um usuário cadastrado com este mesmo nome. Use outro nome.</p>
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

												<span className
													="focus-input100">
												</span>
											</div>

											<div className
												="wrap-input100 validate-input m-b-15" data-validate="Email é obrigátorio">
												<span className
													="label-input100">Email</span>
												<Field
													className="input100 input_logar_criar" type="email"
													name="email"
													placeholder="Email"

												/>
												<span className="focus-input100" ></span>
												{data.map(item => {
													if (item.email === values.email) {
														return (
															<div key={item.id} >
																<p className="container" style={{ color: "red" }}>Já existe um usuário cadastrado com este mesmo email. Use outro email.</p>
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

											<div className
												="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
												<span className
													="label-input100">Data de nascimento</span>
												<Field className="input100 input_logar_criar" type="date" name="dataNascimento" placeholder="Nome"
												/>

												{errors.dataNascimento && touched.dataNascimento ? (
													<div className="container"
														style={{ color: "red" }}
													>

														{errors.dataNascimento}
													</div>
												) : null}

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
														Criar
													</button>
												</div>
											</div>



											<div className="txt1 text-center p-t-25 p-b-0">
												<span>
													<Link to={"/reservaOnline/organizador/login"} >
														Iniciar sessão
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
			</div >


		</>
	)

}