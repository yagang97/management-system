//Router 根据匹配客户端的请求路径匹配相应的路由，然后执行函数进行相应的逻辑处理，中间会连接中间层的中间件来做一些数据处理，然后调用相应的controller，然后到app.js中做接口处理，作为对应的app.use的参数，对应的app.use触发了就会去执行router后面的中间件

var express = require('express');
var router = express.Router(); 

/* GET home page. *///获取首页
router.get('/', function(req, res, next) {
  res.json('ok');
});

module.exports = router;
