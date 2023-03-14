import React from "react";
import "./PrimeiroHeader.css"
import { ArrowRight } from "lucide-react";

export default function PrimeiroHeader({ nome }) {


   const ladoEsquerdoFlotuante = () => {

      return (
         <>
            <div className="flotuarLadoEsquerdo">
               <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
               </ul>
            </div>
         </>
      )
   }

   return (
      <>
         <div className="primeiroHeader">
            <h2 className="">{nome}</h2>
            <ArrowRight style={{ cursor: "pointer" }}
               onClick={ladoEsquerdoFlotuante}
            ></ArrowRight>
         </div>
      </>
   )

}