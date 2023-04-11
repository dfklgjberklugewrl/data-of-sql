const {query,update,dele} = require('../utils/conndb');

const add = (req, res) => {
    const { course_id, course_name, course_grade, course_hour, course_credit } = req.body;
    const sql = "INSERT INTO course (course_id, course_name, course_grade, course_hour, course_credit) VALUES (?, ?, ?, ?, ?)";
    const params = [course_id, course_name, course_grade, course_hour, course_credit];
    query(sql, params, results => {
        res.send('课程添加成功.');
    });
}

const delecourse = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM course WHERE course_id = ?";
    const params = [id];
    dele(sql, params, results => {
        res.send('课程删除成功.');
    });
}

const updatecourse = (req, res) => {
    const { id } = req.params;
    const { course_name, course_grade, course_hour, course_credit } = req.body;
    const sql = "UPDATE course SET course_name = ?, course_grade = ?, course_hour = ?, course_credit = ? WHERE course_id = ?";
    const params = [course_name, course_grade, course_hour, course_credit, id];
    update(sql, params, results => {
        res.send('课程更新成功');
        
    });
}

const serach = (req, res) => {
    const { course_id } = req.params;
    const sql = "SELECT * FROM course WHERE course_id = ?";
    const params = [course_id];
    query(sql, params, results => {
        res.send(results);
    });
}

const serach_all = (req, res) => {
    const { course_id } = req.params;
    const sql = "SELECT * FROM course ";
    const params = [course_id];
    query(sql, params, results => {
        res.send(results);
    });
}

module.exports = { add, delecourse, updatecourse, serach ,serach_all }