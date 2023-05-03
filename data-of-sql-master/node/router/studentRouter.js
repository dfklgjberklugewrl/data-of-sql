const express = require('express');
const { add, upstudents, get_all, get_one, delestudent } = require('../handle/studenthandle');
const router = express.Router();

// 1.添加学生
router.post('/students', add);
//   ```
//   2. 删除学生信息：

// //   ```javascript
router.delete('/students/:stu_id', delestudent);
//   ```
//   3. 修改学生信息：

//   ```javascript
router.put('/upstudents/:stu_id', upstudents);
//   4. 查询学生信息：

// //   ```javascript
// 获取所有学生
router.get('/students', get_all);

// 获取单个学生信息
router.get('/students/:stu_id', get_one);
//   ```

module.exports = router