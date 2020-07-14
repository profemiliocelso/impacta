module.exports = function(app) {

    var valida = require('./../middlewares/valida');

    //controller homec
    var homec = app.controllers.homec;
    app.get('/', homec.index);
    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    //controller eventosc
    var eventosc = app.controllers.eventosc;
    app.get('/menu', valida, eventosc.menu);

    app.get('/cadUsuario', valida,  eventosc.cadastroUsuario);
    app.get('/cadEvento', valida, eventosc.cadastroEvento);
    app.get('/listaEventos', valida, eventosc.listaEventos);

    app.post('/novoUsuario', homec.novoUsuario);
    app.post('/novoEvento', eventosc.novoEvento);
}