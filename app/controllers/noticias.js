module.exports.todasNoticias = function (application, req, res)
{
      
    var connection = application.config.dbConnection();
        //rotaHome(app); mesma coisa q o (app)
    var noticias = new application.app.models.NoticiasDAO(connection);

        noticias.getNoticias(function (error, result){
            res.render("noticias/index", { noticias : result});
        });

}

module.exports.noticia= function (application, req, res)
{
    var connection = application.config.dbConnection();
        //rotaHome(app); mesma coisa q o (app)
    var noticias = new application.app.models.NoticiasDAO(connection);

    var req_query = req.query;
    noticias.getNoticia(req_query, function (error, result){
        res.render("noticias/noticia", { noticia : result});
    });
}