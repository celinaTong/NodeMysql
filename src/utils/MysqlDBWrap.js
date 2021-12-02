// 导入 mysql
const mysql = require('mysql')

class MysqlDBWrap {
  constructor() {
    // 创建数据库连接
    this.conn = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      port: '3306',
      database: 'test_data'
    })
    this.conn.connect()
  }

  // 执行 sql 语句
  query(sql) {
    return new Promise((resolve, reject) => {
      this.conn.query(sql, function (err, result) {
          if (err) {
            console.log(err)
            reject(err)
          }
          // 返回执行结果
          resolve(result)
          console.log(result)
      });
    })
  }
  // 断开连接
  end() {
    this.conn.end();
  }
}
module.exports = MysqlDBWrap
