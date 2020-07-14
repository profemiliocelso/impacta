var Escola = {

    descricao: 'Impacta Tecnologia',
    endereco: {
        logradouro: 'Avenida Paulista',
        numero: 1009,
        cep: '01311-100'
    },
    cursos: ['PHP', 'Javascript', 'Asp.Net'],

    mostrar : function (){
        var texto = 'Nome da escola: ' + this.descricao +
                    '\nEndereço: \n' +
                    '\n  Logradouro: ' + this.endereco.logradouro +
                    '\n  Número: ' + this.endereco.numero +
                    '\n  CEP: ' + this.endereco.cep;
        return texto;
    }
}

module.exports = Escola;