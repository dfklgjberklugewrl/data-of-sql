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

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));


const Course = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('http://127.0.0.1:3001/coure/coure');
      const courses = await res.json();

      setCourses(courses);
      console.log(courses)
    };

    fetchStudents();
  }, []);


  const classes = useStyles();


  const getDisplayedStudents = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return courses.slice(startIndex, endIndex);
  };

  const total = courses.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);



  return (

    <>
      <div class="center" >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>课程号</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">课程名称&nbsp;</TableCell>
                <TableCell align="right">开设年级&nbsp;</TableCell>
                <TableCell align="right">学习数&nbsp;</TableCell>
                <TableCell align="right">学分&nbsp;</TableCell>
                <TableCell align="right">操作&nbsp;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">高等数学&nbsp;</TableCell>
                <TableCell align="right">大一&nbsp;</TableCell>
                <TableCell align="right">48&nbsp;</TableCell>
                <TableCell align="right">4&nbsp;</TableCell>
                <TableCell align="right">
                  <a href=''>新增</a>&nbsp;
                  <a href=''>删除</a>&nbsp;
                  <a href=''>详情</a>&nbsp;
                  <a href=''>修改</a>&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getDisplayedStudents().map((student) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {student.stu_name}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{student.stu_gender}</TableCell>
                  <TableCell align="right">{student.stu_type}</TableCell>
                  <TableCell align="right">{student.stu_enrollment_date}</TableCell>
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
      </div>.
      <div>
      </div>
    </>
  );
};

export default Course
