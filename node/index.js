const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const departmentRouter = require('./router/departmentRouter')
const studentRouter = require('./router/studentRouter')
const courseRouter = require('./router/courseRouter')
const scoreRouter = require('./router/scoreRouter')
const task = require('./router/task')

const pre = require('./utils/createdb')

pre()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello welecome to Student management system !')
})

app.use('/department', departmentRouter)
app.use('/student', studentRouter)
app.use('/course', courseRouter)
app.use('/score', scoreRouter)
app.use('/task', task)

app.listen(3001, function () {
  console.log('Server running on port 3001');
});






// // 查询每个学生已修学分
// app.get('/total_credit', function(req, res) {
//   const query = `SELECT stu_id, SUM(course_credit) AS total_credit
//                  FROM score JOIN course ON score.course_id = course.course_id
//                  GROUP BY stu_id`;
//   connection.query(query, function(err, results, fields) {
//     if (err) throw err;
//     res.send(results);
//   });
// });



// // 触发器实现自动更新学分
// const update_credit_trigger = `CREATE TRIGGER update_credit AFTER INSERT ON score FOR EACH ROW
//                                BEGIN
//                                  DECLARE credit INT;
//                                  SELECT course_credit INTO credit FROM course WHERE course_id = NEW.course_id;
//                                  IF NEW.score >= 60 
