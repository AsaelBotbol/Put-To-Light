document.addEventListener("DOMContentLoaded", () => {
    const Pass1 = document.getElementById("contra");
    const Pass2 = document.getElementById("contracon");
    const Usu = document.getElementById("Usuario");
    const pan = document.getElementById("span");
    const iniciar = document.getElementById("iniciar");


    Usu.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    Pass1.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    Pass2.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log("Apreto Enter");
            enviarForm();
        }
    })

    iniciar.addEventListener("click", () => {
        console.log('apretó boton')
        enviarForm();
    })

    function enviarForm() {
        if (Usu.value === "" & Pass1.value === "" & Pass2.value === "") {
            pan.innerText = "No ingresaste ningun valor"
            pan.style.color = "red";
            Usuario.style.borderColor = "red";
            contra.style.borderColor = "red";
            contracon.style.borderColor = "red";
        } else if (Pass1.value === "" & Pass2.value === "") {
            pan.innerText = "No ingresaste ninguna contraseña"
            pan.style.color = "red";
            contra.style.borderColor = "red";
        } else if (Usu.value === "") {
            pan.innerText = "No ingresaste ningun usuario"
            pan.style.color = "red";
            Usuario.style.borderColor = "red";
        } else if (Pass1.value !== Pass2.value) {
            pan.innerText = "Las contraseñas no coinciden"
            pan.style.color = "red";
            contra.style.borderColor = "red";
            contracon.style.borderColor = "red";
        } else {
            //register

            fetch('http://localhost:9000/registro', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        usuario: Usu.value,
                        contrasenia: Pass1.value
                    })
                })
                .then(response => {
                    if (response.status === 200) {
                        // se creo el usuario
                        window.open('index.html', "_self");
                        window.alert("Usuario creado con exito!");
                    } else {
                        window.alert("Ha ocurrido un error inesperado");
                        pan.innerText = "Ha ocurrido un error inesperado"
                        pan.style.color = "red";
                    }
                });
        }
    }
});