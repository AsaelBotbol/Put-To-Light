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

var qrnombre = document.getElementById("link");

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
        .then(async response => {
            if (response.status === 200) {
                // se mandó la info
                console.log("se mandó la info");

                const pan = document.getElementById("span3");
                pan.innerText = "El producto se ha mandado correctamente!";
                pan.style.color = "green";
                window.alert("El producto se ha mandado correctamente!");

            } else {
                console.log("Ha ocurrido un error: ", await response.text());


                const pan = document.getElementById("span3");
                window.alert("Ha ocurrido un error.");
                pan.innerText = "El producto ya esta en la base de datos.";
                pan.style.color = "red";
            }
        })
}