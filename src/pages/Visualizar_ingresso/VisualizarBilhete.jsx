import React, { useState, useEffect } from "react";
import "./Visualizar_ingresso.css"
import { CalendarDays, Timer, Mic, MapPin, Ticket, Info, AlignJustify } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Img from "../../assets/img/palestra.jpg"
import { X } from "lucide-react"
import Swal from 'sweetalert2'

import Palestrante from "../Palestrante/Palestrante";
import Header from "../../components/Header/Header";
import Modal from "react-modal"
import Compra from "./components/Compra";
import axios from "axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import * as Yup from 'yup';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



const urlImage = "http://localhost:3456/public/upload/evento/"

export default function VisualizarBilhete() {


    const { idEvento } = useParams()
    const [data, setData] = useState([]);
    const [dataListaBilhete, setDataListaBilhete] = useState([]);
    const [dataListaBilheteAplicaco, setDataListaBilheteAplicacao] = useState([]);
    const [dataListaEvento, setDataListaEvento] = useState([]);
    const [dataListaOrador, setDataListaOrador] = useState([]);
    const [selecionar, setSelecionar] = useState(() => {
        return []
    })
    const [dataListaCategoria, setDataListaCategoria] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState([]);
    const [emailUtilizador, setEmailUtilizador] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/eventos/publicados');
            const newData = response.data;
            setData(newData);

            const responseListaBilhete = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete`);
            const newDataListaBilhete = responseListaBilhete.data;
            setDataListaBilhete(newDataListaBilhete);

            const responseListaBilheteAplicacao = await axios.get(`http://localhost:3456/admin/tipoBilhete/todosTipobilhete`);
            const newDataListaBilheteAplicacao = responseListaBilheteAplicacao.data;
            setDataListaBilheteAplicacao(newDataListaBilheteAplicacao);

            const responseListaEvento = await axios.get(`http://localhost:3456/participante/eventos/visualizarEvento/${idEvento}`);
            const newDataListaEvento = responseListaEvento.data;
            setDataListaEvento(newDataListaEvento);

            const responseListaOrador = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador`);
            const newDataListaEventoOrador = responseListaOrador.data;
            setDataListaOrador(newDataListaEventoOrador);


            const responseListaCategoria = await axios.get('http://localhost:3456/admin/listarTodasCategorias');
            const newDataListaCategoria = responseListaCategoria.data;
            setDataListaCategoria(newDataListaCategoria);

            const responseUtilizador = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newDataUtlizador = responseUtilizador.data;
            setEmailUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }


        }

        fetchData();
    }, []);

    console.log("Evento selecionando", dataListaEvento)
    console.log("Bilhetes do evento selecionado", dataListaBilhete)
    console.log("Lista de oradores", dataListaOrador)
    console.log("Selecionar", selecionar)

    // Validações com o yup
    const CriarReservaEvento = Yup.object().shape({
        quantidade: Yup.number().integer()
            .min(1, "Número minimo")
            .max(999, "Número máximo")
            .required("Quantidade é obrigátoria")
        ,
        tipoBilheteId: Yup.string()
            .min(10, "Caracteres minimos")
            .required('O tipo de bilhete é obrigatorio')
        ,
    })



    function estadoEvento(estadoEvento) {

        switch (estadoEvento) {
            case "DESPONIVEL":
                return (
                    <>
                        <span style={{ color: "green", fontWeight: "450" }} >DESPONIVEL</span>
                    </>
                )
                break;

            case "FINALIZADO":
                return (
                    <>
                        <span style={{ color: "red" }} >TERMINADO</span>
                    </>
                )
                break;

            case "CANCELADO":
                return (
                    <>
                        <span style={{ color: "red" }} >TERMINADO</span>
                    </>
                )
                break;

            case "ADECORRER":
                return (
                    <>
                        <span style={{ color: "red" }} >TERMINADO</span>
                    </>
                )
                break;


            default:
                break;
        }

    }

    const sizeIcone = 28

    return (
        <>
            <div className="invisivel_visualizar"></div>

            <div className="visualiarLadosPai container">
                <div className="visualiarLados">

                    {[dataListaEvento].map(item => {
                        return (
                            <>

                                <div className="ladoFoto">
                                    <img src={urlImage + item.foto} alt="imagem do evento" />
                                </div>



                            </>
                        )
                    })}




                    <div className="ladoInformacao container">

                        <div className="ladoInformacaoDiv">

                            {[dataListaEvento].map(item => {
                                if (item.id === idEvento) {

                                    return dataListaCategoria.map(itemCategoria => {
                                        if (item.categoriaId === itemCategoria.id) {
                                            return (
                                                <>
                                                    <div className="ladoInformacaoSpan">
                                                        <span>{item.nome}</span>
                                                        <span>{itemCategoria.nome}</span>
                                                    </div>

                                                    <div>

                                                        <div className="template_detalhe">

                                                            <div className="template_detalhe_2">
                                                                <div className="icone_texto">
                                                                    <Info size={sizeIcone}></Info>
                                                                    <p className="texto"> Evento  {estadoEvento(item.estado)}</p>
                                                                </div >

                                                                <div className="icone_texto">
                                                                    <MapPin size={sizeIcone}>
                                                                    </MapPin>
                                                                    <p className="texto">{item.provincia} - {item.municipio} -{item.bairro}</p>
                                                                </div >


                                                            </div>

                                                            <div className="template_detalhe_2">
                                                                <div className="icone_texto">
                                                                    <CalendarDays size={sizeIcone}>
                                                                    </CalendarDays>
                                                                    <p className="texto">
                                                                        {format(new Date(item.dataInicio), 'dd/MM/yyyy')} </p>
                                                                </div >

                                                                <div className="icone_texto">
                                                                    <CalendarDays size={sizeIcone} >
                                                                    </CalendarDays>
                                                                    <p className="texto">
                                                                        {format(new Date(item.dataTermino), 'dd/MM/yyyy')}
                                                                    </p>
                                                                </div >
                                                            </div>

                                                            <div className="template_detalhe_2">

                                                                <div className="icone_texto">
                                                                    <Timer size={sizeIcone}></Timer>
                                                                    <p className="texto">
                                                                        {format(new Date(item.horaInicio), "HH:mm")}</p>
                                                                </div>

                                                                <div className="icone_texto">
                                                                    <Timer size={sizeIcone}></Timer>
                                                                    <p className="texto"> {format(new Date(item.horaTermino), "HH:mm")}</p>
                                                                </div>

                                                            </div>


                                                            <div className="template_detalhe_2">

                                                                <div className="icone_texto">
                                                                    <Mic size={sizeIcone}></Mic>
                                                                    <p className="texto">{

                                                                        // [item.orador[0]?.orador.nome]

                                                                        dataListaOrador.map(itemOrador => {
                                                                            return (
                                                                                <>
                                                                                    <span>{itemOrador.nome}, </span>
                                                                                </>
                                                                            )
                                                                        })



                                                                    } </p>
                                                                </div>

                                                            </div>


                                                            <div className="" id="desc">
                                                                <p

                                                                    className="textoParagrafo">{item.descricao}</p>
                                                            </div>



                                                            <div>
                                                                <Formik
                                                                    validationSchema={CriarReservaEvento}
                                                                    initialValues={{
                                                                        quantidade: "",
                                                                        tipoBilheteId: ""
                                                                    }}
                                                                    onSubmit={async (values) => {

                                                                        console.log("Valores da valicação", values)

                                                                        emailUtilizador.map(item => {
                                                                            if (item.email === nomeUtilizador) {
                                                                                return (

                                                                                    axios.post(`http://localhost:3456/participante/eventos/visualizarEvento/${idEvento}/reserva/${item.id}`,
                                                                                        {
                                                                                            quantidade: values.quantidade,
                                                                                            bilheteId: values.tipoBilheteId

                                                                                        }).then(() => {

                                                                                            Swal.fire({
                                                                                                position: 'top-end',
                                                                                                icon: 'success',
                                                                                                title: 'Reserva criada com sucesso.',
                                                                                                showConfirmButton: false,
                                                                                                timer: 1500
                                                                                            }).then(() => {


                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    html: `${item.nome} tens 24horas para poder fazer o pagamento da reserva. E só assim terás acesso ao código da sua reserva para poderes participar do evento. Caso contrário irás perder sua/s reserva/s.`,
                                                                                                    showConfirmButton: true,
                                                                                                })



                                                                                            })

                                                                                        }).catch((error) => {


                                                                                            Swal.fire({
                                                                                                icon: 'warning',
                                                                                                html: `${error.response.data}`,
                                                                                                showConfirmButton: true,
                                                                                            })


                                                                                        })


                                                                                )
                                                                            }
                                                                        })




                                                                    }}
                                                                >
                                                                    {({ isSubmitting, errors, touched, values, handleBlur, handleChange }) => (
                                                                        <Form>


                                                                            <div className="formReserva">

                                                                                <div>
                                                                                    <select name="tipoBilheteId" className="selectTipoBilhete"
                                                                                        // onChange={(e) => {
                                                                                        //     setSelecionar(e.target.value)
                                                                                        // }}

                                                                                        onChange={handleChange}
                                                                                        onBlur={handleBlur}
                                                                                    >
                                                                                        <option value=""> Tipo de bilhete   </option>
                                                                                        {dataListaBilhete.map(itemListaBilhete => {
                                                                                            return (
                                                                                                <>
                                                                                                    {

                                                                                                        dataListaBilheteAplicaco.map(itemListaBilheteAplicacao => {
                                                                                                            if (itemListaBilhete.tipoEventoId === itemListaBilheteAplicacao.id) {
                                                                                                                return (
                                                                                                                    <>

                                                                                                                        <option value={itemListaBilhete.id}>
                                                                                                                            {itemListaBilheteAplicacao.nome}  -
                                                                                                                            <p className="texto"> bilhetes desponiveis: {itemListaBilhete.quantidade}</p>
                                                                                                                        </option>

                                                                                                                    </>
                                                                                                                )
                                                                                                            }


                                                                                                        })

                                                                                                    }</>
                                                                                            )


                                                                                        })}
                                                                                    </select>
                                                                                    {errors.tipoBilheteId && touched.tipoBilheteId ? (
                                                                                        <div className="container"
                                                                                            style={{ color: "red" }}
                                                                                        >

                                                                                            {errors.tipoBilheteId}
                                                                                        </div>
                                                                                    ) : null}

                                                                                </div>


                                                                                <div>
                                                                                    <Field
                                                                                        className="selectTipoBilhete"
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




                                                                            <div className="botoesVisualizar">
                                                                                <button
                                                                                    type="submit"
                                                                                    disabled={isSubmitting}
                                                                                >Reservar</button>
                                                                                <button>Lista de palestrantes</button>
                                                                            </div>





                                                                        </Form>
                                                                    )}
                                                                </Formik>
                                                            </div>




                                                        </div>


                                                    </div>


                                                </>
                                            )
                                        }
                                    })

                                }
                            })}

                        </div>



                    </div>

                </div>



            </div>

        </>
    )

}

