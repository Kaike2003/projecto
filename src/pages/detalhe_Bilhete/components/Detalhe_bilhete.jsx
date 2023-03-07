import React, { useState } from "react";
import "./Detalhe_bilhete.css"

export default function Detalhe_bilhete() {

  const [quantidade, setQuantidade] = useState(() => {
    return 0
  })

  return (
    <>

      <div className="bilhete_detalhe">
        <div>
          <h2>Detalhes do bilhete</h2>
          <button onClick={() => {
            return setQuantidade((v) => {
              return  v = quantidade - 1
            })
          }}>sub</button><p>{quantidade}</p> 
          <button  onClick={() => {
            return setQuantidade((v) => {
              return  v = quantidade + 1
            })
          }}>soma</button>
        </div>
      </div>

    </>
  )

}