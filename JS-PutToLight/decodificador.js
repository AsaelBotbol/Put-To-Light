document.addEventListener("DOMContentLoaded", () => {
    const pan = document.getElementById("span3");
    const btnsend = document.getElementById("dbsend");
    const resultado = document.getElementById("resultString");

    function enviarForm() {
        console.log("Enviar");
        if (resultado !== "") {
            console.log("dou");
            fetch('http://localhost:9000/decopp', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: resultado.value
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