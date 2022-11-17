document.addEventListener("DOMContentLoaded", () => {
    const pan = document.getElementById("span3");
    const btnsend = document.getElementById("dbsend");
    const resultado = document.getElementById("result");

    function enviarForm() {
        console.log("Enviar");
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

    console.log(btnsend);
    btnsend.addEventListener("click", enviarForm);
})