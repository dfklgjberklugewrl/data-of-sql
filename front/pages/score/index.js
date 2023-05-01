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
const Score = () => {
  const [scores, setScores] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('http://127.0.0.1:3001/score/score');
      const scores = await res.json();
      
      setScores(scores);
      console.log(scores  )
    };

    fetchStudents();
  }, []);


  const classes = useStyles();


  const getDisplayedStudents = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return scores.slice(startIndex, endIndex);
  };

  const total = scores.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);


  return (

    <>
      <div class="center" >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>学生姓名</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">学号&nbsp;</TableCell>
                <TableCell align="right">课程名&nbsp;</TableCell>
                <TableCell align="right">学期&nbsp;</TableCell>
                <TableCell align="right">成绩&nbsp;</TableCell>
                <TableCell align="right">备注&nbsp;</TableCell>
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


export default Score