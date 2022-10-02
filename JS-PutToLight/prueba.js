const express = require("express");
const app = express();
const port = 9000;

var ReqTime = function (req, res){
    req.ReqTime = Date.now();
}
app.use(ReqTime);

app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Request sent at: ", req.reqTime);
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});