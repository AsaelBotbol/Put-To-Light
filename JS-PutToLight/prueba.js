const express = require("express");
const app = express();
const port = 9000;

var ReqTime = function (req, res){
    req.ReqTime = Date.now();
}
app.use(ReqTime);

app.listen(port, () =>{
    console.log(`Server running on https://localhost:${port}`);
});