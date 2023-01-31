import React from "react";
import Section_eventos_img from "../../assets/img/kaike.png"
import "./Section_eventos_alta.css"
import { Link } from "react-router-dom";


export default function Section_eventos() {



    return (
        <>

            <div className="section_eventos_alta_grid">
                <Link to={"visualizarIngresso"}>
                    <img src={Section_eventos_img} className="card-img-top section_eventos_img" alt="Foto do evento" />
                    <div className="ps-2 pe-2 pt-1">
                        <div className="section_eventos_alta_span">
                            <span className="fw-bold tipo_evento text-center">Titulo do evento</span>
                            <small className="card-text text-center mb-3">Categoria do evento</small>
                        </div>
                        <div className="section_eventos_alta_span">
                            <span className="card-text text-start">Estado do evento</span>
                            <span className="card-text text-start mb-3">Data do evento</span>
                        </div>
                        <Link className="btn btn-primary mb-3 " to={"visualizarIngresso"}>Visualizar evento</Link>
                    </div>
                </Link>
            </div>

        </>
    )

}