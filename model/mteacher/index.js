var mteacher=require('./connect').mteacher;//获取链接数据库中post表的sequelize对象
var Mteacher=module.exports={};


Mteacher.save=function(teachername,schoolname,number,course)
{
   mteacher.create
   ({
    teachername: teachername,
    schoolname:schoolname,
    number:number,
    course:course
    });
}

Mteacher.getAll=function(callback)
{
     mteacher.findAll().then(function (Infos) {
               callback(Infos);
             })
}
Mteacher.getOne=function(id,callback)
{
     mteacher.findOne({where:{id:id}}).then(function (Infos) {
               callback(Infos);
             })
}

