import React, { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react"
import "./Header.css"
import Modal from "react-modal"

Modal.setAppElement("#root")

export default function Header() {

    const navigate = useNavigate()

    const largura = window.innerWidth
    let sizeIcon = 35

    const [overlary, setOverlay] = useState(() => {
        return {
            top: "0%",
            left: "0%",
            right: "0%",
            bootom: "0%"
        }
    })

    const [content, setContent] = useState(() => {
        return {
            left: 0, right: "0", background: ""
        }
    })

    
    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    const [offset, setOffset] = useState(() => { return 0 })

    function handleOpenModal() {
        setIsOpen(true)
        navigate("")
    }

    function handleCloseModal() {
        setIsOpen(false)
    }



    return (
        <>

            <nav className="" id="navbar">
                <div className="logo_input">
                    <Link to={"/"}>
                        <h2 className="" id="titulo">logo</h2>
                    </Link>

                </div>

                <ul id="menu">
                    <li className="text-white"><Link to={"/"}>Home</Link></li>
                    <li className="text-white"><Link to={"/"}>Sobre</Link></li>
                    <li className="text-white me-3">
                        <Link to={"/"}>Contatos</Link></li>

                    {/* <Link
                        to={""}
                        className="btn-primary text-white"
                        onClick={handleOpenModal}
                    > */}
                    <button className="btn-registra_login"
                        onClick={handleOpenModal}
                    >Registar-se</button>
                    {/* </Link> */}

                </ul>
            </nav>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: overlary.top,
                        left: overlary.left,
                        right: overlary.right,
                        bottom: overlary.bootom,
                        backgroundColor: 'none',
                    },
                    content: {
                        position: 'absolute',
                        top: '140px',
                        left: content.left,
                        right: content.right,
                        bottom: '190px',
                        border: '1px solid #ccc',
                        background: content.background,
                        overflow: 'none',
                        overflowY: "none",
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '0px',
                        textAlign: "center",
                    }
                }}
            >

                <div className="conta">
                    <X
                        size={sizeIcon}
                        onClick={handleCloseModal} className="btn_fechar_hidden ">Fechar</X>
                    <span>Cria sua conta</span>
                    <X
                        size={sizeIcon}
                        onClick={handleCloseModal} className="btn_fechar ">Fechar</X>
                </div>


                <div className="modal_botoes container">

                    <Link
                        to={"login"}
                        target="_blank"
                        className="btn btn-primary btn-registra text-white"
                        onClick={handleOpenModal}
                    >Participante</Link>

                    <Link
                        to={"login"}
                        target="_blank"
                        className="btn btn-primary btn-registra text-white"
                        onClick={handleOpenModal}
                    >Organizador de eventos</Link>

                </div>

            </Modal>

        </>
    )

}

