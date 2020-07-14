var express = require('express');

var load = require('express-load');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');



//obtivemos uma instancia do módulo express
app = express();                  

//estrutura para o acesso ao banco de dados MongoDB, por meio do mongoose
var mongoose = require('mongoose');

//string de conexão com o banco de dados
global.db = mongoose.connect('mongodb://localhost:27017/neventos');

//eventos de monitoramento do banco de dados:
mongoose.connection.on('connected', function () {
  console.log('==== Conexão estabelecida com sucesso ====');
});

mongoose.connection.on('error', function (erro) {
  console.log('==== Ocorreu o seguinte erro: ' + erro);
});

mongoose.connection.on('disconnected', function () {
  console.log('==== Conexão finalizada ====');
});





//pasta raiz de todas as views: /views
app.set('views', __dirname + '/views');   

//ejs é o mecanismo de execução das views
app.set('view engine', 'ejs');            

//pasta raiz dos recursos estáticos (imagens, css, etc.) : /public
app.use(express.static(__dirname + '/public')); 

//configurando os módulos: body-parser, cookie-parser e express-session
app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//configurar o fluxo de execução
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function() {
  console.log('Aplicação no ar.');
});
