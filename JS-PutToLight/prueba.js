const express = require("express");
const app = express();
const port = 9000;

app.get ("/", (req, res) => {
    console.log("Tu mamá");
});

app.listen(port, () =>{
    console.log(`Server running on https://localhost:${port}`);
});