import "./Visualizar_ingresso.css"
import { BsFillCalendarDateFill, BsFillCalendarWeekFill, BsFillClockFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaTicketAlt, FaRegMoneyBillAlt } from "react-icons/fa";

import Img from "../../assets/img/kaike.png"


export default function Visualizar_ingresso() {

    return (
        <>
            <div className="insivivel"></div>
            <section className="container_visualizar text-white">
                <div className="visualizar">
                    <div>
                        <h3>Titulo do evento</h3>
                        <small className="categoria">Categoria do evento</small>
                        <div className="visualizar_filho mt-3">
                            <p><BsFillCalendarDateFill className="icones_visualizar"></BsFillCalendarDateFill> Dia 14 FEV</p>
                            <p><BsFillCalendarWeekFill className="icones_visualizar icone_mes"></BsFillCalendarWeekFill> Mês Fevereiro</p>
                        </div>

                        <div className="visualizar_filho">
                            <p><BsFillClockFill className="icones_visualizar"></BsFillClockFill> Hora 19h00</p>

                            <p><FaMapMarkerAlt className="icones_visualizar
                            icone_local"></FaMapMarkerAlt> Local Centro de Conferências De Belas (CCB)</p>
                        </div>

                        <div className="visualizar_filho">
                            <p><FaTicketAlt className="icones_visualizar "></FaTicketAlt> Disponível 2000</p>
                            <p><FaRegMoneyBillAlt className="icones_visualizar icone_dinheiro"></FaRegMoneyBillAlt> 00 000,00 Kz</p>
                        </div>

                        <div className="visualizar_filho_inputs">
                            <input type="number" name="" id="" className="numero_ingresso" placeholder="Número de ingressos" /> <br />
                            <input type="button" value="Finalizar compra" className="btn btn-primary input_visualizar" />
                        </div>

                    </div>
                    <div>
                        <img src={Img} alt="" className="img_visualizar" />
                    </div>
                </div>
            </section>
        </>
    )

}