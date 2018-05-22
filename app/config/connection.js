//*********************Connecting mysql server************ /
const cfg = require('./index.js');
var mysql      = require('mysql');
var db         = cfg.db.mysql;

module.exports = mysql.createConnection({
    host     : db.host,
    user     : db.user,
    password : db.password,
    database : db.database,
});
