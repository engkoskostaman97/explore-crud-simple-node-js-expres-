let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   port:3307,
   user:        'root',
   password:    '',
   database:    'db_express_mysql'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection; 