//连接数据库当中的post表
Sequelize = require('sequelize');
var models=module.exports={};
var sequelize
    =
    new Sequelize
    ('test', 'root', '',
        {host : '127.0.0.1', port : '3306', dialect : 'mysql'});
var define = require('./table');
var cache=define(sequelize,Sequelize);
//cache.sync({force:true});
models.cache=cache;
models.sequelize=Sequelize;