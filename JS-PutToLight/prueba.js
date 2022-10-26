const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());

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
        if (resultado === false) res.send("Usuario o contraseña incorrectos");
        else res.send("Usuario logeado");
    });
});

// Acá me mandas el usuario y la contraseña que va a registrar
app.post("/registro.html", (req, res) => {
    let usuario = cifrar(req.body.usuario);
    let contra = cifrar(req.body.contrasenia);

    let peponsio = funcs.Reg(usuario, contra)
    .then((resultado) => {
        if (resultado) res.send("Usuario registrado");
    });
});

// Acá me mandas el número que guarda el código QR que scaneas 
app.put("/decodificador.html", (req, res) => {
    let code = req.body.codigo;
    let peponsio = funcs.GetProd(code)
    .then((resultado) => {
        let qsy = funcs.RemProd(resultado)
        .then((ress) => {
            res.send(ress);
        });
    });
});

/* 
decopp.html es algo que tengo q discutir con asa, que
es para poner productos, en lugar de sacarlos
*/
app.put("/decopp.html", (req, res) => {
    let code = req.body.codigo;
    let peponsio = funcs.GetProd(code)
    .then((resultado) => {
        let qsy = funcs.PutProd(resultado)
        .then((ress) => {
            res.send(ress);
        });
    });
});



app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}/`);
});

