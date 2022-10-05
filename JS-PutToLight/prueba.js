const express = require("express");
const app = express();
const port = 9000;

const crypto = require("crypto-js");

const cifrar = (texto) => {
    let textocifrado = crypto.AES.encrypt(texto, "U2FsdGVkX1/wowNpzf77abWeeCCSm8G77Bo+l3MjhFk=").toString();
    return textocifrado;
}

const descifrar = (texto) => {
    let bytes = crypto.AES.decrypt(texto, "U2FsdGVkX1/wowNpzf77abWeeCCSm8G77Bo+l3MjhFk=");
    let textodescifrado = bytes.toString(crypto.enc.Utf8);
    return textodescifrado;
}

const mysql = require("mysql");
const funciones = require("./MySQL.js");

app.get("/", (req, res) => {
    console.log("Request sent at: ", Date(Date.now()));
    res.send(cifrar("Mandarina"), "\n", descifrar(cifrar("Mandarina")));
});

app.post("/index.html", (req, res) => {
    //Encriptar los datos con crypto-js 
    const usuario = cifrar(req.body.usuario);
    const contra = cifrar(req.body.contra);

    funciones.Reg(usuario, contra);
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}/`);
});