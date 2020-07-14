var fetch = require('node-fetch');

var url = "http://viacep.com.br/ws/01311100/json/";

var endereco = {};

fetch(url)
    .then(resposta => {
        var x = resposta.json();
        //console.log(x);
        return x;
    })    
    .then(saida => {
        endereco = saida;   //atribuimos o endereço buscado
        console.log(endereco);        
        console.log('=========== FIM DA REQUISIÇÃO ===================== ');
    });


console.log('=========== FIM DA REQUISIÇÃO ===================== ');
