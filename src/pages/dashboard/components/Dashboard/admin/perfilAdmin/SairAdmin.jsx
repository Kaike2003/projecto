import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../../../../../context/Autenticacao"



export default async function SairAdmin() {

    const { singOutAdmin } = useContext(AuthContext)


    await singOutAdmin()

    // console.log(singOutAdmin)

    // return (
    //     <>
    //         <h1> Olá mundo</h1>
    //     </>
    // )


}