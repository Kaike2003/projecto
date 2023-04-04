import React, { useEffect, useState } from "react";
import "./css/main.css"
import "./css/util.css"
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Modal from "react-modal"
import { X } from "lucide-react";




Modal.setAppElement("#root")

export const CriarParticipante = () => {


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
		nome: Yup.string("Nome inválido")
		// .min(3, "Nome muito curto")
		// .max(50, "Nome muito longo")
		// .required("Nome é obrigátorio")
		,
		email: Yup.string().email('Email inválido')
		// .required('Email é obrigátorio')
		,
		password: Yup.string("Passowrd obrigátorio")
		// .min(3, "Senha muito curta")
		// .max(100, "Senha muito longa")
		// .required("Senha é obrigatoria")
		,
		dataNascimento: Yup.date("Data de nascimento obrigátoria")
			.max(new Date())
		// .required("Data de nascimento é obrigátoria"),
	})




	return (
		<>

			{/* <div>
				<ul>
					{data.map(item => (
						<li key={item.id}>{item.email}</li>
					))}
				</ul>
			</div> */}


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
					nome: "",
					email: "",
					password: "",
					dataNascimento: ""
				}}

				validationSchema={CriarContaSchema}
				onSubmit={(values, { setSubmitting }) => {



					data.map(item => {
						if (item.email === values.email) {
							console.log("Já existe um usuário cadastrado com este mesmo email. Use outro email.")
						} else {
							setTimeout(() => {
								handleOpenModal()
							}, 600)
						}
					})





					// axios.post(url + "participante/create",
					// 	{
					// 		nome: values.nome,
					// 		palavraPasse: values.password,
					// 		email: values.email,
					// 		localizacao: "Benguela",
					// 		telefone: "943162154",
					// 		dataNascimento: values.dataNascimento
					// 	}).then((sucesso) => {
					// 		console.log(sucesso)
					// 		setTimeout(() => {
					// 			alert(JSON.stringify(values, null, 2));
					// 			setSubmitting(false);
					// 		}, 400);
					// 	}).catch((error) => {
					// 		console.log(error)
					// 	})



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
											Criar conta
										</span>

										<div className
											="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
											<span className
												="label-input100">Nome</span>
											<input className
												="input100" type="text" name="nome" placeholder="Nome"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.nome}
											/>
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
											<input className
												="input100" type="email" name="email" placeholder="Email"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email} />
											<span className
												="focus-input100" ></span>
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

										<div className
											="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
											<span className
												="label-input100">Senha</span>
											<input className
												="input100" type="password" name="password" placeholder="Senha"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.password} />
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
											<input className
												="input100" type="date" name="dataNascimento" placeholder="Nome"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.dataNascimento}
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
											{/* <a href="#">
							Forgot password?
						</a> */}
										</div>

										<div className="container-login100-form-btn">
											<div className="wrap-login100-form-btn">
												<div className="login100-form-bgbtn"></div>
												<button

													className="login100-form-btn"
													type="submit" disabled={isSubmitting}
												>
													Criar
												</button>
											</div>
										</div>



										<div className="txt1 text-center p-t-25 p-b-0">
											<span>
												<Link to={"#"} >
													Sign Up
												</Link>
											</span>
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