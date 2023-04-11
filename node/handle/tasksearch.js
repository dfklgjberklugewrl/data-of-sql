const { pool } = require('../utils/conndb')

const query = (sql, params, callback) => {
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
  callback(null, result);
  conn.release();
  });
  });
};

const department_avg = (req, res) => {
  const sql = `SELECT dept_name, AVG(YEAR(CURRENT_DATE) - YEAR(stu_birthdate)) AS avg_age
                FROM department
                JOIN student ON department.dept_id = student.dept_id
                GROUP BY department.dept_id
                HAVING AVG(YEAR(CURRENT_DATE) - YEAR(stu_birthdate)) = (
                  SELECT MAX(avg_age)
                  FROM (
                    SELECT AVG(YEAR(CURRENT_DATE) - YEAR(stu_birthdate)) AS avg_age
                    FROM student
                    GROUP BY dept_id
                  ) AS temp
                  UNION
                  SELECT MIN(avg_age)
                  FROM (
                    SELECT AVG(YEAR(CURRENT_DATE) - YEAR(stu_birthdate)) AS avg_age
                    FROM student
                    GROUP BY dept_id
                  ) AS temp
                )`;
  query(sql, [], (err, results, fields) => {

    res.json(results[0]);

  });
}

const above_average_age = (req, res) => {
  const sql = `
        SELECT COUNT(*) AS cnt
        FROM student
        WHERE YEAR(CURRENT_DATE) - YEAR(stu_birthdate) > (
            SELECT AVG(YEAR(CURRENT_DATE) - YEAR(stu_birthdate))
            FROM student
        )
    `;
  query(sql, [], (err, results) => {

    const count = results[0].cnt;
    res.json(results);
  });
}

const stu_avg = (req, res) => {
  const { stu_id, course_id } = req.body;
  query(`SELECT IF(AVG(score) > 75, '平均成绩小于75分', '平均成绩大于75分') AS avg_score FROM score WHERE stu_id = '${stu_id}' AND course_id = '${course_id}'`, (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
}

const hour = (req, res) => {
  let hour = parseInt(req.params.hour);
  let sql = 'SELECT COUNT(*) AS cnt FROM course WHERE course_hour > ?';
  query(sql, [hour], function (err, result) {

    res.send({ count: result[0].cnt });
  });
}

const total =  (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    const query = 'SELECT stu_id, SUM(course_credit) AS total_credit ' +
                  'FROM score JOIN course ON score.course_id = course.course_id ' +
                  'GROUP BY stu_id';

    pool.query(query, (err, rows) => {
      connection.release();
      if (err) throw err;
      res.json(rows);
    });
  });
}

module.exports = { department_avg, above_average_age, stu_avg, hour ,total}
