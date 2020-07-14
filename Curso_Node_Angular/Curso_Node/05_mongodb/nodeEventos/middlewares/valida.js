module.exports = function(request, response, next) {
    if(!request.session.s_usuario){
        return response.redirect('/');
    }
    return next();
}