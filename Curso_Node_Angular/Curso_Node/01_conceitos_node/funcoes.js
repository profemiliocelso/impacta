//neste arquivo escreveremos funções e objetos a serem exportados

function calcularSoma(x, y){
    return x + y;
}

//primeira exportação:
exports.somar = calcularSoma;

//exportando uma função anônima
exports.multiplicar = function(a, b) {
    return a * b;
}

//exportando uma lista de objetos
exports.alunos = [
    { nome: 'Pedro', idade: 25 },
    { nome: 'Maria', idade: 32 },
    { nome: 'Cesar', idade: 21 }
];


//outras funções
exports.comparar = function(x) {
    return x.length;    //por inferência, x é uma string ou uma lista
}

exports.executar = function(operacao){ //operacao é chamada de callback
    return operacao('impacta');
}

