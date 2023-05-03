const express = require('express');
const router = express.Router();

const {get_all_info, get_appoint, add, updatedept, deledept}= require('../handle/departmenthandle')
// ```

// 接着，添加department表的增删改查的路由接口。

// 查询所有部门：

// ```
router.get('/',get_all_info);
// ```

// 查询指定部门：

// ```
router.get('/:dept_id', get_appoint);
// ```

// 新增部门：

// ```
router.post('/', add);
// ```

// 更新部门：

// ```
router.put('/:dept_id',updatedept );
// ```

// 删除部门：

// ```
router.delete('/:dept_id',deledept );
// ```

// 最后，将路由接口导出：

// ```
module.exports = router;