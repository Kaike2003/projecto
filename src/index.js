import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from "react-router-dom"
import App from "./App"


const root = document.querySelector("#root")

ReactDOM.createRoot(root).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)