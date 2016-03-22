//连接数据库当中的post表
Sequelize = require('sequelize');
var models=module.exports={};
var sequelize
    =
    new Sequelize
    ('swobgGjdBROYsPPyTOiG', '8bb0963b83b243519fa76ac6449ef7ac', 'a070f4cac80641329c007b56185e0948',
        {host : 'sqld.duapp.com', port : '4050', dialect : 'mysql'});
var define = require('./table');
var mteacher=define(sequelize,Sequelize);
mteacher.sync({force:true});
models.sequelize=Sequelize;
models.mteacher=mteacher;