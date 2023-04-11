const mysql = require("mysql2")

require('dotenv').config('../.env')

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.PASSWORD,
  port: 3307,
  database: "student_management_system",
  waitForConnections: true, // 设置为 true，允许等待直到有可用连接
  connectionLimit: 10, // 连接池大小，设置为你需要的大小
  queueLimit: 0, // 不限制请求队列长度
  acquireTimeout: 10000, // 设置获取连接的超时时间为
})

const insert = (sql, params, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接失败");
      console.log(err);
      pool.end();
      return;
    }
    conn.query(sql, params, (err, result, fields) => {
      if (err) {
        conn.release();
        callback(err);
        conn.release();
        return;
      }
      const insertedData = {
        id: result.insertId,
        ...params
      };
      console.log("插入成功：", insertedData);
      callback(insertedData);
      conn.release();
    });
  });
};

const query = (sql, params, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接失败")
      console.log(err)
      pool.end()
      return;
    }
    conn.query(sql, params, (err, result, fields) => {
      if (err) {
        conn.release()
        callback(result, fields)
        conn.release()
        return;
      }
      if (result && result.length >= 0) {

        console.log(result)

        callback(result, fields)
      } else {
        callback({ "message": "查询结果为空" })
      }
      conn.release()
    })
  }

  )
}

// update 函数
const update = (sql, params, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接失败");
      console.log(err);
      pool.end();
      return;
    }
    conn.query(sql, params, (err, result, fields) => {
      if (err) {
        conn.release();
        callback(err);
        conn.release();
        return;
      }
      console.log("更新成功：", result.changedRows, "行受影响");
      callback(null, result.changedRows);
      conn.release();
    });
  });
};

// delete 函数
const dele = (sql, params, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接失败");
      console.log(err);
      pool.end();
      return;
    }
    conn.query(sql, params, (err, result, fields) => {
      if (err) {
        conn.release();
        callback(err);
        conn.release();
        return;
      }
      console.log("删除成功：", result.affectedRows, "行受影响");
      callback(null, result.affectedRows);
      conn.release();
    });
  });
};

module.exports = { pool, query, insert, update, dele };