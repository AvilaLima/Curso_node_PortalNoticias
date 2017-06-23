module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        application.app.controllers.admin.add_noticia(application,req ,res);
    });
     application.post('/noticias/salvar', function(req,res){       
        application.app.controllers.admin.noticia_salvar(application,req ,res);
    });

};