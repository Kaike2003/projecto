import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';



export default function CriarBilhete() {

    const navigate = useNavigate()
    const { idEvento } = useParams()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"


    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/tipoBilhete/todosTipobilhete');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);

    console.log("Email do utilizador", nomeUtilizador)



    // const CriarEventoSchema = Yup.object().shape({
    //     nome: Yup.string()
    //         .min(3, "O nome deve conter 2 ou mais caracteres")
    //         .max(100, "O nome deve conter 100 ou menos caracteres")
    //         .required("O nome é obrigatório"),
    //     preco: Yup.number("O preco do bilhete de ser um inteiro").integer()
    //         .min(0, "O preco do bilhete não pode ser menor que 0 ")
    //         .max(999999999, "O preco do bilhete não pode ser maior que 999999999")
    //         .required("O preco do bilhete é obrigatorio."),
    //     quantidade: Yup.number("A quantidade de bilhete deve ser um inteiro").integer()
    //         .min(0, "O quantidade de bilhete não pode ser menor que 0 ")
    //         .max(999999999, "O quantidade de bilhete não pode ser maior que 999999999")
    //         .required("A quantidade de bilhete é obrigátoria."),
    //     dataInicio: Yup.date().required("A data de inicio é obrigatória"),
    //     dataTermino: Yup.date().required("A data de termino é obrigatória"),
    //     horaInicio: Yup.string().required("A hora de inicio é obrigatória"),
    //     horaTermino: Yup.string().required("A hora de termino é obrigatória"),
    //     categoriaId: Yup.string("O id da categoria deve ser uma string")
    //         .min(3, "O id da categoria deve conter 3 ou mais")
    //         .max(4000, "O id da categoria deve conter 4000 ou menos caracteres")
    //         .required("O id da categoria é obrigatório")
    // })


    return (
        <>

            <div>


                <Formik
                    // validationSchema={CriarEventoSchema}
                    initialValues={{
                        nome: "",
                        preco: "",
                        quantidade: "",
                        dataInicio: "",
                        dataTermino: "",
                        horaInicio: "",
                        horaTermino: "",
                        tipoEvento: ""
                    }}
                    onSubmit={async (values) => {


                        console.log("Dados do bilhete", values)

                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {

                                axios.post(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete`,
                                    {
                                        nome: values.nome,
                                        preco: values.preco,
                                        quantidade: values.quantidade,
                                        dataInicio: values.dataInicio,
                                        dataTermino: values.dataTermino,
                                        horaInicio: values.horaInicio,
                                        horaTermino: values.horaTermino,
                                        tipoEvento: values.tipoEvento
                                    }).then((sucesso) => {
                                        console.log(sucesso)

                                        swal("Bilhete criado", `${values.nome} foi criado com sucesso. Agora podes adicionar outros detelhes.`, "success").then(async () => {
                                            navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}`)
                                        })
                                        // alert(JSON.stringify(values, null, 2));
                                        // navigate("/reservaOnline/organizador/autenticarConta")

                                    }).catch((error) => {
                                        console.log(error)
                                        swal(`${error}`, `Erro evento.`, "warning").then(async () => {
                                            // navigate("/reservaOnline/admin/autenticarConta")
                                        })

                                    })


                            }
                        })





                    }}
                >
                    {({ handleBlur, handleChange, isSubmitting, errors, touched, values }) => (




                        <Form>


                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Adicione as principais informações do evento</span>
                                    </div>
                                    <button
                                        className="PnomeBotao"
                                        disabled={isSubmitting}
                                        type="submit">Criar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">
                                                <span>Nome do evento</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome do bilhete"
                                                />
                                                {errors.nome && touched.nome ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.nome}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>



                                        <div>


                                            <div
                                                className="criar_row">
                                                <span>Tipo de bilhete</span>
                                                <select
                                                    name="categoriaId"
                                                    id=""
                                                    defaultValue={""}
                                                    onChange={(e) => {

                                                        values.tipoEvento = e.target.value

                                                        console.log(e.target.value)

                                                    }

                                                    }
                                                >

                                                    <option value="">Tipo de bilhete</option>
                                                    {data.map(item => {
                                                        return (
                                                            <>
                                                                <option
                                                                    key={item.id + Math.random().toString(36).substring(2)}
                                                                    value={item.id}
                                                                >
                                                                    {item.nome}
                                                                </option>

                                                            </>)

                                                    })}
                                                    {errors.tipoEvento && touched.tipoEvento ? (
                                                        <div className="container"
                                                            style={{ color: "red" }}
                                                        >

                                                            {errors.tipoEvento}
                                                        </div>
                                                    ) : null}
                                                </select >
                                            </div>





                                        </div>





                                    </div>

                                    <div

                                        className="criar_estrutura container">
                                        <div>

                                            <div className="criar_row">
                                                <span>Preço</span>
                                                <Field
                                                    type="number"
                                                    name="preco"
                                                    placeholder="Preço do bilhete"
                                                />
                                                {errors.preco && touched.preco ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.preco}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div>
                                            <div className="criar_row">
                                                <span>Quantidade</span>
                                                <Field
                                                    type="number"
                                                    name="quantidade"
                                                    placeholder="Quantidade de bilhete"
                                                />
                                                {errors.quantidade && touched.quantidade ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.quantidade}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="criar_info">
                                        <span>2. Data e horário</span> <br />
                                        <span>Informe aos participantes quando seu evento vai acontecer.</span>
                                    </div>

                                    <div className="criar_date_time">
                                        <div

                                        >
                                            <div className="criar_row">
                                                <span>Data de Início</span>
                                                <Field
                                                    type="date"
                                                    name="dataInicio"
                                                />
                                                {errors.dataInicio && touched.dataInicio ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.dataInicio}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div>

                                            <div className="criar_row">
                                                <span>Hora de inicio</span>
                                                <Field
                                                    type="time"
                                                    name="horaInicio"
                                                />
                                                {errors.horaInicio && touched.horaInicio ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.horaInicio}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div>

                                            <div className="criar_row">
                                                <span>Data de termino</span>
                                                <Field
                                                    type="date"
                                                    name="dataTermino"
                                                />
                                                {errors.dataTermino && touched.dataTermino ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.dataTermino}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div>

                                            <div
                                                className="criar_row">
                                                <span>Hora de termino</span>
                                                <Field
                                                    type="time"
                                                    name="horaTermino"
                                                />
                                                {errors.horaTermino && touched.horaTermino ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.horaTermino}
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
            </div >





















        </>

    )

}



