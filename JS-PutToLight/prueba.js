const express = require("express");
const app = express();
const port = 9000;

const mysql = require("mysql");
const funciones = require("./MySQL.js");

const tiempo = Date.now();
const horaynseq = Date(tiempo);

app.get("/", (req, res) => {
    console.log("Request sent at: ", horaynseq);
    res.send("Hello World!");
});

app.post("/index.html", (req, res) => {
    const usuario = req.body.usuario;
    const contra = req.body.contra;

    funciones.Reg(usuario, contra);
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});