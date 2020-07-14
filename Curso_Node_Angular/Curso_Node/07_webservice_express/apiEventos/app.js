var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(request, response, next){
  
  response.header("Access-Control-Allow-Origin",  "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //response.header("Access-Control-Allow-Methods", "GET");
  next();
});

var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost:27017/neventos', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

load('models').into(app);

var Evento = app.models.eventos;

//métodos do serviço
app.get('/', function(request, response) {
  response.send('Webservice no ar.');
});

//obtem todos os eventos
app.get('/eventos', function(request, response) {
  Evento.find(function(erro, eventos){
    if(erro){
      response.json(erro);
    } else {
      response.json(eventos);
    }
  });
});

//obtém um evento com base no seu id
app.get('/eventos/:id', function(request, response) {
  var id = request.params.id;

  Evento.findById(id, function(erro, evento){
    if(erro){
      response.json(erro);
    } else {
      response.json(evento);
    }
  })
});

//envia um objeto para o webservice
app.post('/eventos', function(request, response) {
  
  var evento = {
    'descricao': request.body.descricao,
    'data': request.body.data,
    'preco': request.body.preco
  };

  Evento.create(evento, function(erro, item){
    if(erro){
      response.json(erro);
    } else {
      response.json(item);
    }
  });
});

//atualiza um objeto com base no id e nas demais propriedades
app.put('/eventos/:id', function(request, response) {
  var id = request.params.id;

  Evento.findById(id, function(erro, evento){
    if(erro){
      response.json(erro);
    } else {
      evento.descricao = request.body.descricao;
      evento.data = request.body.data;
      evento.preco = request.body.preco;

      evento.save(function(erro, evento_atualizado){
        response.json(evento_atualizado);
      });
    }
  })
});

//remove um evento com base no seu id
app.delete('/eventos/:id', function(request, response) {
  var id = request.params.id;

  Evento.findById(id, function(erro, evento){
    if(erro){
      response.json(erro);
    } else {
      Evento.remove(evento, function(erro, item){
        //response.send('removido!');
        response.json(item);
      });
    }
  });
});


app.listen(3200, function(){
  console.log('API em funcionamento');
});