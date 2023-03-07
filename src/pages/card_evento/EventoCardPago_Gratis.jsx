/* eslint-disable react/jsx-pascal-case */
import React from "react";
import EventoPago_Gratis from "./components/EventoCardPago_Gratis";

export default function EventoCardPago_Gratis({ id, name, price, date, image }) {

    return (
        <>
            <EventoPago_Gratis
                id={id}
                name={name}
                price={price}
                date={date}
                image={image}
            ></EventoPago_Gratis>
        </>
    )

}