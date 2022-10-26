fetch('http://localhost/prueba.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario: "pepon",
            contrasenia: "1234"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data));

//register
enviarReg.addEventListener("click", () => {
    fetch('http://localhost/prueba.js', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            contrasenia: contrasenia.value,
            nombre: nombreUsuario.value
        })
    })
})

//logIn
document.querySelector(".Enviar").addEventListener("click", () => {
    fetch('http://localhost/prueba.js', {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: document.querySelector("#iCorreo").value,
            contrasenia: document.querySelector("#iContrasenia").value
        })
    })
})