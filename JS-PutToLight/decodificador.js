document.addEventListener("DOMContentLoaded", () => {
    const pan = document.getElementById("span3");
    const btnsend = document.getElementById("dbsend");
    const btnsend2 = document.getElementById("dbdelete");
    const resultado = document.getElementById("result");

    function enviarForm() {
        console.log("Enviar a la base de datos");
        if (resultado.innerText !== "") {
            console.log("dou");
            fetch('http://localhost:9000/decopp', {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: resultado.innerText
                    })
                })
                .then(async response => {
                    if (response.status === 200) {
                        // se mandó la info
                        console.log("se mandó la info");
                        location.reload();

                    } else {
                        console.log("Ha ocurrido un error");

                        pan.innerText = "Ha ocurrido un error inesperado"
                        pan.style.color = "red";

                        console.log(result.innerText);
                    }
                })
        } else if (resultado === "") {
            pan.innerText = "No ingresaste ningun valor";
            pan.style.color = "red";
        }
    }

    function enviarForm2() {
        console.log("Enviar");
        if (resultado.innerText !== "") {
            console.log("boton borrar");
            fetch('http://localhost:9000/decodificador', {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: resultado.innerText
                    })
                })
                .then(async response => {
                    if (response.status === 200) {
                        // se mandó la info
                        console.log("se borró la info");
                        location.reload();

                        pan.innerText = "Se borró el producto";
                        pan.style.color = "green";

                        console.log(result.innerText);

                    } else {
                        console.log("Ha ocurrido un error");

                        pan.innerText = "Ha ocurrido un error inesperado"
                        pan.style.color = "red";

                        console.log(result.innerText);
                    }
                })
        } else if (resultado === "") {
            pan.innerText = "No ingresaste ningun valor";
            pan.style.color = "red";
        }
    }

    console.log(btnsend);
    console.log(btnsend2);
    btnsend.addEventListener("click", enviarForm);
    btnsend2.addEventListener("click", enviarForm2);
})