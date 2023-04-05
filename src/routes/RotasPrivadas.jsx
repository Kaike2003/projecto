import React, { useContext } from "react";
import { AuthContext } from "../context/Autenticacao";
import { Navigate, Outlet } from "react-router-dom";



export const RotasPrivadas = () => {

    const { logado } = useContext(AuthContext)

    return (
        logado ? <Outlet /> : <Navigate to={"/participante/criarContaParticipante"} />
    )

}