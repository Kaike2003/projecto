import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../../../../../context/Autenticacao"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



export default async function SairParticipante() {
    const navigate = useNavigate()
    const { singOutParticpante } = useContext(AuthContext)

    Swal.fire({
        title: 'Deseja terminar sessão?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            singOutParticpante()
        } else {
            navigate("/reservaOnline/participante")
        }
    })


}