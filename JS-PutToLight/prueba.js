const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
    console.log("Request sent at: ", Date.now());
    res.send("Hello World!");
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
    // console.log("Server started at " + Date.now());
});