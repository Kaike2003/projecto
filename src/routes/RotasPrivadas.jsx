import React, { useContext } from "react";
import { AuthContext } from "../context/Autenticacao";
import { Navigate, Outlet } from "react-router-dom";



export const RotasPrivadasParticipante = () => {

    const { signed } = useContext(AuthContext)

    return (
        signed ? <Outlet /> : <Navigate to={"/reservaOnline/participante/login"} />
    )

}

export const RotasPrivadasOrganizador = () => {

    const { signed } = useContext(AuthContext)
    console.log(signed)

    return (
        signed ? <Outlet /> : <Navigate to={"/reservaOnline/organizador/login"} />
    )

}

export const RotasPrivadasAdmin = () => {

    const { signed } = useContext(AuthContext)
    console.log(signed)

    return (
        signed ? <Outlet /> : <Navigate to={"/reservaOnline/admin/login"} />
    )


}