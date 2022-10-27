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