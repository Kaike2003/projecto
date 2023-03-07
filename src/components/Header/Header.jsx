import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { X } from "lucide-react"
import "./Header.css"



import Modal from "react-modal"

Modal.setAppElement("#root")

export default function Header() {

    const largura = window.innerWidth
    const altura = window.innerHeight

    console.log({"altura": altura, "largura": largura})



    const [modalIsOpen, setIsOpen] = useState(() => {
        return false
    })

    const [offset, setOffset] = useState(() => { return 0 })

    function handleOpenModal() {
        setIsOpen(true)
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

                    <Link
                        to={""}
                        className="btn btn-primary btn-registra text-white"
                        onClick={handleOpenModal}
                    >Registra-se</Link>

                </ul>
            </nav>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    position: 'fixed',
                    top: "10%",
                    left: "30%",
                    right: "30%",
                    bottom: "10%",
                    backgroundColor: 'none',
                },
                content: {
                    position: 'absolute',
                    top: '140px',
                    left: '40px',
                    right: '40px',
                    bottom: '190px',
                    border: '1px solid #ccc',
                    background: '#fff',
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
                        size={35}
                        onClick={handleCloseModal} className="btn_fechar_hidden ">Fechar</X>
                    <span>Cria sua conta</span>
                    <X
                        size={35}
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

