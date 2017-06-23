module.exports.add_noticia = function (application, req, res){    
    res.render("admin/add_noticia", {validacao:{},noticia:{}});
}

module.exports.noticia_salvar = function (application, req, res)
{
    var noticia = req.body;
      
        //validação
        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conte entre 10 e 100 caracteres').len(10,100);        
        req.assert('autor','Autor é obrigatório').notEmpty();   
        req.assert('data_noticia','Data é obrigatória').notEmpty()
        
        req.assert('data_noticia','A data está em um formato inválido').isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Notícia é obrigatório').notEmpty();   

        var erros = req.validationErrors();

        if(erros)
        {
            console.log(erros);
            res.render("admin/add_noticia", {validacao : erros, noticia : noticia})
            return;
        }
        
        //conexao
        var connection = application.config.dbConnection();
        //model
        var noticias = new application.app.models.NoticiasDAO(connection);

        //salvarNoticia
         noticias.salvarNoticia(noticia, function (error, result){
            res.redirect("/noticias");
        });    
}