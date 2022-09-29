const mysql = require("mysql");

const PoolCon = mysql.createPool({
    host    : "localhost",
    user    : "root",
    password: "rootroot",
    database: "PTLdb"
});

async function QueryIn(string, values){
    return await new Promise((respuesta, fallo) => {
        PoolCon.query(string, values, (err, res) => {
            if (err) fallo(err);
            respuesta(res);
        });
    });
}

async function Reg(usuario, contra){
    let strconsulta = "INSERT INTO Usuario (Nombre, Pass) VALUES (?, ?)";
    let promesa = await QueryIn(strconsulta, [usuario, contra]);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa instanceof Error) return promesa.ToString(); 
    //promesa (en caso de error) es un objeto, y quiero que me devuelva un string
}

async function Logearse(usuario, contra){
    let strconsulta = "SELECT 1 FROM Usuario WHERE Nombre = ? AND Pass = ?"; 
    let promesa = await QueryIn(strconsulta, [usuario, contra]);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa instanceof Error) return promesa.ToString();
}

async function GetQRC(nombre){
    let strconsulta = "SELECT CodQR FROM Prod WHERE ProdNom = ?";
    let promesa = await QueryIn(strconsulta, [nombre]);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa instanceof Error) return promesa.ToString();
}

async function AddProd(nombre, code){
    let strconsulta = "INSERT INTO Prod (ProdNom, CodQR) VALUES (?, ?)";
    let promesa = await QueryIn(strconsulta, [nombre, code]);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa instanceof Error) return promesa.ToString();
}

async function PutProd(code){
    let strconsulta = "SELECT ProdNom FROM Prod WHERE CodQR = ?";
    let promesa = await QueryIn(strconsulta, code);
    if (promesa instanceof Error) return promesa.ToString();

    let strconsulta2 = "UPDATE Espacio SET CantProd+1 WHERE ProdNom = ?";
    let promesa2 = await QueryIn(strconsulta2, promesa2);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa2 instanceof Error) return promesa2.ToString();
}

async function RemProd(code){
    let strconsulta = "SELECT ProdNom FROM Prod WHERE CodQR = ?";
    let promesa = await QueryIn(strconsulta, code);
    if (promesa instanceof Error) return promesa.ToString();

    let strconsulta2 = "UPDATE Espacio SET CantProd-1 WHERE ProdNom = ?";
    let promesa2 = await QueryIn(strconsulta2, promesa2);
    // console.log("Query sent at: " + req.ReqTime);
    if (promesa2 instanceof Error) return promesa2.ToString();
}