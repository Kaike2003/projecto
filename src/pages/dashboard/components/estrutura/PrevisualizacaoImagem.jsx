import React from "react";
import { useState } from "react";
import "./PrevisualizacaoImagem.css"

export default function PrevisualizacaoImagem({ file }) {

    const [previsualizar, setPrevisualizar] = useState(() => {
        return null
    })

    const ler = new FileReader()
    ler.readAsDataURL(file)
    ler.onload = () => {
        setPrevisualizar(ler.result)
    }

    return (
        <>
            <div className="PrevisualizacaoImagem">
                <img src={previsualizar}
                    alt="imagem de ume vento"
                    width={"200px"}
                    height={"200px"}
                ></img>
            </div>
        </>
    )

}