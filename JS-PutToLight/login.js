document.addEventListener("DOMContentLoaded", () => {
    const Usua = document.getElementById("usua");
    const Pass = document.getElementById("contra");
    const pan = document.getElementById("span2");
    const iniciar2 = document.getElementById("iniciar2");

    Usua.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    Pass.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    iniciar2.addEventListener("click", () => {
        console.log('hola')
        enviarForm();
    })

    function enviarForm() {
        if (Usua.value === "" & Pass.value === "") {
            pan.innerText = "No ingresaste ningun valor"
            pan.style.color = "red";
            Usua.style.borderColor = "red";
            Pass.style.borderColor = "red";
            contracon.style.borderColor = "red";
        } else if (Usua.value === "") {
            pan.innerText = "No ingresaste ningun usuario"
            pan.style.color = "red";
            Usua.style.borderColor = "red";
        } else if (Pass.value === "") {
            pan.innerText = "No ingresaste ninguna contraseña"
            pan.style.color = "red";
            Pass.style.borderColor = "red";
        } else {
            window.open('menu.html', "_self");
        }
    }
})