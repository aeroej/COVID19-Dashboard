

const express = require('express')
const app = express();
const PORT = 5000;
 
function Listening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function Home(req, res){
    res.sendFile(__dirname + '/views/index.html');
}

app.get("/", Home);

app.listen(PORT, Listening);