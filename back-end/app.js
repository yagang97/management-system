// app.js应用的初始化文件，包括引入应用程序的基础依赖项、设置视图即view的引擎目录以及模板、设置静态资源路径、配置通用的中间件、引入路由和一些错误处理中间件等。

// 引入依赖包
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');//node.js的HTTP请求记录器中间件
var { 
  jsonFormat
} = require('./middlewares')
var {
  baseUrl
} = require('./config')

// 引入路由文件
var indexRouter = require('./routes/index');
var jopRouter = require('./routes/jop');

// 创建应用实例
var app = express();

// // 设置视图目录和模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


 // 以下皆为注册中间件
// 内置中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 路由中间件,使用jsonFormat中间件处理所有请求的数据响应格式为application/json
app.use(baseUrl + '/', jsonFormat)

app.use(baseUrl + '/', indexRouter);
app.use(baseUrl + '/jop', jopRouter);



// 错误处理中间件
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { str: '<h1>哈哈哈哈</h1>' });
});

// 导出app实例对象
module.exports = app;
