var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const execute = require('./router/connection');
var routerNoticias = require('./router/routerNoticias');
var routerVentas = require('./router/routerVentas');
var routerTipoDocs = require('./router/routerTipoDocs');
var routerEmpleados = require('./router/routerEmpleados');
var routerClientes = require('./router/routerClientes');
var routerProductos = require('./router/routerProductos');
let routerDigitacion = require('./router/routerDigitacion');
let routerUsuarios = require('./router/routerUsuarios');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 777;

app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  /*
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', true);
*/
  console.log("/" + req.toString());
  next();
});

app.get("/",function(req,res){
  execute.start();
	res.sendFile(path + 'index.html');
}); 

//Router para app NOTICIAS
app.use('/noticias', routerNoticias);

//Router para app VENTAS
app.use('/ventas', routerVentas);

// Router para Tipodocumentos
app.use('/tipodocumentos', routerTipoDocs);

// Router para empleados o vendedores
app.use('/empleados', routerEmpleados);

// Router para clientes
app.use('/clientes', routerClientes);

// Router para productos
app.use('/productos', routerProductos);

// Router para digitacion
app.use('/digitacion', routerDigitacion);

// Router para usuarios
app.use('/usuarios', routerUsuarios);


app.use("/",router);

app.use("*",function(req,res){
  res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});


// SOCKET HANDLER
io.on('connection', function(socket){
  
  socket.on('noticias nueva', (msg,usuario)=>{
    io.emit('noticias nueva', msg,usuario);
  });

  socket.on('productos precio', function(msg,usuario){
	  io.emit('productos precio', msg, usuario);
  });

  socket.on('productos bloqueado', function(msg,usuario){
	  io.emit('productos bloqueado', msg, usuario);
  });


  socket.on('chat msn', function(msg,user){
	  io.emit('chat msn', msg, user);
  });
  
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

