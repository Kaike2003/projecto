import React from "react";
import Swal from "sweetalert2"


export default function InatividadePagina() {

    let time;

    // reset timer
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    // document.ontouchend = resetTimer
    // document.touchmove = resetTimer
    // document.touchstart = resetTimer

    function doSomething() {
        localStorage.clear();

        Swal.fire({
            icon: 'warning',
            title: 'Sessão terminada',
            html: `Sua sessão foi terminada automaticamente pela aplicação, por questão de segurança. E por favor atualize a página e faça login de novo na aplicação.`,
            showConfirmButton: true,
        })

        console.log("Sessão terminada, dentro de 5 minutos")
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(doSomething, 300000)

        console.log("Testando")

    }

};

