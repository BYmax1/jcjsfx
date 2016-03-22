var cache=require('./connect').cache;//获取链接数据库中post表的sequelize对象
var Cache=module.exports={};



Cache.save=function(teachername,schoolname,course,email)
{
   cache.create
   ({
    teachername: teachername,
    schoolname:schoolname,
    course:course,
    email:email
    });
}

Cache.getAll=function(callback)
{
     cache.findAll().then(function (Infos) {
               callback(Infos);
             })
}

Cache.remove=function(id)
{
   cache.destroy({'where':{id:id}});
}

