const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const botongen = document.getElementById('genbtn');
    genbtn.addEventListener("click", () => {
        console.log("CLICK");
        enviarForm();
    })
});

let qrnombre = document.getElementById("link");

//codificador
function enviarForm() {
    fetch('http://localhost:9000/codificador', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: qrnombre.value
            })
        })
        .then(response => {
            if (response.status === 200) {
                // se mandó la info
                console.log("se mandó la info");
                location.reload();
            } else {
                console.log("Ha ocurrido un error");


                const pan = document.getElementById("span3");
                pan.innerText = "Ha ocurrido un error";
                pan.style.color = "red";
            }
        })
}