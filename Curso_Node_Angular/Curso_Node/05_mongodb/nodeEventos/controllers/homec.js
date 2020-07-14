module.exports = function(app) {

    var Usuario = app.models.usuarios;

    var HomeController = {
        //definição dos actions
        //action: index
        index: function (request, response) {
            response.render('home/inicio');     //renderiza uma view (página)
        },

        login: function(request, response) {
            //obtendo as informações dos campos de entrada
            var nome  = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query).exec(function(erro, usuario){
                if(erro){
                    response.redirect('/');
                } else {
                    request.session.s_usuario = usuario;
                    response.redirect('/menu');
                }
            });
        },

        logout: function(request, response) {
            request.session.destroy();
            response.redirect('/');
        },

        novoUsuario: function(request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;

            //codigo a ser implementado
            if((senha != confirma) || nome.trim().length == 0) {
                response.redirect('/');
            } else {
                //definimos o objeto com as propriedades 'nome' e 'senha'
                var usuario = {
                    nome: nome, senha: senha
                };

                Usuario.create(usuario, function(erro, item){
                    if (erro){
                        response.redirect('/');
                    } else {
                        response.redirect('/menu');
                    }
                });
            }
        }
    };

    return HomeController;
}