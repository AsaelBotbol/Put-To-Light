document.addEventListener("DOMContentLoaded", () => {
    const Pass1 = document.getElementById("contra");
    const Pass2 = document.getElementById("contracon");
    const Usu = document.getElementById("Usuario");
    const pan = document.getElementById("span");
    const iniciar = document.getElementById("iniciar");

    Pass2.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    iniciar.addEventListener("click", () => {
        console.log('hola')
        enviarForm();
    })

    function enviarForm() {
        if (Usu.value === "" & Pass1.value === "" & Pass2.value === "") {
            pan.innerText = "No ingresaste ningun valor"
            pan.style.color = "red";
        } else if (Pass1.value === "" & Pass2.value === "") {
            pan.innerText = "No ingresaste ninguna contraseña"
            pan.style.color = "red";
        } else if (Usu.value === "") {
            pan.innerText = "No ingresaste ningun usuario"
            pan.style.color = "red";
        } else if (Pass1.value !== Pass2.value) {
            pan.innerText = "Las contraseñas no coinciden"
            pan.style.color = "red";
        } else {
            window.open('index.html', "_self");
        }
    }
})