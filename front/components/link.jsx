import { Grid, Button, Box } from '@mui/material';
import Link from 'next/link';

const router = [
  {dire: "学生  ", url: "/student"},
  {dire: "部门  ", url: "/deparment"},
  {dire: "课程  ", url: "/course"},
  {dire: "成绩  ", url: "/score"},
  {dire: "任务", url: "/task"},
  {dire: "反馈", url: "/question"},
];

const MyComponent = () => {
  const rows = 2; // 总行数
  const cols = 3; // 总列数

  // 生成格子布局的数组
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      // 计算每个格子的序号
      const index = i * cols + j + 1;
      row.push(
        <Grid item key={index} xs={4}>
          <Link href={router[index-1].url}>
            <Button
              variant="contained"
              color="primary"
              sx={{ my: 5 }}
            >
               {router[index-1].dire}
            </Button>
          </Link>
        </Grid>
      );
    }
    grid.push(
      <Grid container key={i} spacing={16}>
        {row}
      </Grid>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div>{grid}</div>
    </Box>
  );
};

export default MyComponent;