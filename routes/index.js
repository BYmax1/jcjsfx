var express = require('express');
var router = express.Router();
var cache=require('../model/cache');
var mteacher=require('../model/mteacher');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '江财教师信息分享网' });
});


router.get('/add', function(req, res, next) {
  res.render('add', { title: '添加老师信息' });
});

router.get('/teacher', function(req, res, next) {
  //console.log(req.query.id);
  mteacher.getOne(req.query.id,function(teacher)
  	{
  		console.log(teacher.teachername);
        res.render('teacher', { title: '老师信息',teacher:teacher});   
  	});	
});

router.get('/mteacher', function(req, res, next) {
    mteacher.getAll(function(info)
    {
         res.send(info);//发送教师信息给前端
    })
});



router.get('/cache', function(req, res, next) {
    cache.getAll(function(info)
    {
         res.send(info);//发送教师信息给前端
    })
});

router.post('/mteacher', function(req, res, next) {
    
    var checkList=req.body['checkList'];
    for(var i=0;i<checkList.length;i++)
    {
       mteacher.save(checkList[i].teachername,checkList[i].schoolname,checkList[i].number,checkList[i].course);
    }

});
router.post('/cache', function(req, res, next) {
    
    var checkList=req.body['checkList'];
    for(var i=0;i<checkList.length;i++)
    {
       cache.remove(checkList[i].id);
    }

});



router.post('/add', function(req, res, next) {

  cache.save(req.body['teacherName'],req.body['schoolName'],req.body['course'],req.body['email']);
  res.render('add', { title: '江财教师信息分享网',success:'提交成功!我们的工作人员会尽快以邮件的形式通知您结果' });
});

module.exports = router;
