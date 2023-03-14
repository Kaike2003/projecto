import React, { useState } from "react";
import "./Visualizar_ingresso.css"
import { CalendarDays, Timer, Mic, MapPin, Ticket, Info, AlignJustify } from 'lucide-react';
import Img from "../../assets/img/palestra.jpg"
import { X } from "lucide-react"

import Palestrante from "../Palestrante/Palestrante";
import Header from "../../components/Header/Header";

import Modal from "react-modal"
import Compra from "./components/Compra";

Modal.setAppElement("#root")

const LIMIT = 12


export default function Visualizar_ingresso() {

    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    const [modalIsOpenPalestrante, setIsOpenPalestrante] = useState(() => {
        return false
    })

    const [offset, setOffset] = useState(() => { return 0 })

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }


    function handleOpenModal_palestrante() {
        setIsOpenPalestrante(true)
    }

    function handleCloseModal_palestrante() {
        setIsOpenPalestrante(false)
    }

    const sizeIcone = 35

    return (
        <>
            <Header></Header>
            <div className="invisivel_visualizar"></div>

            <div className="visualiarLadosPai">
                <div className="visualiarLados">

                    <div className="ladoFoto">
                        <img src={Img} alt="imagem do evento" />
                    </div>

                    <div className="ladoInformacao">

                        <div className="ladoInformacaoDiv">

                            <div className="ladoInformacaoSpan">
                                <span>Programação Web</span>
                                <span>Palestra</span>
                            </div>

                            <div>

                                <div className="template_detalhe">

                                    <div className="template_detalhe_2">
                                        <div className="icone_texto">
                                            <Info size={sizeIcone}></Info>
                                            <p className="texto"> Estado do evento - Desponivel</p>
                                        </div >

                                        <div className="icone_texto">
                                            <MapPin size={sizeIcone}>
                                            </MapPin>
                                            <p className="texto">Luanda - Universidade Medotista</p>
                                        </div >
                                    </div>

                                    <div className="template_detalhe_2">
                                        <div className="icone_texto">
                                            <CalendarDays size={sizeIcone}>
                                            </CalendarDays>
                                            <p className="texto"> 14/03/2023 </p>
                                        </div >

                                        <div className="icone_texto">
                                            <CalendarDays size={sizeIcone} >
                                            </CalendarDays>
                                            <p className="texto"> 15/03/2023 </p>
                                        </div >
                                    </div>

                                    <div className="template_detalhe_2">
                                        <div className="icone_texto">
                                            <Mic size={sizeIcone}></Mic>
                                            <p className="texto">Kaike Bartolomeu</p>
                                        </div>

                                        <div className="icone_texto">
                                            <Timer size={sizeIcone}></Timer>
                                            <p className="texto">9:00</p>
                                        </div>

                                    </div>

                                    <div className="template_detalhe_2">
                                        <div className="icone_texto">
                                            <Ticket size={sizeIcone}></Ticket>
                                            <p className="texto"> bilhetes desponiveis - 100</p>
                                        </div>

                                        <div className="icone_texto">
                                            <Ticket size={sizeIcone}></Ticket>
                                            <p className="texto"> bilhetes - 200</p>
                                        </div>

                                    </div>


                                    <div className="icone_texto">
                                        <p className="
                                        texto 
                                            textoParagrafo">As linguagens de programação web são utilizadas especificamente para o desenvolvimentos das camadas de apresentação e de lógica de negócio de web sites, portais e aplicações web em geral. </p>
                                    </div>

                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={handleCloseModal}
                                        style={{
                                            overlay: {
                                                position: 'fixed',
                                                top: "7%",
                                                left: "30%",
                                                right: "30%",
                                                bottom: "0%",
                                                backgroundColor: 'none'
                                            },
                                            content: {
                                                position: 'absolute',
                                                top: '40px',
                                                left: '40px',
                                                right: '40px',
                                                bottom: '40px',
                                                border: '1px solid #ccc',
                                                background: '#fff',
                                                overflow: 'auto',
                                                WebkitOverflowScrolling: 'touch',
                                                borderRadius: '15px',
                                                outline: 'none',
                                                padding: '0px'
                                            }
                                        }}
                                    >

<div
                                         className="compra container">
                                            <X
                                                size={35}
                                                onClick={handleCloseModal} className="btn_fechar_hidden ">Fechar</X>
                                            <span>Compra de bilhetes</span>
                                            <X
                                                size={35}
                                                onClick={handleCloseModal} className="btn_fechar ">Fechar</X>
                                        </div>

                                      <div className="visualizar_compra container">
                                      <Compra></Compra>
                                      </div>

                                    </Modal>

                                    <Modal
                                        isOpen={modalIsOpenPalestrante}
                                        onRequestClose={handleCloseModal_palestrante}
                                        style={{
                                            overlay: {
                                                position: 'fixed',
                                                top: "3%",
                                                left: "10%",
                                                right: "10%",
                                                bottom: "-5%",
                                                backgroundColor: 'none',
                                            },
                                            content: {
                                                position: 'absolute',
                                                top: '40px',
                                                left: '40px',
                                                right: '40px',
                                                bottom: '40px',
                                                border: '1px solid #ccc',
                                                background: '#fff',
                                                overflow: 'none',
                                                WebkitOverflowScrolling: 'touch',
                                                borderRadius: '15px',
                                                outline: 'none',
                                                padding: '0px',

                                            }
                                        }}
                                    >

                                        <div
                                         className="palestrante container">
                                            <X
                                                size={35}
                                                onClick={handleCloseModal} className="btn_fechar_hidden ">Fechar</X>    
                                            <span>Palestrantes</span>
                                            <X
                                                size={35}
                                                onClick={handleCloseModal_palestrante} className="btn_fechar ">Fechar</X>
                                        </div>

                                        <Palestrante></Palestrante>


                                    </Modal>

                                    <div className="ladoInformacaoBotao">
                                        <button
                                            onClick={handleOpenModal}
                                            className="
                                    btn btn-primary">Fazer compra</button>
                                        <button
                                            onClick={handleOpenModal_palestrante}
                                            className="
                                    btn btn-primary"
                                        >Lista de palestrantes</button>
                                    </div>

                                </div>


                            </div>

                        </div>



                    </div>

                </div>



            </div>

        </>
    )

}