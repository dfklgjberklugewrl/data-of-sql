const { pool } = require('./conndb')

const pre = () => {
 // 创建department表
  pool.query(`CREATE TABLE IF NOT EXISTS department (
      dept_id VARCHAR(10) NOT NULL,
      dept_name VARCHAR(50) NOT NULL DEFAULT '',
      dept_head VARCHAR(20) NOT NULL DEFAULT '',
      dept_address VARCHAR(100) NOT NULL DEFAULT '',
      dept_count INT(11) NOT NULL DEFAULT '0',
      PRIMARY KEY (dept_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`, (err, result) => {
    if (err) throw err;
    console.log('Department table created!');
  });

  // 创建student表
  pool.query(`CREATE TABLE IF NOT EXISTS student (
      stu_id VARCHAR(20) NOT NULL,
      stu_name VARCHAR(20) NOT NULL DEFAULT '',
      stu_gender VARCHAR(2) NOT NULL DEFAULT '',
      stu_type VARCHAR(20) NOT NULL DEFAULT '',
      stu_enrollment_date DATE NOT NULL,
      stu_hometown VARCHAR(50) NOT NULL DEFAULT '',
      stu_id_card VARCHAR(20) NOT NULL DEFAULT '',
      stu_address VARCHAR(100) NOT NULL DEFAULT '',
      stu_birthdate DATE NOT NULL,
      stu_major VARCHAR(20) NOT NULL DEFAULT '',
      stu_nation VARCHAR(20) NOT NULL DEFAULT '',
      stu_phone VARCHAR(20) NOT NULL DEFAULT '',
      stu_payment DECIMAL(10,2) NOT NULL DEFAULT '0.00',
      stu_credit INT(11) NOT NULL DEFAULT '0',
      stu_remark VARCHAR(100) NOT NULL DEFAULT '',
      dept_id VARCHAR(10) NOT NULL,
      PRIMARY KEY (stu_id),
      KEY fk_dept_id (dept_id),
      CONSTRAINT fk_dept_id FOREIGN KEY (dept_id) REFERENCES department (dept_id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`, (err, result) => {
    if (err) throw err;
    console.log('Student table created!');
  });

  //   //   // 创建course表
  pool.query(`CREATE TABLE IF NOT EXISTS course (
      course_id VARCHAR(10) NOT NULL,
      course_name VARCHAR(50) NOT NULL DEFAULT '',
      course_grade INT(11) NOT NULL DEFAULT '0',
      course_hour INT(11) NOT NULL DEFAULT '0',
      course_credit INT(11) NOT NULL DEFAULT '0',
      PRIMARY KEY (course_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`, (err, result) => {
    if (err) throw err;
    console.log('Course table created!');
  });

  //   //   // 创建score表
  pool.query(`CREATE TABLE IF NOT EXISTS score (
  stu_id VARCHAR(20) NOT NULL,
  course_id VARCHAR(10) NOT NULL,
  term VARCHAR(10) NOT NULL DEFAULT '',
  score DECIMAL(5,2) NOT NULL DEFAULT '0.00',
  score_remark VARCHAR(100) NOT NULL DEFAULT '',
  PRIMARY KEY (stu_id, course_id),
  KEY fk_course_id (course_id),
  CONSTRAINT fk_course_id FOREIGN KEY (course_id) REFERENCES course (course_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_stu_id FOREIGN KEY (stu_id) REFERENCES student (stu_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`, (err, result) => {
    if (err) throw err;
    console.log('Score table created!');
  });

  //视图
  //  poll.query(`CREATE VIEW score_info AS
  //     SELECT department.dept_id, department.dept_name, student.stu_id, student.stu_name, course.course_id, course.course_name, student.stu_gender, YEAR(CURRENT_DATE) - YEAR(stu_birthdate) AS stu_age, score.term, score.score
  //     FROM department JOIN student
  //     ON department.dept_id = student.dept_id
  //     JOIN score
  //     ON student.stu_id = score.stu_id
  //     JOIN course
  //     ON score.course_id = course.course_id;`, (err, result) => {
  //    if (err) throw err;
  //    console.log('Score info view created!');
  //  });



  //触发器
  // CREATE TRIGGER update_student_score
  // AFTER INSERT ON score
  // FOR EACH ROW
  // BEGIN
  //     UPDATE student s
  //     SET s.stu_credit = (SELECT SUM(score) FROM score WHERE stu_id = NEW.stu_id)
  //     WHERE s.stu_id = NEW.stu_id;
  // END;
}

module.exports = pre;



