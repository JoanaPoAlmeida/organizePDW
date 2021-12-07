const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((error)=>{
    if(error){
        console.log('O erro de conexao é : '+error);
        return;
    }
    console.log('Conexão à bd com sucesso!')
});

module.exports = connection;