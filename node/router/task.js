const express = require('express');
const task = express.Router();
const pool = require('../utils/conndb')
const { department_avg, above_average_age, stu_avg, hour, getAllCredits, total} = require('../handle/tasksearch');


task.get('/department/age',department_avg)

task.get('/above_average_age',above_average_age );

task.get('/course/count/:hour', hour);

task.get('/avg/:stu_id/:course_id', stu_avg);

// task.get('/credit', getAllCredits );
task.get('/total_credit',total);

module.exports = task;