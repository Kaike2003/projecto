import React from "react";
import "./Historico.css"

export default function Historico() {

    return (
        <>
        
            <div className="historico_perfil">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Data</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th scope="row">Mark</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                        <tr>
                            <th scope="row">Mark</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>


                    </tbody>
                </table>

            </div>


        </>
    )

}