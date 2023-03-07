import React from "react";
import "./Login.css"
import { BsFillPersonFill, BsEnvelopeFill, BsFillLockFill, BsTelephoneFill, BsFillCalendarFill} from "react-icons/bs";


export default function Login() {


    var body = document.querySelector("body");


    function btnSignin() {
        body.className = "sign-in-js";
    };

    function btnSignup() {
        body.className = "sign-up-js";
    }

    return (
        <>

            <div class="container_loginCreate">
                <div class="content first-content">
                    <div class="first-column">
                        <h2 class="title title-primary">
                            Bem vindo de volta!</h2>
                        <p class="description description-primary">
                            Para manter-se conectado conosco</p>
                        <p class="description description-primary">
                            faça o login com suas informações pessoais</p>
                        <button id="signin" onClick={btnSignin} class="btn_loginCreate btn-primary_loginCreate">
                            Entrar</button>
                    </div>
                    <div class="second-column">
                        <h2 class="title title-second">Criar Conta</h2>
                        <form class="form">
                            <label class="label-input" for="">
                                <i class="far fa-user icon-modify"><BsFillPersonFill></BsFillPersonFill></i>
                                <input type="text" placeholder="Name" />
                            </label>

                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"><BsEnvelopeFill></BsEnvelopeFill></i>
                                <input type="email" placeholder="Email" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"><BsFillLockFill></BsFillLockFill></i>
                                <input type="password" placeholder="Password" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"><BsTelephoneFill></BsTelephoneFill></i>
                                <input type="number" placeholder="Telefone" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"><BsFillCalendarFill></BsFillCalendarFill></i>
                                <input type="date" placeholder="Password" />
                            </label>


                            <button class="btn_loginCreate btn-second_loginCreate"> Inscrever-se</button>
                        </form>
                    </div>{/*<!-- second column --> */}
                </div>{/*<!-- first content -->*/}
                <div class="content second-content">
                    <div class="first-column">
                        <h2 class="title title-primary">Olá amigo!</h2>
                        <p class="description description-primary">
                            Insira seus dados pessoais</p>
                        <p class="description description-primary">
                            e comece a jornada conosco</p>
                        <button id="signup" onClick={btnSignup} class="btn_loginCreate btn-primary_loginCreate">
                            Inscrever-se</button>
                    </div>
                    <div class="second-column">
                        <h2 class="title title-second">Login</h2>
                        <form class="form">

                            <label class="label-input" for="">
                                <i class="far fa-envelope icon-modify"><BsEnvelopeFill></BsEnvelopeFill></i>
                                <input type="email" placeholder="Email" />
                            </label>

                            <label class="label-input" for="">
                                <i class="fas fa-lock icon-modify"><BsFillLockFill></BsFillLockFill></i>
                                <input type="password" placeholder="Password" />
                            </label>

                            <a class="password" href="#">
                                Esqueceu sua senha?</a>
                            <button class="btn_loginCreate btn-second_loginCreate">Entrar</button>
                        </form>
                    </div>{/*<!-- second column -->/*}
                </div> {/*<!-- second-content -->*/}
                </div>
            </div>



        </>
    )

}