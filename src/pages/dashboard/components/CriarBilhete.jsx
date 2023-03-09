import React from "react"
import "./CriarBilhete.css"
import { Mail, User, DollarSign, Map, AlignCenter, Plus } from "lucide-react"

export default function CriarBilhete() {

    return (
        <>

            <form action="#" method="get">

                <div className="container criar_bilhete">

                    <div className="criar_bilhete_div container">
                        <div>
                            <i><AlignCenter></AlignCenter></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Nome do bilhete"
                            />
                        </div>

                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <select
                                className="select_criarBilhete"
                                name="" id="" >
                                <option value="">Tipo bilhete</option>
                                <option value="">Grátis</option>
                                <option value="">Pago</option>



                            </select>
                        </div>

                        <div>
                            <i><Plus></Plus></i>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Quantidade de bilhetes"
                            />
                        </div>



                    </div>

                    <div className="criar_bilhete_div">

                        <div>
                            <i><DollarSign></DollarSign></i>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Preço do bilhete"

                            />
                        </div>


                        <div>
                            <i><Map style={{ visibility: "hidden" }}></Map></i>
                            <input
                                type="datetime-local"
                                name=""
                                id=""

                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                // style={{ visibility: "hidden" }}
                                type="datetime-local"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>


                    </div>


                    <div className="criar_bilhete_div">


                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div>
                            <i><Mail style={{ visibility: "hidden" }}></Mail></i>
                            <input
                                style={{ visibility: "hidden" }}
                                type="date"
                                name=""
                                id=""
                                placeholder="Digite seu email"
                            />
                        </div>

                    </div>

                </div>

                <div className="container criar_bilhete_botao_salvar">
                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>

                    <button className="btn btn-primary">Criar </button>
                </div>

            </form>

        </>
    )

}