var express = require('express');
var router = express.Router();
const DBfactory = require('../utils/MysqlDBWrap')

// 处理前端请求
router.post('/', function (req, res) {
    let DBConn = new DBfactory()
    let p = []
    console.log('req.body', req.body)
    // 解析 body
    for(let i in req.body){
        p.push(new Promise((resolve,reject) =>{
            // 执行 MysqlDBWrap 中的 query 方法
            DBConn.query(req.body[i]).then(data => {
              resolve(data)
            }, err => {
              console.log(err)
              reject(err)
            })
        } ))
    }
    // 等待Promise调用都完成
    Promise.all(p).then(result=>{
      // 返回数据
      res.send(JSON.stringify(result))
      DBConn.end()
    },()=>{
      res.send('0')
      DBConn.end()
    })
});

module.exports = router;
