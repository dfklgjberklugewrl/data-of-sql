const {query,insert,dele} = require('../utils/conndb')


const add = (req, res) => {
    const { stu_id, stu_name, stu_gender, stu_type, stu_enrollment_date, stu_hometown, stu_id_card, stu_address, stu_birthdate, stu_major, stu_nation, stu_phone, stu_payment, stu_remark, dept_id } = req.body;
    const stu_credit = 0 ;
    const sql = `INSERT INTO student (stu_id, stu_name, stu_gender, stu_type, stu_enrollment_date, stu_hometown, stu_id_card, stu_address, stu_birthdate, stu_major, stu_nation, stu_phone, stu_payment, stu_credit, stu_remark, dept_id)
                 VALUES ('${stu_id}', '${stu_name}', '${stu_gender}', '${stu_type}', '${stu_enrollment_date}', '${stu_hometown}', '${stu_id_card}', '${stu_address}', '${stu_birthdate}', '${stu_major}', '${stu_nation}', '${stu_phone}', ${stu_payment}, ${stu_credit}, '${stu_remark}', '${dept_id}')`;
    insert(sql, (err, result) => {
        if (err) {
            if (err.message.includes('FOREIGN KEY constraint failed')) {
                return res.status(400).send('添加的外键不存在');
            }
            return res.status(500).send(err.message);
        }
        
        res.status(201).json({mess:"添加成功"});
        
       
    });
}


const delestudent = (req, res) => {
    const { stu_id } = req.params;
    const sql = `DELETE FROM student WHERE stu_id='${stu_id}'`;
    dele(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('找不到对应的学生');
        }
        res.send('删除成功');
    });
}


const upstudents = (req, res) => {
    const { stu_id } = req.params;
    const { stu_name, stu_gender, stu_type, stu_enrollment_date, stu_hometown, stu_id_card, stu_address, stu_birthdate, stu_major, stu_nation, stu_phone, stu_payment, stu_credit, stu_remark, dept_id } = req.body;
    const sql = `UPDATE student SET stu_name=?, stu_gender=?, stu_type=?, stu_enrollment_date=?, stu_hometown=?, stu_id_card=?, stu_address=?, stu_birthdate=?, stu_major=?, stu_nation=?, stu_phone=?, stu_payment=?, stu_credit=?, stu_remark=?, dept_id=? WHERE stu_id=?`;
    const values = [stu_name, stu_gender, stu_type, stu_enrollment_date, stu_hometown, stu_id_card, stu_address, stu_birthdate, stu_major, stu_nation, stu_phone, stu_payment, stu_credit, stu_remark, dept_id, stu_id];
    query(sql, values, (err, result) => {
        console.log(values)
        if (err) {
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                return res.status(400).send('修改后的外键不存在');
            }

        }

        res.send('修改成功');
        res.json(result)
    });
}
const get_all = (req, res) => {
    const sql = `SELECT * FROM student`;
    query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(results);
    });
}
const get_one = (req, res) => {
    const { stu_id } = req.params;
    const sql = `SELECT * FROM student WHERE stu_id='${stu_id}'`;
    query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (results.length === 0) {
            return res.status(404).send('找不到对应的学生');
        }
        res.send(results[0]);
    });
}
module.exports = { add, delestudent, upstudents, get_all, get_one }