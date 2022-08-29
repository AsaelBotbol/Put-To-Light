document.addEventListener("DOMContentLoaded", () => {
    const Pass1 = document.getElementById("contra");
    const Pass2 = document.getElementById("contracon");
    const pan = document.getElementById("span");

    document.addEventListener("keydown", () => {
        pan.innerHTML = input.value;
        document.addEventListener("keydown", (event) => {
            if (KeyboardEvent.keyCode == "Enter") {
                if (Pass1 === Pass2) {
                    //Acá poné el code para cambiar de pestaña al index
                } else {
                    pan.style.color = "red";
                    pan.innerText = "Las contraseñas no coinciden";
                }
            }
        })
    })
})