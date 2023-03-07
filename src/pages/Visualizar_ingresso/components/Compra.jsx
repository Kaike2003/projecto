import React, { useState, useEffect } from "react"
import "./Compra.css"
import Modal from "react-modal"
import { X } from "lucide-react"

Modal.setAppElement("#root")


export default function Compra() {
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

    const [conta, setConta] = useState(() => {
        return {
            "quantidade": "",
            "numeroCartao": 0,
            "nomeCompleto": "",
            "validade": "",
            "codigoSeguranca": 0
        }
    })

    const quantidade = (e) => {
        return setConta((old) => {
            return old = { quantidade: e.target.value }
        })
    }

    const numeroCartao = (e) => {
        return setConta((old) => {
            return old = { numeroCartao: e.target.value }
        })
    }

    const nomeCompleto = (e) => {
        return setConta((old) => {
            return old = { nomeCompleto: e.target.value }
        })
    }

    const validade = (e) => {
        return setConta((old) => {
            return old = { validade: e.target.value }
        })
    }

    const codigoSeguranca = (e) => {
        return setConta((old) => {
            return old = { codigoSeguranca: e.target.value }
        })
    }


    useEffect(() => {

        console.log(conta)

    }, [conta])


    const quantidadeDesponivel = 10
    const precoDoBilhete = 2500


    return (
        <>


            <div className="compra_cartao">

                <label htmlFor="">Bilhete desponiveis: {quantidadeDesponivel}</label>
                <input type="number" name="" id="" value={conta.quantidade}
                    placeholder="Digite a quantidade que bilhete que deseja comprar"
                    onChange={quantidade}

                />

                <input type="number" name="" id=""
                    placeholder="Número do cartão"
                    value={conta.numeroCartao}
                    onChange={numeroCartao}
                />
                <input type="text" name="" id=""
                    placeholder="Nome completo impresso no cartão"
                    value={conta.nomeCompleto}
                    onChange={nomeCompleto}
                />
                <input type="number" name="" id=""
                    placeholder="Validade Ex: MM/AA"
                    value={conta.validade}
                    onChange={validade}
                />
                <input type="number" name="" id=""
                    placeholder="Código de segurança"
                    value={conta.codigoSeguranca}
                    onChange={codigoSeguranca}
                />

                <div className="total">
                    <span>Total</span>
                    <span>{conta.quantidade * precoDoBilhete} kz</span>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: "25%",
                            left: "35%",
                            right: "35%",
                            bottom: "35%",
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
                        <span>Pagamento</span>
                        <X
                            size={35}
                            onClick={handleCloseModal} className="btn_fechar ">Fechar</X>
                    </div>

                        <div className="div_aprovar_cancelar">
                            <button 
                            className="btn btn-success">Aprovar</button>
                            <button 
                            onClick={handleCloseModal}
                            className="btn btn-danger">Cancelar</button>

                        </div>


                </Modal>


                <input
                 type="button" 
                 value="Confirmar pagamento"
                 onClick={handleOpenModal}
                  />
            </div>
        </>
    )

}