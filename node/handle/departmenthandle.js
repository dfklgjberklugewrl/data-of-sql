const {query,insert,update,dele} = require('../utils/conndb');

const get_all_info = (req, res) => {
  const sql = 'SELECT * FROM department';
  query(sql, [], (result, fields) => {
    res.json(result);
  });
}

const get_appoint = (req, res) => {
  const { dept_id } = req.params;
  const sql = 'SELECT * FROM department WHERE dept_id = ?';
  query(sql, [dept_id], (result, fields) => {
    console.log(result)
    res.json(result);
  });
}

const add = (req, res) => {
  const { dept_id, dept_name, dept_head, dept_address, dept_count } = req.body;
  
  const sql = 'INSERT INTO department (dept_id, dept_name, dept_head, dept_address, dept_count) VALUES (?, ?, ?, ?, ?)';
  insert(sql, [dept_id, dept_name, dept_head, dept_address, dept_count], (result, fields) => {
  
    console.log(result)
    res.json(result);
  });
}

const updatedept = (req, res) => {
  const { dept_id } = req.params;
  const { dept_name, dept_head, dept_address, dept_count } = req.body;
  const sql = 'UPDATE department SET dept_name = ?, dept_head = ?, dept_address = ?, dept_count = ? WHERE dept_id = ?';
  update(sql, [dept_name, dept_head, dept_address, dept_count, dept_id], (result, fields) => {
    res.json({ message: '更新成功' });
  });
}

const deledept = (req, res) => {
  const { dept_id } = req.params;
  const sql = 'DELETE FROM department WHERE dept_id = ?';
  dele(sql, [dept_id], (result, fields) => {
    res.json({ message: '删除成功' });
  });
}

module.exports = { get_all_info, get_appoint, add ,updatedept,deledept }