import React from "react";
import "./App.css"
import Rotas from "./routes";



import { AuthProvider } from "./context/Autenticacao";

export default function App() {


    return (
        <div className="">
            <AuthProvider>
                <Rotas></Rotas>
            </AuthProvider>
        </div>
    )

}