import React, { useState, useEffect, useRef } from "react";
import "./Visualizar_ingresso.css"
import { CalendarDays, Timer, Mic, MapPin, Ticket, Info, AlignJustify } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
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
import Card_Palestrante from "../Palestrante/Card_Palestrante/Card_Palestrante";



const urlImage = "http://localhost:3456/public/upload/evento/"
const urlImagePalestrante = "http://localhost:3456/public/upload/palestrante/"


Modal.setAppElement("#root")

export default function VisualizarBilheteSemSessao() {

    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    const { idEvento } = useParams()
    const [data, setData] = useState([]);
    const [dataListaBilhete, setDataListaBilhete] = useState([]);
    const [dataListaBilheteAplicaco, setDataListaBilheteAplicacao] = useState([]);
    const [dataListaEvento, setDataListaEvento] = useState([]);
    const [dataListaPalestrante, setDataListaPalestrante] = useState([])
    const [dataListaOrador, setDataListaOrador] = useState([]);
    const [selecionar, setSelecionar] = useState(() => {
        return []
    })
    const [dataListaCategoria, setDataListaCategoria] = useState([]);
    const [emailUtilizador, setEmailUtilizador] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/eventos/publicados');
            const newData = response.data;
            setData(newData);

            const responseListaBilhete = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete`);
            const newDataListaBilhete = responseListaBilhete.data;
            setDataListaBilhete(newDataListaBilhete);


            const responseListaPalestrante = await axios.get(`http://localhost:3456/organizador//evento/detalhe/editar/${idEvento}/palestrante`);
            const newDataListaPalestrante = responseListaPalestrante.data;
            setDataListaPalestrante(newDataListaPalestrante);


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

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setEmailUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setEmailUtilizador(localStorage.getItem("@Auth:email"))
            }


        }

        fetchData();
    }, []);

    // console.log("Evento selecionando", dataListaEvento)
    // console.log("Bilhetes do evento selecionado", dataListaBilhete)
    // console.log("Lista de oradores", dataListaOrador)
    // console.log("Selecionar", selecionar)

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



    //console.log("Estado do evento", estadoEvento)



    function estadoEvento(estadoEvento) {


        switch (estadoEvento) {
            case "DESPONIVEL":
                return (
                    <>
                        <span style={{ color: "rgb(7, 145, 104)", fontWeight: "450" }} >DISPONÍVEL</span>
                    </>
                )
                break;

            case "FINALIZADO":
                return (
                    <>
                        <span style={{ color: "red", fontWeight: "450" }} >TERMINADO</span>
                    </>
                )
                break;

            case "CANCELADO":
                return (
                    <>
                        <span style={{ color: "red", fontWeight: "450" }} >TERMINADO</span>
                    </>
                )
                break;

            case "ADECORRER":
                return (
                    <>
                        <span style={{ color: "#ff9716", fontWeight: "450" }} >A DECORRER</span>
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

            <div className="visualizarLadosPaiOrganizador container">
                <div className="visualiarLadosOrganizador">

                    {[dataListaEvento].map(item => {
                        return (
                            <>

                                <div className="ladoFoto">
                                    <img src={urlImage + item.foto} alt="imagem do evento" />
                                </div>



                            </>
                        )
                    })}




                    <div className="ladoInformacaoOrganizador">

                        <div className="ladoInformacaoDivOrganizador">

                            {[dataListaEvento].map(item => {
                                if (item.id === idEvento) {

                                    return dataListaCategoria.map(itemCategoria => {
                                        if (item.categoriaId === itemCategoria.id) {
                                            return (
                                                <>

                                                    <div className="ladoInformacaoSpanOrganizador">
                                                        <span className="container tituloEvento">{item.nome}</span>
                                                        <span>{itemCategoria.nome} - Evento {estadoEvento(item.estado)}</span>

                                                    </div>

                                                    <div>

                                                        <div className="template_detalhe container">

                                                            <div className="template_detalhe_2">

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

                                                            <div className="icone_texto">
                                                                <MapPin size={sizeIcone}>
                                                                </MapPin>
                                                                <p className="texto">{item.provincia} - {item.municipio} -{item.bairro}</p>
                                                            </div >


                                                            <div className="" id="desc">
                                                                <p

                                                                    className="textoParagrafo">{item.descricao}</p>
                                                            </div>

                                                            <div className="ibanVisualizarEvento">

                                                                <span><span>IBAN</span>: AO06.0040.0000.5738.3059.1016.9</span>

                                                            </div>




                                                            <div>
                                                                <Formik
                                                                    validationSchema={CriarReservaEvento}
                                                                    initialValues={{
                                                                        quantidade: "",
                                                                        tipoBilheteId: ""
                                                                    }}
                                                                    onSubmit={async (values) => {


                                                                        Swal.fire({
                                                                            icon: 'info',
                                                                            html: "Para poder comprar bilhete, precisa iniciar sessão na nossa aplicação",
                                                                            showConfirmButton: false,
                                                                            timer: 3500
                                                                        })





                                                                    }}
                                                                >
                                                                    {({ isSubmitting, errors, touched, values, handleBlur, handleChange }) => (
                                                                        <Form>


                                                                            <div className="formReserva">

                                                                                <div>
                                                                                    <select name="tipoBilheteId"
                                                                                        className={errors.tipoBilheteId && touched.tipoBilheteId ? ("selectTipoBilheteERRO") : "selectTipoBilhete"}

                                                                                        onChange={handleChange}
                                                                                        onBlur={handleBlur}
                                                                                    >
                                                                                        <option value=""> Tipo de bilhete - Quantidade - Preço  </option>
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
                                                                                                                            <p className="texto"> bilhetes desponiveis: {itemListaBilhete.quantidade} - preço: {itemListaBilhete.preco} kz</p>
                                                                                                                        </option>

                                                                                                                    </>
                                                                                                                )
                                                                                                            }


                                                                                                        })

                                                                                                    }</>
                                                                                            )


                                                                                        })}
                                                                                    </select>

                                                                                </div>



                                                                            </div>

                                                                            <div className="quantidadeComprarPalestranteOrador">

                                                                                <div
                                                                                >
                                                                                    <Field
                                                                                        className={errors.quantidade && touched.quantidade ? ("selectTipoBilheteERRO") : "selectTipoBilhete"}
                                                                                        type="number"
                                                                                        name="quantidade"
                                                                                        min="0"
                                                                                        placeholder="Quantidade de bilhete"
                                                                                    />

                                                                                </div>





                                                                                <button
                                                                                    className="btn_comprarSemSessao"
                                                                                    type="submit"
                                                                                    disabled={isSubmitting}
                                                                                >Comprar</button>
                                                                                <button
                                                                                    className="btn_comprarSemSessao"
                                                                                    type="button"
                                                                                    // onClick={ListarPalestrante}
                                                                                    onClick={openModal}
                                                                                >Palestrantes e Oradores</button>


                                                                            </div>




                                                                        </Form>
                                                                    )}
                                                                </Formik>
                                                            </div>

                                                            <Modal
                                                                isOpen={modalIsOpen}
                                                                onRequestClose={closeModal}
                                                                className="Modal"
                                                                overlayClassName="Overlay"
                                                                contentLabel="Exemplo de modal"
                                                            >
                                                                <div className="bntFecharModal container">
                                                                    <button
                                                                        style={{ visibility: "hidden" }}
                                                                        onClick={closeModal}
                                                                    >
                                                                        Fechar
                                                                    </button>
                                                                    <X
                                                                        size={30}
                                                                        onClick={closeModal}
                                                                    >
                                                                        Fechar
                                                                    </X>
                                                                </div>

                                                                <div className="container">
                                                                    <span className="palestrantes_oradores">Oradores</span>
                                                                    <ul className="oradorMenu">
                                                                        {dataListaOrador.map(item => {
                                                                            return <li>{item.nome}</li>
                                                                        })}
                                                                    </ul>
                                                                </div>

                                                                <div className="container">
                                                                    <span className="palestrantes_oradores">
                                                                        Palestrantes
                                                                    </span>
                                                                    <div className="section_palestrante">
                                                                        {dataListaPalestrante.map(item => {
                                                                            return (
                                                                                <>
                                                                                    <Card_Palestrante
                                                                                        image={urlImagePalestrante + item.foto}
                                                                                        name={item.nome}
                                                                                        id={item.id}
                                                                                        key={item.id}
                                                                                        blog={item.blog}
                                                                                    />

                                                                                </>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>

                                                            </Modal>




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

