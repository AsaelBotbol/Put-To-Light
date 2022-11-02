const express = require("express");
const app = express();
const port = 9000;

const cors = require('cors');
app.use(cors());

var corsConfig = {
    origin: ["http://localhost:9000/", "http://localhost:5500", "http://127.0.0.1:5500", "http://127.0.0.1:3306", "http://localhost:3306"],
    optionsSuccessStatus: 200
}

app.use(cors(corsConfig));

app.use(express.json());

const mysql = require("mysql2");
const funcs = require("./MySQLFuncs.js");

// Esto es el login, mandame el usuario y la contraseña que ponga en las textboxes
app.post("/login", (req, res) => {
    let usuario = req.body.usuario;
    let contra = req.body.contrasenia;

    console.log(usuario, contra);

    //Usar la función declarada en MySQLFuncs.js
    const peponsio = funcs.Logearse(usuario, contra)
        .then((resultado) => {
            console.log(resultado);
            if (resultado.length === 0) {
                console.log("Usuario o contraseña incorrectos");
                res.sendStatus(400);
            } else {
                console.log("Usuario logeado");
                res.sendStatus(200);
            }
        });
});

// Acá me mandas el usuario y la contraseña que va a registrar
app.post("/registro", (req, res) => {
    let usuario = req.body.usuario;
    let contra = req.body.contrasenia;

    let peponsio = funcs.Reg(usuario, contra)
        .then((resultado) => {
            if (resultado.length != 0) {
                // res.send("Usuario registrado");
                res.sendStatus(200);
            } else {
                // res.send("Error: Usuario ya registrado");
                res.sendStatus(400);
            }
        });
});

// Acá me mandas el número que guarda el código QR que scaneas
app.put("/decodificador", (req, res) => {
    let nombre = req.body.nombre;
    var rp = funcs.GetProd(nombre)
        .then((resultado) => {
            let si = funcs.RemProd(resultado)
                .then((ress) => {
                    if (ress) {
                        res.send(ress);
                        // res.sendStatus(200);
                    } else {
                        console.log("Error: Producto no encontrado");
                        res.sendStatus(404);
                    }
                });
        });
});

app.put("/decopp", (req, res) => {
    let nombre = req.body.nombre;
    let peponsio = funcs.GetProd(nombre)
        .then((resultado) => {
            let meci = funcs.PutProd(resultado)
                .then((ress) => {
                    if (ress === true) {
                        // res.send(ress);
                        res.sendStatus(200);
                    } else {
                        console.log("Error: Producto no encontrado");
                        res.sendStatus(400);
                    }
                });
        });
});

app.post("/codificador", (req, res) => {
    let nombre = req.body.nombre;
    // let code = cifrar(req.body.codigo);
    let UseFunc = funcs.AddProd(nombre)
        .then((resultado) => {
            if (resultado === true) {
                // res.send("Producto agregado exitosamente");
                res.sendStatus(200);
            } else {
                // res.send("Error: Producto ya registrado");
                res.sendStatus(400);
            }
        });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});