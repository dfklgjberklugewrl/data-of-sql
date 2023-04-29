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






