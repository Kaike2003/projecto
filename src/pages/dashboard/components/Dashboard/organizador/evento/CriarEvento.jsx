import React, { useEffect, useState } from "react";
import Tabela from "../../../Tabela/Tabela";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import Swal from 'sweetalert2'


export default function CriarEvento() {

    const navigate = useNavigate()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"


    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);

    console.log("Email do utilizador", nomeUtilizador)




    const CriarEventoSchema = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome deve conter 2 ou mais caracteres")
            .max(100, "O nome deve conter 100 ou menos caracteres")
            .required("O nome é obrigatório"),
        foto: Yup.string()
            .min(3, "O nome do evento. Precisa ter menos de 5 caracteres")
            .max(100, "O nome do evento. Precisa ter mais de 50 caracteres")
            .required("Nome do evento é obrigatorio.").optional(),
        descricao: Yup.string("A descrição de ser uma string")
            .min(200, "A descrição deve ter 200 ou mais caracteres")
            .max(289, "A descrição deve ter 289 ou menos caracteres")
            .required("A descrição é obrigatória"),
        dataInicio: Yup.date().min(new Date(), { message: "Data inválida" }).required("A data de inicio é obrigatória"),
        dataTermino: Yup.date().required("A data de termino é obrigatória"),
        horaInicio: Yup.string().required("A hora de inicio é obrigatória"),
        horaTermino: Yup.string().required("A hora de termino é obrigatória"),
        provincia: Yup.string("O nome do da provincia deve ser uma string")
            .min(3, "O nome do da provincia deve conter 3 ou mais")
            .max(100, "O nome do da provincia deve conter 4000 ou menos caracteres")
            .required("O nome do da provincia é obrigatório"),
        municipio: Yup.string("O nome do municipio deve ser uma string")
            .min(3, "O nome do municipio deve conter 3 ou mais")
            .max(100, "O nome do municipio deve conter 4000 ou menos caracteres")
            .required("O nome do municipio é obrigatório"),
        bairro: Yup.string("O nome do bairro deve ser uma string")
            .min(3, "O nome do bairro deve conter 3 ou mais")
            .max(100, "O nome do bairro deve conter 4000 ou menos caracteres")
            .required("O nome do bairro é obrigatório"),
        categoriaId: Yup.string("O id da categoria deve ser uma string")
            .min(10, "O id da categoria deve conter 3 ou mais")
            .max(400, "O id da categoria deve conter 4000 ou menos caracteres")
            .required("O nome da categoria é obrigatório"),

    })


    return (
        <>

            <div>


                <Formik
                    validationSchema={CriarEventoSchema}
                    initialValues={{
                        nome: "",
                        descricao: "",
                        dataInicio: "",
                        dataTermino: "",
                        horaInicio: "",
                        horaTermino: "",
                        foto: "",
                        provincia: "",
                        municipio: "",
                        bairro: "",
                        categoriaId: "",
                    }}
                    onSubmit={async (values) => {


                        console.log(values)

                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {

                                axios.post(`http://localhost:3456/organizador/evento/criarEvento/${item.id}`,
                                    {
                                        nome: values.nome,
                                        descricao: values.descricao,
                                        dataInicio: values.dataInicio,
                                        dataTermino: values.dataTermino,
                                        horaInicio: values.horaInicio,
                                        horaTermino: values.horaTermino,
                                        foto: "",
                                        provincia: values.provincia,
                                        municipio: values.municipio,
                                        bairro: values.bairro,
                                        categoriaId: values.categoriaId,

                                    }).then((sucesso) => {
                                        console.log(sucesso)


                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Evento criado',
                                            html: `${values.nome} foi criado com sucesso. Agora podes adicionar outros detelhes.`,
                                            showConfirmButton: false,
                                            timer: 2500
                                        }).then(async () => {
                                            navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}`)
                                        }).catch((error) => {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Errro',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        })

                                    }).catch((error) => {
                                        console.log(error)
                                        Swal.fire({
                                            icon: 'warning',
                                            title: 'Erro evento.',
                                            html: `Verifique a data ou hora do evento`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })

                                        // swal(`${error}`, `Erro evento.`, "warning").then(async () => {
                                        //     // navigate("/reservaOnline/admin/autenticarConta")
                                        // })

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
                                        className="PnomeBotaoOrganizador"
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
                                                    placeholder="Nome do evento"
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
                                                <span>Categoria</span>
                                                <select
                                                    name="categoriaId"
                                                    id=""
                                                    // defaultValue={""}
                                                    // onChange={(e) => values.categoriaId = e.target.value}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.categoriaId}
                                                >
                                                    <option>Selecionar categoria</option>
                                                    {data.map(item => {
                                                        return (
                                                            <>
                                                                <option
                                                                    key={item.id + Math.random().toString(36).substring(2)}
                                                                    value={item.id}
                                                                // selected
                                                                >
                                                                    {item.nome}
                                                                </option>

                                                            </>)

                                                    })}

                                                </select >
                                                {errors.categoriaId && touched.categoriaId ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.categoriaId}
                                                    </div>
                                                ) : null}
                                            </div>





                                        </div>





                                    </div>




                                    <div className="criar_info">
                                        <span>2. Informe o endereço ou o nome do local do evento</span> <br />
                                        <span>Adicione os principais endereço do evento</span>

                                    </div>

                                    <div

                                        className="criar_estrutura container">
                                        <div>

                                            <div className="criar_row">
                                                <span>Nome da provincia</span>
                                                <Field
                                                    type="text"
                                                    name="provincia"
                                                    placeholder="Nome da provincia"
                                                />
                                                {errors.provincia && touched.provincia ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.provincia}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div>
                                            <div className="criar_row">
                                                <span>Nome do bairro</span>
                                                <Field
                                                    type="text"
                                                    name="bairro"
                                                    placeholder="Nome do bairro"
                                                />
                                                {errors.bairro && touched.bairro ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.bairro}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>

                                    </div>

                                    <div

                                        className="criar_estrutura container">
                                        <div>

                                            <div className="criar_row">
                                                <span>Nome do municipio</span>
                                                <Field
                                                    type="text"
                                                    name="municipio"
                                                    placeholder="Nome do municipio"
                                                />
                                                {errors.municipio && touched.municipio ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.municipio}
                                                    </div>
                                                ) : null}
                                            </div>

                                        </div>





                                    </div>

                                    <div className="criar_info">
                                        <span>3. Descriçao do evento</span> <br />
                                        <span>Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!</span>
                                    </div>

                                    <div>
                                        <textarea
                                            id="criar_descricao"
                                            cols="30"
                                            rows="10"
                                            name="descricao"
                                            value={values.descricao}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.descricao && touched.descricao ? (
                                            <div className="container"
                                                style={{ color: "red" }}
                                            >

                                                {errors.descricao}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="criar_info">
                                        <span>4. Data e horário</span> <br />
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




