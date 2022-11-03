document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("resultado");
    const pan = document.getElementById("span3");
    const btnsend = document.getElementById("dbsend");
    const resultado = document.getElementsByClassName("result");

    btnsend.addEventListener("click", () => {
        console.log("CLICK");
        enviarForm();
    });

    btnsend.addEventListener("click", () => {
        console.log("CLICK");
        enviarForm();
    });

    function enviarForm() {
        if (result !== null) {
            console.log("dou");
            fetch('http://localhost:9000/decopp', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: result.value
                    })
                })
                .then(response => {
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
        } else if (result === null) {
            pan.innerText = "No ingresaste ningun valor";
            pan.style.color = "red";
        }
    }
})