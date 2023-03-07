import React from "react";
import Header from "../../components/Header/Header";
import Detalhe_bilhete from "./components/Detalhe_bilhete";
import "./Bilhete.css"


export default function Bilhete() {

    return (
        <>
            <Header></Header>
            <div className="invisivel"></div>
            <div className="container bilhete_bilhete">
                <Detalhe_bilhete></Detalhe_bilhete>
            </div>
        </>
    )

}