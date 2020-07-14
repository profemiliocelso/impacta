//usaremos os módulos http e fs (file system)
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer( function(request, response) {
    
    var url_params = url.parse(request.url);
    var caminho = url_params.pathname;

    fs.readFile(__dirname + caminho, function(erro, conteudo){
        if(erro){
            response.writeHead(404, { 'Content-Type': 'text/html'});
            response.write('<h1>Página não encontrada!!</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(conteudo);
        }
        response.end();
    })
});

server.listen(3000, function(){
    console.log('Servidor no ar');
});
