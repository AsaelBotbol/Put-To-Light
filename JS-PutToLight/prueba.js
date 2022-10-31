const express = require("express");
const app = express();
const port = 9000;

const cors = require('cors');
app.use(cors());

var corsConfig = {
    origin: ["http://localhost:9000/", "http://localhost:5500", "http://127.0.0.1:5500"],
    optionsSuccessStatus: 200
}

app.use(cors(corsConfig));

app.use(express.json());

app.get("/", () => {
    console.log(descifrar("U2FsdGVkX1+bkuBRptU6iqeXd9dFYSxaYchmuWbF3Qs="));
});

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

const mysql = require("mysql2");
const funcs = require("./MySQLFuncs.js");

// Esto es el login, mandame el usuario y la contraseña que ponga en las textboxes
app.post("/index.html", (req, res) => {
    //Encriptar los datos con crypto-js 
    let usuario = cifrar(req.body.usuario);
    let contra = cifrar(req.body.contrasenia);

    //Usar la función declarada en MySQLFuncs.js
    const peponsio = funcs.Logearse(usuario, contra)
        .then((resultado) => {
            if (resultado === false) {
                res.send("Usuario o contraseña incorrectos");
                res.sendStatus(400);
            } else {
                res.send("Usuario logeado");
                res.sendStatus(200);
            }
        });
});

// Acá me mandas el usuario y la contraseña que va a registrar
app.post("/registro.html", (req, res) => {
    let usuario = cifrar(req.body.usuario);
    let contra = cifrar(req.body.contrasenia);

    let peponsio = funcs.Reg(usuario, contra)
        .then((resultado) => {
            if (resultado) {
                res.send("Usuario registrado");
                res.sendStatus(200);
            } else {
                res.send("Error: Usuario ya registrado");
                res.sendStatus(400);
            }
        });
});

// Acá me mandas el número que guarda el código QR que scaneas
app.put("/decodificador.html", (req, res) => {
    let nombre = req.body.nombre;
    var rp = funcs.GetProd(nombre)
        .then((resultado) => {
            let si = funcs.RemProd(resultado)
                .then((ress) => {
                    if (ress) {
                        res.send(ress);
                        res.sendStatus(200);
                    } else {
                        res.send("Error: Producto no encontrado");
                        res.sendStatus(400);
                    }
                });
        });
});

app.put("/decopp.html", (req, res) => {
    let nombre = req.body.nombre;
    let peponsio = funcs.GetProd(nombre)
        .then((resultado) => {
            let meci = funcs.PutProd(resultado)
                .then((ress) => {
                    if (ress === true) {
                        res.send(ress);
                        res.sendStatus(200);
                    } else {
                        res.send("Error: Producto no encontrado");
                        res.sendStatus(400);
                    }
                });
        });
});

app.post("codificador.html", (req, res) => {
    let nombre = req.body.nombre;
    let code = cifrar(req.body.codigo);
    let UseFunc = funcs.AddProd(nombre, code)
        .then((resultado) => {
            if (resultado === true) {
                res.send("Producto agregado exitosamente");
                res.sendStatus(200);
            } else {
                res.send("Error: Producto ya registrado");
                res.sendStatus(400);
            }
        });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});