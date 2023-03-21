import React from "react";
import "./Perfil.css"
import Imagem from "../../../../assets/img/palestrante.jpg"

export default function Perfil({

    PbotaoNome,
    Pdivgrupo1Display,
    Pinput1,
    PinputNome1,
    PinputPlaceholder1,
    PinputTipo1,

    Pdivgrupo2Display,
    Pinput2,
    PinputNome2,
    PinputPlaceholder2,
    PinputTipo2,


    Pdivgrupo3Display,
    Pinput3,
    PinputNome3,
    PinputPlaceholder3,
    PinputTipo3,


    Pdivgrupo4Display,
    Pinput4,
    PinputNome4,
    PinputPlaceholder4,
    PinputTipo4,


    Pdivgrupo5Display,
    Pinput5,
    PinputNome5,
    PinputPlaceholder5,
    PinputTipo5,


    Pdivgrupo6Display,
    Pinput6,
    PinputNome6,
    PinputPlaceholder6,
    PinputTipo6,

    PdivgrupoFileDisplay,
    exbirImagemDisplay,
    criarInfoCriar



}) {

    return (
        <>


            <form method="post" action="#">

                <div className="criar">

                    <div 
                    style={{display: `${criarInfoCriar}`}}
                    className="criar_info_criar">
                        <div className="criar_info">
                            <span></span> <br />
                            <span></span>
                        </div>
                        <button type="submit">{PbotaoNome}</button>
                    </div>



                    <div
                    className="exibir_imagem_Pai"
                    style={{ display: `${exbirImagemDisplay}` }}>
                        <div className="exibir_imagem">
                            <img src={Imagem} alt="" />
                        </div>

                        <div>
                            <div>
                                <div className="criar_estrutura container">

                                    <div>
                                        <div className="criar_row">

                                            <span>Nome</span>
                                            <div> Kaike </div>


                                        </div>
                                    </div>

                                    <div>
                                        <div className="criar_row">
                                            <span>Apelido</span>
                                            <div> Bartolomeu </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="criar_estrutura container">

                                    <div>
                                        <div className="criar_row">
                                            <span>IBAN</span>
                                            <div> Kaike Bartolomeu </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="criar_row">
                                            <span>Telefone</span>
                                            <div> 9xx - xxx - xxx </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="criar_estrutura container">

                                    <div>
                                        <div className="criar_row">


                                            <span>Endereço</span>
                                            <div> Endereço </div>


                                        </div>
                                    </div>

                                    <div>
                                        <div className="criar_row">
                                            <span>Data de nascimento</span>
                                            <div> data de nascimento </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="criar_estrutura container">

                        <div
                            style={{ display: `${Pdivgrupo1Display}` }}
                        >
                            <div className="criar_row">

                                <span>{Pinput1}</span>
                                <input
                                    name={PinputNome1}
                                    type={PinputTipo1}
                                    placeholder={PinputPlaceholder1}
                                />


                            </div>
                        </div>

                        <div
                            style={{ display: `${Pdivgrupo2Display}` }}
                        >
                            <div className="criar_row">
                                <span>{Pinput2}</span>
                                <input
                                    name={PinputNome2}
                                    type={PinputTipo2}
                                    placeholder={PinputPlaceholder2}
                                />

                            </div>

                        </div>


                        <div style={{ display: `${PdivgrupoFileDisplay}` }}>
                            <div className="criar_row">
                                <span>Imagem</span>
                                <input type="file" name="" id="file" />
                                <label htmlFor="file" className="file_image">
                                    Adicionar foto
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="criar_estrutura container">

                        <div
                            style={{ display: `${Pdivgrupo3Display}` }}
                        >
                            <div className="criar_row">

                                <span>{Pinput3}</span>
                                <input
                                    name={PinputNome3}
                                    type={PinputTipo3}
                                    placeholder={PinputPlaceholder3}
                                />


                            </div>
                        </div>

                        <div
                            style={{ display: `${Pdivgrupo4Display}` }}
                        >
                            <div className="criar_row">
                                <span>{Pinput4}</span>
                                <input
                                    name={PinputNome4}
                                    type={PinputTipo4}
                                    placeholder={PinputPlaceholder4}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="criar_estrutura container">

                        <div
                            style={{ display: `${Pdivgrupo5Display}` }}
                        >
                            <div className="criar_row">

                                <span>{Pinput5}</span>
                                <input
                                    name={PinputNome5}
                                    type={PinputTipo5}
                                    placeholder={PinputPlaceholder5}
                                />



                            </div>
                        </div>

                        <div
                            style={{ display: `${Pdivgrupo6Display}` }}
                        >
                            <div className="criar_row">
                                <span>{Pinput6}</span>
                                <input
                                    name={PinputNome6}
                                    type={PinputTipo6}
                                    placeholder={PinputPlaceholder6}
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </form>

        </>
    )

}