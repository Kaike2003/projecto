import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"

import Layout from "./components/Layout"
import Teatro from "./pages/tipo_Eventos/Teatro/Teatro"
import Festa from "./pages/tipo_Eventos/Festa/Festa"
import Visualizar_ingresso from "./pages/Visualizar_ingresso/Visualizar_ingresso"


const root = document.querySelector("#root")

ReactDOM.createRoot(root).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)