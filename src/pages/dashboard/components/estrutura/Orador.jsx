import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup"
import { v4 as uuid } from 'uuid';

// import "./Criar.css"
import axios from "axios";
import Rotas from "../../../../routes";





export default function Orador({

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

    PtabelaDisplay,
}) {
    const { id } = useParams()
    const navigate = useNavigate()

    console.log(typeof (id))

    const url = "http://localhost:3001/"


    const [eventos, setEventos] = useState(() => {
        return []
    })


    async function CarregarDados() {
        await axios.get(url + "eventos/" + id).then(response =>
            setEventos(response.data)
        )
    }

    useEffect(() => {

        CarregarDados()
    }, [])


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

            {/* <h5>{id}</h5> */}

            {/* <div>
                <NavLink to={`/organizador/detalhe/editar/${id}`}>Editar</NavLink>
                <NavLink to={`/organizador/detalhe/foto/${id}`}>Foto</NavLink>



            </div> */}


            <div className="titulo_evento_lista container" >
                <div className="titulo_evento container">Detalhe</div>
                <div className="eventos_lista container">
                    <NavLink
                        to={`/organizador/detalhe/editar/${id}`}
                    >

                        <span>Editar Evento</span>

                    </NavLink>


                    <NavLink
                        to={`/organizador/detalhe/foto/${id}`}
                    >

                        <span>Foto</span>

                    </NavLink>

                    <NavLink
                        to={`/organizador/detalhe/bilhete/${id}`}
                    >

                        <span>Bilhete</span>

                    </NavLink>

                    <NavLink
                        to={`/organizador/detalhe/orador/${id}`}
                    >

                        <span>Orador</span>

                    </NavLink>



                    <NavLink
                        to={`/organizador/detalhe/palestrante/${id}`}

                    >

                        <span>Palestrante</span>

                    </NavLink>

                    <NavLink
                        to={`/organizador/detalhe/listar/${id}`}

                    >

                        <span>Listar</span>

                    </NavLink>

                    {/*
                    <NavLink
                        to={`${rota5}`}
                    >

                        <span>{lista5}</span>

                    </NavLink> */}
                </div>
            </div>


            <Formik


                initialValues={{
                    nomeOrador: ""
                }}

                // enableReinitialize
                // validationSchema={EstruturaSchema}
                onSubmit={values => {


                    console.log(values)


                    axios.post(url + "orador", {
                        id: uuid(),
                        idEvento: eventos.id,
                        nomeOrador: values.nomeOrador
                    }).then((response) => {
                        setTimeout(() => {
                            console.log(response)
                            // navigate('/organizador/evento/listar')
                            // handleOpenModal()
                            // alert("olá mundo")
                        }, 1200)
                    }).catch((error) => {
                        console.log(error)
                    })

                    // console.log(values)

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



                        <div className="criar container"
                        >
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
                            <div className="criar_main " style={{ display: "" }}>

                                <div className="criar_estrutura container">


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
                                                value={values.nomeOrador}
                                            />
                                            {errors.nomeOrador && touched.nome ? (
                                                <div className="error_Yup">{errors.nomeOrador}</div>
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



        </>

    )

}
