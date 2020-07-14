//neste arquivo importaremos (consumiremos) as funções criadas - e exportadas
// no arquivo funcoes.js

var item = require('./funcoes');

var soma = item.somar(2, 3);
console.log('soma = ' + soma);


var multiplica = item.multiplicar(2, 3);
console.log('multiplica = ' + multiplica);

var lista = item.alunos; //lista: representa uma coleção

//exibindo os objetos presentes na lista
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);    
}

//exibindo os objetos, uma propriedade por vez
for (let i = 0; i < lista.length; i++) {
    console.log('Nome: ' + lista[i].nome);    
    console.log('Idade: ' + lista[i].idade);
    console.log('-------------------');
}

//executando a função comparar:
console.log('Usando a função comparar recebendo string:');
console.log('Caracteres: ' + item.comparar('Cassia'));

console.log('Usando a função comparar recebendo uma lista:');
var numeros = [2,3,5,6,7,8,9,1];
console.log('Array: ' + item.comparar(numeros));

//uso da função callback
var resposta = item.executar(function (s) { 
    return s.length; 
});

//equivalente a:
// var operacao = function(s) {
//  return s.length;
//}