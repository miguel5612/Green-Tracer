var express = require('express');
var bodyParser = require('body-parser')
var puerto = 8000;
var ip = [] ;
var countIp;
var app = express()

var server = require('http').Server(app);
app.use('/',express.static(__dirname+'/public/'));

server.listen(puerto,function(){
    console.log('EL servidor arranco en el puerto ' + puerto)
})

var io = require('socket.io')(server)

io.on('connection', function (socket) {
    socket.emit('eventos', { sensor: '0', dato: '0' , unidad: '0' })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('pages/index')
})

app.get('/cms', function(req, res){
    res.render('pages/cms')
})
app.get('/Humidity', function(req, res){
    res.render('pages/Humidity')
})
app.get('/mapa', function(req, res){
    res.sendFile(__dirname+'/views/pages/mapa.html');
})
app.post('/', function(req, res){
    io.emit('eventos', { sensor: req.body.sensor, dato: req.body.dato, unidad: req.body.unidad })
    res.send({evento:'enviado'})
    console.log(req.body);
})
app.get('/input', function(req, res){
    io.emit('eventos', { sensor: req.query.sensor, dato: req.query.dato, unidad: req.query.unidad,sensor2: req.query.sensor2, dato2: req.query.dato2, unidad2: req.query.unidad2 ,cantidad:ip.length})
    res.send({evento:'enviado'})
    cantidadDeIguales = 0;
    for(var i = 0; i< ip.length ; i++){	
        if(req.connection.remoteAddress!=ip[i]){
        cantidadDeIguales ++;
        }
    }
    if (parseInt(cantidadDeIguales)==parseInt(ip.length)){
	    ip[ip.length] = req.connection.remoteAddress;
	    console.log("guardo la ip");
    }    
     console.log("cantidad de ip con novedad  "+ cantidadDeIguales);
     console.log(req.query);
})

