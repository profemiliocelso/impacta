module.exports = function(app) {
    var EventosController = {
        menu: function(request, response) {

            //obtendo o usuário da sessão, e passando-o para a view
            var usuario = request.session.s_usuario,
                params = { p_usuario: usuario }

            response.render('eventos/menu', params);
        },

        cadastroUsuario: function(request, response) {
            var usuario = request.session.s_usuario,
                params = { p_usuario: usuario }
            response.render('eventos/cadUsuario', params);
        },

        cadastroEvento: function(request, response) {
            var usuario = request.session.s_usuario,
                params = { p_usuario: usuario }
            response.render('eventos/cadEvento', params);
        },

        listaEventos: function(request, response) {
            var usuario = request.session.s_usuario,
                params = { p_usuario: usuario }
            response.render('eventos/listaEventos', params);
        },

        novoEvento: function(request, response) {
            var descricao = request.body.evento.descricao;
            var data = request.body.evento.data;
            var preco = request.body.evento.preco;

            //codigo a ser implementado
        }
    };

    return EventosController;
}