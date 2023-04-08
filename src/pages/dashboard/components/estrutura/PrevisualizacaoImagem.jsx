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
                    alt="imagem"
                    style={{objectFit: "cover"}}
                    width={"260px"}
                    height={"260px"}
                ></img>
            </div>
        </>
    )

}