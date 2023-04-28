/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Card_Palestrante.css"
import { Link } from "react-router-dom";

export default function Card_Palestrante({ id, name, image, blog }) {





    return (

        <>
            <div className="card_Palestrante" key={id}>
                <img src={image} alt="Foto do evento" />
                <div className="div_palestrante">
                    <span className="container">
                        <Link to={"#"} target="_blank" title={blog}>
                            {name}
                        </Link>
                    </span>
                </div>
            </div>

        </>
    )

}