var colecao = require('./colecoes');

//obtendo um subconjunto da lista de nomes, com base em um critério
var sublista = colecao.nomes.filter( n => n.includes('a'));
for (const item of sublista) {
    console.log(item);
}
console.log('------------------------');

//obtendo um subconjunto da lista de cursos, com base em um critério
var cursosFiltro = colecao.cursos.filter( curso => curso.ch >= 500 );
for (const item of cursosFiltro) {
    console.log(item);
}
