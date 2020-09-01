const express = require('express')
const app = express();
const PORT = 5000;
 
function listen(){
    console.log(`Listen on: http://localhost:${PORT}`);
}

function home(req, res){
    res.sendFile(__dirname + '/views/index.html');
}

app.get("/", home);

app.listen(PORT, listen);