module.exports = function(app) {

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

            //simulação de login
            if(nome == 'admin' && senha == 'admin'){
                var user = request.body.usuario;

                //armazenamos o usuário em uma sessão
                request.session.s_usuario = user;
                response.redirect('/menu');     //direciona para uma rota
            } else {
                response.redirect('/');
            }
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
        }
    };

    return HomeController;
}