document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("resultado");
    const pan = document.getElementById("span3");
    const btnsend = document.getElementById("dbsend");

    btnsend.addEventListener("click", () => {
        console.log("CLICK");
        enviarForm();
    });
})

function enviarForm() {
    if (result !== "") {
        pan.innerText = "No ingresaste ningun valor";
        pan.style.color = "red";
    }
}