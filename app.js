
var express = require('express');
var path = require('path');

const dataRouter = require('./src/js/data')
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));

// 路由匹配--处理前端操作数据请求
app.use('/data', dataRouter);
// 前端列表页面路由
app.get('/list',function(req,res){
  const url = path.join(__dirname, 'public')
  res.sendFile(url +'/demo.html');
});

module.exports = app;
