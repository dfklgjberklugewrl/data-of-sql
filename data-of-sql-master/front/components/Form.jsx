import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
 const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));
 const StudentForm = () => {
  const classes = useStyles();
  const [stuId, setStuId] = useState('');
  const [stuName, setStuName] = useState('');
  const [stuGender, setStuGender] = useState('');
  const [stuType, setStuType] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');
  const [stuHometown, setStuHometown] = useState('');
  const [stuIdCard, setStuIdCard] = useState('');
  const [stuAddress, setStuAddress] = useState('');
  const [stuBirthdate, setStuBirthdate] = useState('');
  const [stuMajor, setStuMajor] = useState('');
  const [stuNation, setStuNation] = useState('');
  const [stuPhone, setStuPhone] = useState('');
  const [stuPayment, setStuPayment] = useState('');
  const [stuCredit, setStuCredit] = useState('');
  const [stuRemark, setStuRemark] = useState('');
  const [deptId, setDeptId] = useState('');
   const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      stu_id: stuId,
      stu_name: stuName,
      stu_gender: stuGender,
      stu_type: stuType,
      stu_enrollment_date: enrollmentDate,
      stu_hometown: stuHometown,
      stu_id_card: stuIdCard,
      stu_address: stuAddress,
      stu_birthdate: stuBirthdate,
      stu_major: stuMajor,
      stu_nation: stuNation,
      stu_phone: stuPhone,
      stu_payment: stuPayment,
      stu_credit: stuCredit,
      stu_remark: stuRemark,
      dept_id: deptId
    };
    axios.post('http://127.0.0.1:3001/student/students', data)
  .then(response => {
    console.log(response);
    // 添加模态框，显示提交成功信息
    alert('提交成功！');
  })
  .catch(error => {
    console.log(error);
    // 打印错误信息
    alert('提交失败！错误信息：' + error );
  });
  };
   return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="stu_id" label="学号" value={stuId} onChange={(e) => setStuId(e.target.value)} />
      <TextField id="stu_name" label="姓名" value={stuName} onChange={(e) => setStuName(e.target.value)} />
      <FormControl>
        <InputLabel id="stuGenderLabel">性别</InputLabel>
        <Select labelId="stuGenderLabel" id="stu_gender" value={stuGender} onChange={(e) => setStuGender(e.target.value)}>
          <MenuItem value="男">男</MenuItem>
          <MenuItem value="女">女</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="stuTypeLabel">学生类型</InputLabel>
        <Select labelId="stuTypeLabel" id="stu_type" value={stuType} onChange={(e) => setStuType(e.target.value)}>
          <MenuItem value="本科生">本科生</MenuItem>
          <MenuItem value="研究生">研究生</MenuItem>
        </Select>
      </FormControl>
      <TextField id="enrollment_date" label="入学日期" value={enrollmentDate} onChange={(e) => setEnrollmentDate(e.target.value)} />
      <TextField id="stu_hometown" label="家庭住址" value={stuHometown} onChange={(e) => setStuHometown(e.target.value)} />
      <TextField id="stu_id_card" label="身份证号" value={stuIdCard} onChange={(e) => setStuIdCard(e.target.value)} />
      <TextField id="stu_address" label="通信地址" value={stuAddress} onChange={(e) => setStuAddress(e.target.value)} />
      <TextField id="stu_birthdate" label="出生日期" value={stuBirthdate} onChange={(e) => setStuBirthdate(e.target.value)} />
      <TextField id="stu_major" label="专业" value={stuMajor} onChange={(e) => setStuMajor(e.target.value)} />
      <TextField id="stu_nation" label="民族" value={stuNation} onChange={(e) => setStuNation(e.target.value)} />
      <TextField id="stu_phone" label="联系电话" value={stuPhone} onChange={(e) => setStuPhone(e.target.value)} />
      <TextField id="stu_payment" label="缴费情况" value={stuPayment} onChange={(e) => setStuPayment(e.target.value)} />
      <TextField id="stu_credit" label="学分" value={stuCredit} onChange={(e) => setStuCredit(e.target.value)} />
      <TextField id="stu_remark" label="备注" value={stuRemark} onChange={(e) => setStuRemark(e.target.value)} />
      <TextField id="dept_id" label="所属系别" value={deptId} onChange={(e) => setDeptId(e.target.value)} />
      <Button className={classes.submitButton} variant="contained" color="primary" type="submit">
        提交
      </Button>
    </form>
  );
};
 export default StudentForm;