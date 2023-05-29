import React from "react";
import "./Footer.css"
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {


    return (
        <>

            <footer id="footer" className="container-fuild">


                <div className="container-fuild container_filho">

                    <div className="container_filho_1">
                        <h4>Sobre nós</h4>
                        <p>Somos um web site especializado para venda de bilhetes para eventos culturais e educacionais e compra de bilhetes. Nosso web site existe desde 2020 no mercado Angolano.</p>
                    </div>

                    <div className="container_filho_2">
                        <h4>Links</h4>

                        <Link
                            target="_blank"
                            style={{ color: "white" }}
                            to={"https://www.facebook.com/kaikebartolomeuu/"} >
                            <BsFacebook className="icone_1 me-3" />
                        </Link>
                        <Link
                            target="_blank"
                            style={{ color: "white" }}
                            to={"https://www.instagram.com/kaikebartolomeu/"}>
                            <AiFillInstagram className="icone_2 me-3" />
                        </Link>
                        <Link
                            target="_blank"
                            style={{ color: "white" }}
                            to={"https://github.com/Kaike2003"}>
                            <BsGithub className="icone_1" />
                        </Link>

                    </div>
                </div>


            </footer>




        </>
    )

}