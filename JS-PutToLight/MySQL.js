const mysql = require("mysql");

const poolCon = mysql.createPool({
    host    : "localhost",
    user    : "root",
    password: "rootroot",
    database: "PTLdb"
});

async function QueryIn(string, values){
    return await new Promise((respuesta, fallo) => {
        poolCon.query(string, values, (err, res) => {
            if (err) fallo(err);
            respuesta(res);
        });
    });
}

async function Reg(usuario, contra){
    let strconsulta = "INSERT INTO Usuario (Nombre, Pass) VALUES (?, ?)";
    let promesa = await QueryIn(strconsulta, [usuario, contra]);
    if (promesa instanceof Error) 
    return promesa.ToString(); //promesa (en caso de error) es un objeto, y quiero que me devuelva un string
}

async function Logearse(usuario, contra){
    let strconsulta = "SELECT 1 FROM Usuario WHERE Nombre = ? AND Pass = ?"; 
    let promesa = await QueryIn(strconsulta, [usuario, contra]);
    if (promesa instanceof Error) return promesa.ToString();
}

async function GetQRC(nombre){
    let strconsulta = "SELECT CodQR FROM Prod WHERE ProdNom = ?";
    let promesa = await QueryIn(strconsulta, [nombre]);
    if (promesa instanceof Error) return promesa.ToString();
} // Todavía falta terminar