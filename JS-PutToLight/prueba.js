const express = require("express");
const app = express();
const port = 9000;

const tiempo = Date.now();
const horaynseq = Date(tiempo);

app.get("/", (req, res) => {
    console.log("Request sent at: ", horaynseq);
    res.send("Hello World!");
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});