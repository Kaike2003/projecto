import React from "react";
import Tabela from "../Tabela/Tabela";
import "./Criar.css"


export default function Criar({

    // ! Todas as propriedades dos grupo 1, 2, 3 e 4
    /* Grupo 1 - informações */

    Pinformacao1,
    PsubInformacao1,
    PnomeBotao,

    /* Grupo 1 - inputs e selects */
    PselectDisplay1,
    Pselect1,
    PselectOption1,
    PselectDisplay2,
    Pselect2,
    PselectOption2,
    PspanNomeInput1,
    PnameInput1,
    PplaceholderInput1,
    PtipoInput1,


    /* Grupo 2 - informações */
    Pinformacao2,
    PsubInformacao2,

    /* Grupo 2 - inputs e selects */
    PspanNomeInput2,
    PnameInput2,
    PplaceholderInput2,
    PtipoInput2,

    PspanNomeInput3,
    PnameInput3,
    PplaceholderInput3,
    PtipoInput3,

    PspanNomeInput4,
    PnameInput4,
    PplaceholderInput4,
    PtipoInput4,

    /* Grupo 3 - informações */
    Pinformacao3,
    PsubInformacao3,

    /* Grupo 3 - textearea */
    PtexteareaDisplay,


    /* Grupo 4 - informações */
    Pinformacao4,
    PsubInformacao4,

    /* Grupo 4 - inputs */
    PspanNomeInput5,
    PnameInput5,
    PtipoInput5,

    PspanNomeInput6,
    PnameInput6,
    PtipoInput6,

    PspanNomeInput7,
    PnameInput7,
    PtipoInput7,

    PspanNomeInput8,
    PnameInput8,
    PtipoInput8,

    // ! Todas as divs que serão ocultas
    PInput1Display,
    PInput2Display,
    PInput3Display,
    PInput4Display,
    PInput5Display,
    PInput6Display,
    PInput7Display,
    PInput8Display,
    PinputFileDisplay,

    // ! Todas as informacaçoes que serºao que serão ocultas
    PInformacao1Display,
    PInformacao2Display,
    PInformacao3Display,
    PInformacao4Display,

    PtabelaDisplay















}) {

    return (
        <>



            <form method="post" action="#" className="container">

                <div className="criar container">
                    <div className="criar_info_criar" style={{ display: `${PInformacao1Display}` }}>
                        <div

                            className="criar_info">
                            <span>{Pinformacao1}</span> <br />
                            <span>{PsubInformacao1}</span>
                        </div>
                        <button
                            className="PnomeBotao"
                            type="submit">{PnomeBotao}</button>
                    </div>
                    <div className="criar_main ">

                        <div className="criar_estrutura container">

                            <div
                                style={{ display: `${PselectDisplay1}` }}>
                                <div className="criar_row">
                                    <span>{Pselect1}</span>
                                    <select name="" id="">
                                        <option>{PselectOption1}</option>
                                    </select>
                                </div>

                            </div>

                            <div
                                style={{ display: `${PInput1Display}` }}
                            >

                                <div className="criar_row">
                                    <span>{PspanNomeInput1}</span>
                                    <input
                                        name={PnameInput1}
                                        type={PtipoInput1}
                                        placeholder={PplaceholderInput1}
                                    />
                                </div>

                            </div>

                            <div
                                style={{
                                    display: `${PselectDisplay2}`
                                }}>
                                <div className="criar_row">
                                    <span>{Pselect2}</span>
                                    <select name="" id="">
                                        <option>{PselectOption2}</option>
                                    </select>
                                </div>

                            </div>


                            <div
                                style={{ display: `${PinputFileDisplay}` }}
                            >
                                <div className="criar_row">
                                    <span>Imagem</span>
                                    <input type="file" name="" id="file" />
                                    <label htmlFor="file" className="file_image">
                                        Adicionar foto
                                    </label>
                                </div>
                            </div>

                        </div>




                        <div
                            style={{
                                display: `${PInformacao2Display}`
                            }}
                            className="criar_info">
                            <span>{Pinformacao2}</span> <br />
                            <span>{PsubInformacao2}</span>

                        </div>

                        <div

                            className="criar_estrutura container">
                            <div>

                                <div
                                    style={{
                                        display: `${PInput2Display}`
                                    }}

                                    className="criar_row">
                                    <span>{PspanNomeInput2}</span>
                                    <input
                                        name={PnameInput2}
                                        type={PtipoInput2}
                                        placeholder={PplaceholderInput2} />
                                </div>

                            </div>

                            <div>
                                <div
                                    style={{
                                        display: `${PInput3Display}`
                                    }}

                                    className="criar_row">
                                    <span>{PspanNomeInput3}</span>
                                    <input
                                        name={PnameInput3}
                                        type={PtipoInput3}
                                        placeholder={PplaceholderInput3} />
                                </div>
                            </div>



                        </div>

                        <div

                            className="criar_estrutura container">
                            <div>

                                <div
                                    style={{
                                        display: `${PInput4Display}`
                                    }}
                                    className="criar_row">
                                    <span>{PspanNomeInput4}</span>
                                    <input
                                        name={PnameInput4}
                                        type={PtipoInput4}
                                        placeholder={PplaceholderInput4} />
                                </div>

                            </div>

                            <div style={{ display: "none" }}>
                                <div className="criar_row">
                                    <span>Bairro</span>
                                    <input type="text" placeholder="Nome do evento" />
                                </div>

                            </div>



                        </div>

                        <div
                            style={{
                                display: `${PInformacao3Display}`
                            }}
                            className="criar_info">
                            <span>{Pinformacao3}</span> <br />
                            <span>{PsubInformacao3}</span>
                        </div>

                        <div>
                            <textarea
                                style={{ display: `${PtexteareaDisplay}` }}
                                name="" id="criar_descricao" cols="30" rows="10"></textarea>
                        </div>

                        <div
                            style={{ display: `${PInformacao4Display}` }}
                            className="criar_info">
                            <span>{Pinformacao4}</span> <br />
                            <span>{PsubInformacao4}</span>
                        </div>

                        <div
                            style={{ display: `${PInput5Display}` }}
                            className="criar_date_time">
                            <div

                            >
                                <div className="criar_row">
                                    <span>{PspanNomeInput5}</span>
                                    <input
                                        type={PtipoInput5}
                                        name={PnameInput5}
                                    />
                                </div>

                            </div>

                            <div>

                                <div
                                    style={{ display: `${PInput6Display}` }}

                                    className="criar_row">
                                    <span>{PspanNomeInput6}</span>
                                    <input
                                        type={PtipoInput6}
                                        name={PnameInput6}
                                    />
                                </div>

                            </div>

                            <div>

                                <div
                                    style={{ display: `${PInput7Display}` }}

                                    className="criar_row">
                                    <span>{PspanNomeInput7}</span>
                                    <input
                                        type={PtipoInput7}
                                        name={PnameInput7}
                                    />
                                </div>

                            </div>

                            <div>

                                <div
                                    style={{ display: `${PInput8Display}` }}

                                    className="criar_row">
                                    <span>{PspanNomeInput8}</span>
                                    <input
                                        type={PtipoInput8}
                                        name={PnameInput8}
                                    />
                                </div>

                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div style={{ display: `${PtabelaDisplay}` }}>
                    <Tabela />
                </div>
            </form>
        </>
    )

}

