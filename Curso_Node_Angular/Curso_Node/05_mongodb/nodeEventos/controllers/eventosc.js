module.exports = function(app) {

    var Evento = app.models.eventos;
    var moment = require('moment');

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

            Evento.find(function(erro, eventos){
                if(erro){
                    response.render('/menu');
                } else {
                    var usuario = request.session.s_usuario,
                        params = { p_usuario: usuario,
                                   p_eventos:  eventos,
                                   p_moment: moment }
                    response.render('eventos/listaEventos', params);
                }
            });

        },

        novoEvento: function(request, response) {
            
            var evento = request.body.evento;

            if(evento.descricao.trim().length == 0){
                response.redirect('/cadEvento');
            } else {
                Evento.create(evento, function(erro, item){
                    if(erro){
                        response.redirect('cadEvento');
                    } else {
                        response.redirect('/listaEventos');
                    }
                });
            }

            //codigo a ser implementado


        }
    };

    return EventosController;
}