const {query, insert} = require('../utils/conndb');


const add = (req, res) => {
    const { stu_id, course_id, score, term } = req.body
    const score_remark = score > 60 ? 'no' : 'yes'


    const sql = `INSERT INTO score (stu_id, course_id, term, score, score_remark) VALUES (?, ?, ?, ?, ?)`; 
    const params = [stu_id, course_id, term, score, score_remark]
    insert(sql, params, result => {

        res.json({mss:"成绩添加成功"})
        

    })
}

const dele = (req, res) => {
    const { stu_id, course_id } = req.params
    const sql = 'DELETE FROM score WHERE stu_id = ? AND course_id = ?'
    const params = [stu_id, course_id]
    query(sql, params, result => {

        res.json({ msg: "删除成功" })

    })
}

const get_all = (req, res) => {
    const { page = 1, size = 10 } = req.query
    const start = (page - 1) * size
    const sql = 'SELECT * FROM score LIMIT ?, ?'
    const params = [start, size]
    query(sql, params, result => {
        res.json({ code: 200, data: result })
    })
}
const get_one = (req, res) => {
    const { stu_id, course_id } = req.params
    const sql = 'SELECT * FROM score WHERE stu_id = ? AND course_id = ?'
    const params = [stu_id, course_id]
    query(sql, params, result => {
        if (result.length > 0) {
            res.json({ code: 200, data: result[0] })
        } else {
            res.json({ code: 400, msg: '成绩不存在' })
        }
    })
}
module.exports = { add, dele, get_all, get_one }