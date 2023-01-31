import React from "react";
import "./Footer.css"
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


export default function Footer() {


    return (
        <>

            <footer id="footer" className="container-fuild">

                <div className="container-fuild container_filho">

                    <div className="container_filho_1">
                        <h4>Sobre nós</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto officiis nam dicta, nulla asperiores atque ullam. Reprehenderit ipsum dicta velit laborum hic earum aspernatur aut recusandae, ab, quibusdam quia! Aspernatur hic quasi aut deserunt iusto quaerat fuga commodi, harum neque sapiente vero pariatur doloribus expedita sit at quam labore!</p>
                    </div>

                    <div className="container_filho_2">
                        <h4>Links</h4>
                       <BsFacebook className="icone_1 me-3"></BsFacebook>
                        <AiFillInstagram className="icone_2 me-3"></AiFillInstagram>
                        <BsGithub className="icone_1"></BsGithub>
                    </div>
                </div>

            </footer>

        </>
    )

}