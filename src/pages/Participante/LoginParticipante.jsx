import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Modal from "react-modal"
import { X } from "lucide-react";
import { AuthContext } from "../../context/Autenticacao";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

Modal.setAppElement("#root")

export const LoginParticipante = () => {
	const navigate = useNavigate()
	const { signIn, signed } = useContext(AuthContext)


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


	if(signed){
		navigate("/")
	} else{
		return (
			<>
	
				{/* <div>
					<ul>
						{data.map(item => (
							<li key={item.id}>{item.email}</li>
						))}
					</ul>
				</div> */}
	
				
	
	
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
							
							if (item.email === values.email ) {
	
								
								// console.log(item)
	
								const email = values.email
								const palavraPasse = values.password
								const data = {
									email, palavraPasse
								}
	
								signIn(data)
	
						
							} 
							
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

	

							<div className="limiter">
	
								<div className="container-login100"
								>
									<div className="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-54">
										<div
											className="login100-form validate-form">
											<span className="login100-form-title p-b-15">
												Login
											</span>
	
	
											<div className="wrap-input100 validate-input m-b-15" data-validate="Email é obrigátorio">
												<span className
													="label-input100">Email</span>
												<input className
													="input100"
													type="email" name="email" placeholder="Email"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email} />
												<span className
													="focus-input100" ></span>
	
	
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
													="input100" type="password" name="password"
	
													placeholder="Senha"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.password} />
												{/* {data.map(item => {
			const senhaCorreta = compare(values.password, item.palavraPasse)
			if (!senhaCorreta) {	
				console.log("senha correcta")
			} else {							
				console.log("Senha incorreta")
							}
	
				if (item.email === values.email) {
	
							
	
														// return (
														// 	<div key={item.id} >
														// <p className="container" style={{ color: "red" }}>Senha correcta</p>
														// 												</div>
														// 											)
	
	
													}
	
												})} */}
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
												<Link to={"/participante/recuperarSenha"}>
													Esqueceu sua senha?
												</Link>
											</div>
	
											<div className="container-login100-form-btn">
												<div className="wrap-login100-form-btn">
													<div className="login100-form-bgbtn"></div>
													<button
	
														className="login100-form-btn"
														 type="submit" disabled={isSubmitting}
													>
														Entrar
													</button>
												</div>
											</div>
	
	
	
											<div className="txt1 text-center p-t-25 p-b-0">
												<span>
													<Link to={"/participante/criarContaParticipante"} >
														Criar conta
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

	

}