 
var mysql = require('mysql');
var connMySQL = function(){
    console.log('A conexão do banco de dados foi estabelecidade com sucesso.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cepe@123',
        database: 'portal_noticias'

    });
}
module.exports = function() {
    console.log('autoload carregou a conexão do banco de dados');
    return connMySQL;
}