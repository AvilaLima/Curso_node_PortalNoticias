module.exports = function(application){
    application.get('/noticias',function(req,res){
        application.app.controllers.noticias.todasNoticias(application,req,res);
    });

    application.get('/noticia',function(req,res){
        application.app.controllers.noticias.noticia(application,req,res);
    });
};
