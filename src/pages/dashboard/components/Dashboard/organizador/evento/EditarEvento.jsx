import React, { useEffect, useState } from "react";
import Tabela from "../../../Tabela/Tabela";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';
import { format } from 'date-fns'


export default function EditarEvento() {

    const navigate = useNavigate()
    const { idUtilizador, idEvento } = useParams()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"



    const [data, setData] = useState([]);
    const [dataEvento, setDataEvento] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);

            const responseEvento = await axios.get(`http://localhost:3456/organizador/evento/lista/${idUtilizador}`);
            const newDataEvento = responseEvento.data;
            setDataEvento(newDataEvento);



            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);





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
            .min(15, "A descrição deve ter 15 ou mais caracteres")
            .max(4000, "A descrição deve ter 200 ou menos caracteres")
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
            .min(3, "O id da categoria deve conter 3 ou mais")
            .max(4000, "O id da categoria deve conter 4000 ou menos caracteres")
            .required("O id da categoria é obrigatório"),

    })



    return (
        <>


            {dataEvento.map(item => {
                if (item.id === idEvento) {

                    const dadosSalvos = {
                        nome: item.nome,
                        descricao: item.descricao,
                        dataInicio: format(new Date(item.dataInicio), "yyyy-MM-dd"),
                        dataTermino: format(new Date(item.dataTermino), "yyyy-MM-dd"),
                        horaInicio: format(new Date(item.horaInicio), "HH:mm:ss.SSS"),
                        horaTermino: format(new Date(item.horaTermino), "HH:mm:ss.SSS"),
                        foto: "",
                        provincia: item.provincia,
                        municipio: item.municipio,
                        bairro: item.bairro,
                        categoriaId: item.categoriaId,
                    }

                    const valoresInicias = {
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
                    }


                    return (
                        <>


                            <div key={Math.random().toString(36).substring(2)}>


                                <Formik
                                    enableReinitialize
                                    validationSchema={CriarEventoSchema}
                                    initialValues={dadosSalvos || valoresInicias}
                                    onSubmit={async (values) => {


                                        console.log(values)

                                        utilizador.map(item => {
                                            if (item.email === nomeUtilizador) {

                    axios.put(`http://localhost:3456/organizador/evento/detalhe/editarEvento/${idUtilizador}/${idEvento}`,
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

                                                        swal("Evento editado", `${values.nome} foi editado com sucesso. Agora podes adicionar outros detalhes.`, "success").then(async () => {
                                                            // navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}`)
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
                                                        type="submit">Editar</button>
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
                                                                    defaultValue={""}
                                                                    onChange={(e) =>

                                                                        values.categoriaId = e.target.value

                                                                    }
                                                                >
                                                                    {data.map(item => {
                                                                        return (
                                                                            <>
                                                                                <option
                                                                                    key={item.id + Math.random().toString(36).substring(2)}
                                                                                    value={item.id}
                                                                                >
                                                                                    {
                                                                                        item.nome}
                                                                                </option>

                                                                            </>)

                                                                    })}
                                                                    {errors.categoriaId && touched.categoriaId ? (
                                                                        <div className="container"
                                                                            style={{ color: "red" }}
                                                                        >

                                                                            {errors.categoriaId}
                                                                        </div>
                                                                    ) : null}
                                                                </select >
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



            })}




















        </>

    )

}




