const express = require('express');
const { add, serach, updatecourse, serach_all, delecourse } = require('../handle/coursehandle');
const app = express.Router();

// 添加课程
app.post('/course/add', add);

// 删除课程
app.delete('/course/delete/:id', delecourse);

// 更新课程
app.put('/course/update/:id', updatecourse);

// 查询课程
app.get('/course/:course_id', serach);

//查询所有课程
app.get('/course', serach_all)

module.exports = app