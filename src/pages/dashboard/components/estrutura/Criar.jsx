import React, { useEffect, useState } from "react";
import Tabela from "../Tabela/Tabela";
import Modal from "react-modal"
import { X } from "lucide-react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup"
import { v4 as uuid } from 'uuid';

import "./Criar.css"
import axios from "axios";


export default function Criar({


    // ! Todas as propriedades dos grupo 1, 2, 3 e 4
    /* Grupo 1 - informações */

    Pinformacao1,
    PsubInformacao1,
    PnomeBotao,

    /* Grupo 1 - inputs e selects */
    PselectDisplay1,
    Pselect1,
    PselectOption1,
    PselectDisplay2,
    Pselect2,
    PselectOption2,
    PselectName,
    PspanNomeInput1,
    PnameInput1,
    PplaceholderInput1,
    PtipoInput1,


    /* Grupo 2 - informações */
    Pinformacao2,
    PsubInformacao2,

    /* Grupo 2 - inputs e selects */
    PspanNomeInput2,
    PnameInput2,
    PplaceholderInput2,
    PtipoInput2,

    PspanNomeInput3,
    PnameInput3,
    PplaceholderInput3,
    PtipoInput3,

    PspanNomeInput4,
    PnameInput4,
    PplaceholderInput4,
    PtipoInput4,

    /* Grupo 3 - informações */
    Pinformacao3,
    PsubInformacao3,

    /* Grupo 3 - textearea */
    PtexteareaDisplay,
    PnameTextearea,


    /* Grupo 4 - informações */
    Pinformacao4,
    PsubInformacao4,

    /* Grupo 4 - inputs */
    PspanNomeInput5,
    PnameInput5,
    PtipoInput5,

    PspanNomeInput6,
    PnameInput6,
    PtipoInput6,

    PspanNomeInput7,
    PnameInput7,
    PtipoInput7,

    PspanNomeInput8,
    PnameInput8,
    PtipoInput8,

    // ! Todas as divs que serão ocultas
    PInput1Display,
    PInput2Display,
    PInput3Display,
    PInput4Display,
    PInput5Display,
    PInput6Display,
    PInput7Display,
    PInput8Display,
    PinputFileDisplay,

    // ! Todas as informacaçoes que serºao que serão ocultas
    PInformacao1Display,
    PInformacao2Display,
    PInformacao3Display,
    PInformacao4Display,

    PtabelaDisplay















}) {

    const navigate = useNavigate()

    Modal.setAppElement("#root")

    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    const [eventos, setEventos] = useState(() => {
        return []
    })

    const url = "http://localhost:3001/"

    async function CarregarDados() {
        await axios.get(url + "eventos").then(response =>
            setEventos(console.log(response.data))
        )
    }

    useEffect(() => {
        CarregarDados()
    }, [])


    Modal.setAppElement("#root")


    const EstruturaSchema = Yup.object().shape({
        nomeEvento: Yup.string()
            .min(5, "O nome do evento. Precisa ter menos de 5 caracteres")
            .max(50, "O nome do evento. Precisa ter mais de 50 caracteres")
        // .required("Nome do evento é obrigatorio.")
        ,
        nomeLocal: Yup.string()
            .min(5, "O nome do local. Precisa ter menos de 5 caracteres")
            .max(50, "O nome do local. Precisa ter mais de 50 caracteres")
        // .required('Nome do local é obrigatorio.')
        ,
        nomeBairro: Yup.string()
            .min(5, "O nome do bairro. Precisa ter menos de 5 caracteres")
            .max(50, "O nome do bairro. Precisa ter mais de 50 caracteres")
        // .required('Nome do bairro é obrigatorio.')
        ,
        nomeMunicipio: Yup.string()
            .min(5, "O nome do municipio. Precisa ter menos de 5 caracteres")
            .max(50, "O nome do municipio. Precisa ter mais de 50 caracteres")
        // .required('Nome do municipio é obrigatorio.')
        ,
        dataInicio: Yup.date()
            .min(new Date(), `O eventos devem ser marcados depois ${new Date()}`)
            .max(new Date("2023-12-31"), `Os eventos devem ser marcados no ano de ${new Date().getFullYear()}.`)
        // .required('Data de início do evento é obrigatorio.')
        ,
        horaInicio: Yup.string()
            .min(5, 'Os eventos só são marcados depois das 7h:00')
            .max(5, 'Os eventos só devem ser marcados até as 22h:00')
        // .required('Hora de início do evento é obrigatorio.')
        ,
        dataTermino: Yup.date()
            .min(new Date(), `O eventos devem ser marcados depois ${new Date()}`)
            .max(new Date("2023-12-31"), `Os eventos devem ser marcados no ano de ${new Date().getFullYear()}.`)
        // .required('Data de termino do evento é obrigatorio.')
        ,
        horaTermino: Yup.string()
            .min(5, 'Os eventos só são marcados depois das 7h:00')
            .max(5, 'Os eventos só devem ser marcados até as 22h:00')
        // .required('Hora de termino do evento é obrigatorio.')
        ,
        nomeTextearea: Yup.string()
            .min(30, "A descrição. Precisa ter menos de 5 caracteres")
            .max(900, "A descrição. Precisa ter mais de 500 caracteres")
        // .required('Descricação do evento é obrigatorio.')
        ,
        nomeCategoria: Yup.string()
            .min(4, "A categoria. Precisa ter menos de 5 caracteres")
            .max(80, "A categoria. Precisa ter mais de 50 caracteres")
        // .required('Nome da categória é obrigatorio.')
    })

    return (
        <>
            <Formik
                initialValues={{
                    id: uuid(),
                    nomeEvento: "",
                    nomeLocal: "",
                    nomeBairro: "",
                    nomeMunicipio: "",
                    dataInicio: "",
                    horaInicio: "",
                    dataTermino: "",
                    horaTermino: "",
                    nomeTextearea: '',
                    nomeCategoria: ""
                }}
                validationSchema={EstruturaSchema}
                onSubmit={values => {


                    if (values.dataInicio === values.dataTermino) {

                        axios.post(url + "eventos", {
                            id: values.id,
                            nomeEvento: values.nomeEvento,
                            nomeCategoria: values.nomeCategoria,
                            nomeTextearea: values.nomeTextearea,
                            dataInicio: values.dataInicio,
                            dataTermino: values.dataTermino,
                            horaInicio: values.horaInicio,
                            horaTermino: values.horaTermino,
                            nomeBairro: values.nomeBairro,
                            nomeLocal: values.nomeBairro,
                            nomeMunicipio: values.nomeMunicipio,
                            foto: "",
                        }).then((response) => {
                            setTimeout(() => {
                                navigate('/organizador/evento/listar')

                                // handleOpenModal()
                            }, 1200)


                        }).catch((error) => {
                            console.log(error)
                        })


                    } else {
                        alert("A data de inicio e termino deve ser no mesmo dia")
                    }


                    // setEventos((old) => {
                    //     return old = [...eventos, values]
                    // })


                    // console.log(eventos)


                }}

            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (

                    <Form className="container" onSubmit={handleSubmit}>

                        <div className="criar container">
                            <div className="criar_info_criar" style={{ display: `${PInformacao1Display}` }}>
                                <div

                                    className="criar_info">
                                    <span>{Pinformacao1}</span> <br />
                                    <span>{PsubInformacao1}</span>
                                </div>
                                <button
                                    className="PnomeBotao"
                                    type="submit">{PnomeBotao}</button>
                            </div>
                            <div className="criar_main ">

                                <div className="criar_estrutura container">

                                    <div
                                        style={{ display: `${PselectDisplay1}` }}>
                                        <div className="criar_row">
                                            <span>{Pselect1}</span>
                                            <select name="" id="">
                                                <option>{PselectOption1}</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div
                                        style={{ display: `${PInput1Display}` }}
                                    >

                                        <div className="criar_row">
                                            <span>{PspanNomeInput1}</span>
                                            <input
                                                name={PnameInput1}
                                                type={PtipoInput1}
                                                placeholder={PplaceholderInput1}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nomeEvento}
                                            />
                                            {errors.nomeEvento && touched.nomeEvento ? (
                                                <div className="error_Yup">{errors.nomeEvento}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div
                                        style={{
                                            display: `${PselectDisplay2}`
                                        }}>
                                        <div className="criar_row">
                                            <span>{Pselect2}</span>
                                            <select
                                                name={PselectName}
                                                id=""
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option value={""}>{PselectOption2}</option>
                                                <option value={"teatro"}>Teatro</option>
                                                <option value={"concerto"}>Concerto</option>
                                                <option value={"seminário"}>Seminário</option>
                                            </select>

                                            {errors.nomeCategoria && touched.nomeCategoria ? (
                                                <div className="error_Yup">{errors.nomeCategoria}</div>
                                            ) : null}
                                        </div>

                                    </div>


                                    <div
                                        style={{ display: `${PinputFileDisplay}` }}
                                    >
                                        <div className="criar_row">
                                            <span>Imagem</span>
                                            <input type="file" name="" id="file" />
                                            <label htmlFor="file" className="file_image">
                                                Adicionar foto
                                            </label>
                                        </div>
                                    </div>

                                </div>




                                <div
                                    style={{
                                        display: `${PInformacao2Display}`
                                    }}
                                    className="criar_info">
                                    <span>{Pinformacao2}</span> <br />
                                    <span>{PsubInformacao2}</span>

                                </div>

                                <div

                                    className="criar_estrutura container">
                                    <div>

                                        <div
                                            style={{
                                                display: `${PInput2Display}`
                                            }}

                                            className="criar_row">
                                            <span>{PspanNomeInput2}</span>
                                            <input
                                                name={PnameInput2}
                                                type={PtipoInput2}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nomeLocal}
                                                placeholder={PplaceholderInput2} />
                                            {errors.nomeLocal && touched.nomeLocal ? (
                                                <div className="error_Yup">{errors.nomeLocal}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div>
                                        <div
                                            style={{
                                                display: `${PInput3Display}`
                                            }}

                                            className="criar_row">
                                            <span>{PspanNomeInput3}</span>
                                            <input
                                                name={PnameInput3}
                                                type={PtipoInput3}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nomeBairro}
                                                placeholder={PplaceholderInput3} />
                                            {errors.nomeBairro && touched.nomeBairro ? (
                                                <div className="error_Yup">{errors.nomeBairro}</div>
                                            ) : null}
                                        </div>
                                    </div>



                                </div>

                                <div

                                    className="criar_estrutura container">
                                    <div>

                                        <div
                                            style={{
                                                display: `${PInput4Display}`
                                            }}
                                            className="criar_row">
                                            <span>{PspanNomeInput4}</span>
                                            <input
                                                name={PnameInput4}
                                                type={PtipoInput4}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nomeMunicipio}
                                                placeholder={PplaceholderInput4} />
                                            {errors.nomeMunicipio && touched.nomeMunicipio ? (
                                                <div className="error_Yup">{errors.nomeMunicipio}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div style={{ display: "none" }}>
                                        <div className="criar_row">
                                            <span>Bairro</span>
                                            <input type="text"
                                                name={PnameTextearea}
                                                placeholder="Nome do evento" />
                                        </div>

                                    </div>



                                </div>

                                <div
                                    style={{
                                        display: `${PInformacao3Display}`
                                    }}
                                    className="criar_info">
                                    <span>{Pinformacao3}</span> <br />
                                    <span>{PsubInformacao3}</span>
                                </div>

                                <div>
                                    <textarea
                                        style={{ display: `${PtexteareaDisplay}` }}
                                        name={PnameTextearea}
                                        id="criar_descricao"
                                        cols="30"
                                        rows="10"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nomeTextearea}

                                    ></textarea>
                                    {errors.nomeTextearea && touched.nomeTextearea ? (
                                        <div className="error_Yup">{errors.nomeTextearea}</div>
                                    ) : null}
                                </div>

                                <div
                                    style={{ display: `${PInformacao4Display}` }}
                                    className="criar_info">
                                    <span>{Pinformacao4}</span> <br />
                                    <span>{PsubInformacao4}</span>
                                </div>

                                <div
                                    style={{ display: `${PInput5Display}` }}
                                    className="criar_date_time">
                                    <div

                                    >
                                        <div className="criar_row">
                                            <span>{PspanNomeInput5}</span>
                                            <input
                                                type={PtipoInput5}
                                                name={PnameInput5}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dataInicio}

                                            />

                                            {errors.dataInicio && touched.dataInicio ? (
                                                <div className="error_Yup">{errors.dataInicio}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div>

                                        <div
                                            style={{ display: `${PInput6Display}` }}

                                            className="criar_row">
                                            <span>{PspanNomeInput6}</span>
                                            <input
                                                type={PtipoInput6}
                                                name={PnameInput6}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.horaInicio}

                                            />

                                            {errors.horaInicio && touched.horaInicio ? (
                                                <div className="error_Yup">{errors.horaInicio}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div>

                                        <div
                                            style={{ display: `${PInput7Display}` }}

                                            className="criar_row">
                                            <span>{PspanNomeInput7}</span>
                                            <input
                                                type={PtipoInput7}
                                                name={PnameInput7}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dataTermino}

                                            />
                                            {errors.dataTermino && touched.dataTermino ? (
                                                <div className="error_Yup">{errors.dataTermino}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <div>

                                        <div
                                            style={{ display: `${PInput8Display}` }}

                                            className="criar_row">
                                            <span>{PspanNomeInput8}</span>
                                            <input
                                                type={PtipoInput8}
                                                name={PnameInput8}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.horaTermino}
                                            />
                                            {errors.horaTermino && touched.horaTermino ? (
                                                <div className="error_Yup">{errors.horaTermino}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                </div>
                                <div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: `${PtabelaDisplay}` }}>
                            <Tabela />
                        </div>

                  
                    </Form>
                )}
            </Formik>

        </>

    )

}

