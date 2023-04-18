import React, { useState, useEffect } from "react";
import "./Perfil.css"
import Imagem from "../../../../../../assets/img/palestrante.jpg"
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import "./InformacaoCompraParticipante.css"
import { ChevronRight } from "lucide-react";



export default function InformacaoCompraParticipante() {
    const { idReserva } = useParams()
    const [dataListaCategoria, setDataListaCategoria] = useState([])
    const [data, setData] = useState([]);
    const [dataEvento, setDataEvento] = useState([])
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })
    const [dataListaBilhetes, setDataListaBilhetes] = useState([])
    const [dataListaReservas, setDataListaReservas] = useState([])

    const [abirOrador, setAbrirOrador] = useState(() => {
        return { display: "none", rotate: 0 }
    })
    const [abirPalestrante, setAbrirPalestrante] = useState(() => {
        return { display: "none", rotate: 0 }
    })

    const [abirBilhete, setAbrirBilhete] = useState(() => {
        return { display: "none", rotate: 0 }
    })


    const urlImage = "http://localhost:3456/public/upload/comprovativo/"





    useEffect(() => {
        async function fetchData() {

            const responseListaCategoria = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newDataCategoria = responseListaCategoria.data;
            setDataListaCategoria(newDataCategoria);

            const responseListaReservas = await axios.get('http://localhost:3456/admin/listarPagamentos')
            const newDataListaReservas = responseListaReservas.data
            setDataListaReservas(newDataListaReservas)


            const responseUtilizador = await axios.get(`http://localhost:3456/admin/usuarios/participante`);
            const newDataUtilizador = responseUtilizador.data;
            setDataEvento(newDataUtilizador);



            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newData = response.data;
            setData(newData);

        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }


        fetchData();
    }, []);




   

    function esconderBilhete() {
        setAbrirBilhete((oldValor) => {
            if (oldValor.display === "none") {
                return oldValor = { display: "block", rotate: "90deg" }
            } else {
                return oldValor = { display: "none", rotate: 0 }
            }
        }
        )
    }

 

    console.log(nomeUtilizador)
    console.log("Usuários participantes", dataEvento)
    console.log("Lista de bilhetes", dataListaReservas)


    return (
        <>

            <div className="container">
                <div className="titulo_evento_informacaoCompra container">Informações da compra
                </div>

                <div className="criar mt-2">

                    {

                        dataListaReservas.map(itemReservas => {

                            if (itemReservas.id === idReserva) {

                                return data.map(itemUtilizador => {
                                    console.log(itemUtilizador.id === itemReservas.utilizadorId)

                                    if (itemUtilizador.id === itemReservas.utilizadorId) {
                                        return (
                                            <>

                                                <div key={itemUtilizador.id + 1} className="mb-3">

                                                    <div className="criar_estrutura_InformacaoEvento container">
                                                        <div>
                                                            <div className="criar_row">

                                                                <span>Nome</span>
                                                                <div> {itemUtilizador.nome} </div>


                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="criar_row">
                                                                <span>Quantidade</span>
                                                                <div> {itemReservas.quantidade} </div>

                                                            </div>

                                                        </div>


                                                        <div>
                                                            <div className="criar_row">


                                                                <span>Total</span>
                                                                <div> {itemReservas.total} kz</div>


                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="criar_row">


                                                                <span>Data da compra</span>
                                                                <div>
                                                                    {format(new Date(itemReservas.at_create), "dd-MM-yyyy")} </div>


                                                            </div>
                                                        </div>








                                                    </div>

                                                    <div className="spanOradorBilhetePalestrante">
                                                        <span>
                                                            <div className="spanIcone"
                                                                onClick={esconderBilhete}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                Foto do Comprovativo  <ChevronRight
                                                                    style={{
                                                                        transform: `rotate(${abirBilhete.rotate})`,
                                                                        transition: "transform 0.50s ease-in-out"
                                                                    }}
                                                                    size={20} /></div>
                                                        </span>
                                                        <ul
                                                            className="container"
                                                            style={
                                                                { display: abirBilhete.display }
                                                            }>
                                                            {dataListaReservas.map(item => {
                                                                if (item.id === idReserva) {
                                                                    return (<>
                                                                        <div className="exibir_imagem_comprovativo mt-2 container">

                                                                            <img src={urlImage + item.foto} alt="" /> 
                                                                            
                                                                        </div>
                                                                    </>)
                                                                }
                                                            })}



                                                        </ul>
                                                    </div>





                                                </div>

                                            </>
                                        )
                                    }
                                })

                            }


                        })

                    }
                </div>
            </div>


        </>
    )

}