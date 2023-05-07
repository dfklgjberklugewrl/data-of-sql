import React, { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));


const Students = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('http://127.0.0.1:3001/student/students');
      const students = await res.json();

      setStudents(students);
      console.log(students)
    };

    fetchStudents();
  }, [students]);


  const classes = useStyles();

  const deleteStudent = () => {
    
  }
  const getDisplayedStudents = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return students.slice(startIndex, endIndex);
  };

  const total = students.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    // {/*  */}
    <div>
      <div class="center" >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <Link href="/"><Button variant="contained" color='primary'>返回</Button></Link>
              <TableRow>

                <TableCell>学生姓名</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">性别&nbsp;</TableCell>
                <TableCell align="right">类型&nbsp;</TableCell>
                <TableCell align="right">注册时间&nbsp;</TableCell>
                <TableCell align="right">操作&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getDisplayedStudents().map((student) => (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.stu_name}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{student.stu_gender}</TableCell>
                  <TableCell align="right">{student.stu_type}</TableCell>
                  <TableCell align="right">{student.stu_enrollment_date}</TableCell>
                  <TableCell align="right">  <Button variant="contained" color='primary' onChange={deleteStudent}>删除</Button></TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          className={classes.root}
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"

        />
      </div>
    </div>
  );
};

export default Students;
