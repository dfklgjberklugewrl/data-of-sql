department

1. 查询部门信息：通过get方式调用'department/'接口实现查询所有部门的信息；
2. 查询指定部门信息：通过get方式调用'department/:dept_id'接口实现查询指定部门信息的功能；
3. 新增部门：通过post方式调用'department/'接口实现新增部门的功能；
4. 更新部门：通过put方式调用'department/:dept_id'接口实现更新指定部门的信息；
5. 删除部门：通过delete方式调用'department/:dept_id'接口实现删除指定部门的功能。

studnet 

1. 添加学生：POST请求到路由路径/students，调用add函数。
2. 删除学生：DELETE请求到路由路径/students/:stu_id，其中:stu_id表示学生的ID，调用dele函数。
3. 修改学生信息：PUT请求到路由路径/upstudents/:stu_id，其中:stu_id表示学生的ID，调用upstudents函数。
4. 查询学生信息：

- 获取所有学生信息：GET请求到路由路径/students，调用get_all函数。
- 获取单个学生信息：GET请求到路由路径/students/:stu_id，其中:stu_id表示学生的ID，调用get_one函数。



course

1. 添加课程：使用 HTTP POST 方法，路径为 '/course/add'，处理函数为 add。
2. 删除课程：使用 HTTP DELETE 方法，路径为 '/course/delete/:id'，处理函数dele
3. 更新课程：使用 HTTP PUT 方法，路径为 '/course/update/:id'，处理函数为 update。
4. 查询课程：使用 HTTP GET 方法，路径为 '/course/:course_id'，处理函数为 search。
5. 查询所有课程：所有HTTP GET方法，路径为'/course'处理函数为search_all





- score

  

1. 添加成绩 - POST /score
2. 删除成绩 - DELETE /score/:stu_id/:course_id
3. 获取成绩列表 - GET /score
4. 获取单个成绩 - GET /score/:stu_id/:course_id





task

1. 获取某个部门员工平均年龄 - GET /task/department/age

2. 获取年龄高于平均年龄的员工 - GET /task/above_average_age

3. 获取某课程学时数量 - GET /task/course/count/:hour

4. 获取某个学生某门课程的平均成绩 - GET /task/avg/:stu_id/:course_id

5. 获取某个学生的学分 - GET /task/credit/:stu_id

   
