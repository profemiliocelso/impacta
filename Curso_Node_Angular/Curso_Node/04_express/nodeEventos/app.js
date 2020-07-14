var express = require('express');

var load = require('express-load');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');



//obtivemos uma instancia do módulo express
app = express();                  

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
