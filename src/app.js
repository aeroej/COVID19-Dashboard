var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(5000, function(){
    console.log("start, express server on port 5000");
});

app.use(express.static('views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

// 루트페이지
app.get('/', function(req, res){
    // res.send("<h1></h1>")
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/index', function(req, res){
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/email', function(req,res){
    res.sendFile(__dirname + "/views/form.html")
})

app.post('/member',(req,res)=>{
    console.log("POST로 데이터 수신");
    console.log("이름 : " + req.body.name);
    console.log("전화 : " + req.body.tel);
    console.log("이메일 : " + req.body.email);
    res.send("Server Get");
});

app.post('/email_post', function(req, res){
    //get : req.param('email')
    console.log(req.body.name)
    console.log(req.body.tel)
    console.log(req.body.email)
    // html 작성 시 쌍따옴표
    // res.send("<h1>welcome " + req.body.email + "</h1>")
    res.render('../templates/email.ejs', {'name' : req.body.name, 'tel' : req.body.tel, 'email' : req.body.email})
});

app.post('/ajax_send_email', function(req, res){
    console.log(req.body.name + " " + req.body.tel + " " + req.body.email);
    //check validation about input value => select db
    var responseData = {'result': 'ok', 'name' : req.body.name, 'tel' : req.body.tel, 'email' : req.body.email}
    res.json(responseData)
});




app.get('/api', function(req,res){
    res.sendFile(__dirname + "/api/api.js")
})