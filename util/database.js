const mysql=require('mysql2');
const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'journal',
    password: ''
});
module.exports=pool.promise()