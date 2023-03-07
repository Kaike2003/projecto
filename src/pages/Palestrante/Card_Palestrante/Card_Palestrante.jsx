/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Card_Palestrante.css"

import Img from "../../../assets/img/palestrante.jpg"

export default function Card_Palestrante({ id, name, image }) {





    return (

        <>

            <div className="card_Palestrante" key={id}>
                <img src={image} alt="Foto do evento" />
                <div className="div_palestrante">
                    <span>{name}</span>
                </div>
            </div>

        </>
    )

}