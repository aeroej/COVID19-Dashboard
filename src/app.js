var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log("start, express server on port 3000");
});

app.use(express.static('views'));

app.get('/', function(req, res){
    // res.send("<h1 />hello!")
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/index', function(req, res){
    // res.send("<h1 />hello!")
    res.sendFile(__dirname + "/views/index.html")
});

app.post('/email_post', function(req, res){
    //get : req.param('email')
    res.send("post_response")
});