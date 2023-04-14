import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../../../../../context/Autenticacao"
import swal from 'sweetalert';



export default async function SairOrganizador() {

    const { singOutOrganizador } = useContext(AuthContext)

    await singOutOrganizador()


}