const mysql = require("mysql");

const poolCon = mysql.createPool({
    host    : "localhost",
    user    : "root",
    password: "rootroot",
    database: "PTLdb"
})

async function QueryIn(string, values){
    return await new Promise((respuesta, fallo) => {
        poolCon.query(string, values, (err, res) => {
            if (err) fallo(err);
            respuesta(res);
        });
    });
}

async function Reg(usuario, contra){
    let strconsulta = ""
}

async function Logearse(usuario, contra){
    let strconsulta = "SELECT * FROM Usuario WHERE Nombre = ? AND Pass = ?";
    let promesa = await QueryIn(strconsulta, [usuario, contra]);
}