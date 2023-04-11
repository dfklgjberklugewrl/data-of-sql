const express = require('express');
const { add, dele, get_all, get_one } = require('../handle/scorehandle');

const router = express.Router();

// 添加成绩
router.post('/score', add)

// 删除成绩
router.delete('/score/:stu_id/:course_id',dele)

// 获取成绩列表
router.get('/score', get_all)

// 获取单个成绩
router.get('/score/:stu_id/:course_id', get_one)



module.exports = router