import sj from '../images/sj.jpg'
import xx1 from '../images/xx1.png'
import xx from '../images/xx.png'
import jshi from '../images/jshi.jpg'
import js from '../images/js.jpg'
import kc1 from '../images/kc1.jpg'
import kc from '../images/kc.jpg'
import grade from '../images/yun.jpg'
import cover from '../images/2.png'
import department1 from '../images/3.jpg'
import department2 from '../images/4.jpg'
import course from '../images/5.jpg'
import '../styles/Index.module.css'
import { Grid, Button, Box, colors } from "@mui/material";
// import { blue } from "@mui/material/colors";
import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Index.module.css'
import Typography from '@mui/material/Typography';
import Link from "@/components/link";


const theme = createTheme({
  unstable_sxConfig: {
    // You can now use the borderRadius key in sx
    // by providing direct values from the palette
    borderRadius: {
      themeKey: 'shape',
    },
  },
  shape: {
    lg: 10,
  },
});

export default function Home() {



  return (
    <>
      <Grid container spacing={0} >

        <Grid xs={12} sx={
          {
            backgroundColor: "purple",
            height: 30
          }
        }>
          <item></item>
        </Grid>
        {/* 封面 */}
        <Grid xs={3} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item></item>
        </Grid>


        <Grid xs={3} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item>
            <Typography variant="h3" gutterBottom sx={{
              color: 'white'
            }}>
              学生管理系统
            </Typography>
            <Typography variant="h4" gutterBottom sx={{
              color: 'white'
            }}>
              欢迎来到学生管理系统
            </Typography>
          </item>
        </Grid>


        <Grid xs={3} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item>
            <ThemeProvider theme={theme}>
              <Box sx={{
                borderRadius: 'lg',
                border: 1, p: 4,
                backgroundColor: "white",
                height: 300,
                position: 'relative',
                top: 15,
                width: 250,
                objectFit: "cover",
                overflow: "hidden"
              }}>
                <Image src={cover} layout='fill'/>
              </Box>
            </ThemeProvider>
          </item>
        </Grid>


        <Grid xs={3} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item></item>
        </Grid>

        {/* 部门 */}
        <Grid xs={12} sx={{
          backgroundColor: 'black',
          height: 800,
          position: 'relative',
          objectFit: "cover",
          overflow: "hidden"
        }}>
          <item>
            <Image src={department1} layout='fill' />
            <Box sx={{
              backgroundColor: 'black',
              width: 600,
              height: 600,
              position: 'relative',
              top: 105,
              left: 400,
              objectFit: "cover",
              overflow: "hidden"
            }}
            >
              <Image src={department2} layout='fill'/>
              <Typography variant="h3" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 10,
                left: 10
              }}>
                部门
              </Typography>

              <Typography variant="h4" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 10,
                left: 30
              }}>
                部门列表
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 10,
                left: 30
              }}>
                查看所有的部门,了解部门<br />基本信息以及人数、课程、<br />学生等详细信息
              </Typography>

              <Box sx={{
                backgroundColor: 'blue',
                position: 'relative',
                width: 180,
                height: 180,
                top: 30,
                left: 20
              }}
              >
                <Image src={xx1} layout='fill' />
              </Box>

              <Typography variant="h6" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 50,
                left: 60
              }}>
                人员统计
              </Typography>

              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 60,
                left: 20
              }}>
                查看每个部门的教师和学生<br />人数以及其他人员详细信息
              </Typography>

              <Typography variant="h4" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: -368,
                left: 400
              }}>
                部门详情
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: -368,
                left: 380
              }}>
                查看部门详细信息,包括教<br />师成员等,并可以编辑和删<br />除部门信息
              </Typography>
              <Box sx={{
                backgroundColor: 'blue',
                position: 'relative',
                width: 180,
                height: 180,
                top: -348,
                left: 380
              }}
              >
                <Image src={sj} layout='fill' />
              </Box>

              <Typography variant="h6" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: -328,
                left: 420
              }}>
                教师分配
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: -328,
                left: 380
              }}>
                创建教学计划并分配教室,确<br />保最佳的学生学习环境
              </Typography>
            </Box>

          </item>
        </Grid>
        {/* 学生 */}
        <Grid xs={12} sx={{
          backgroundColor: 'black',
          height: 450,
          position: 'relative',
          objectFit: "cover",
          overflow: "hidden"
        }}>
          <item>
            <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 100,
              left: 400
            }}>
              学生
            </Typography>
            <Box sx={{
              backgroundColor: 'blue',
              position: 'relative',
              width: 300,
              height: 100,
              top: 110,
              left: 400
            }}
            >
              <Typography variant="h5" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                学生列表
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                查看所有学生的基本信息,可批量操作将学生与部门和课程相关联
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: 'blue',
              position: 'relative',
              width: 300,
              height: 100,
              top: 140,
              left: 400
            }}
            >
              <Typography variant="h5" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                添加学生
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                在系统中添加新的学生信息,输入基本信息并将学生与所属部门、课程进行关联
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: 'blue',
              position: 'relative',
              width: 300,
              height: 100,
              top: -90,
              left: 750
            }}
            >
              <Typography variant="h5" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                学生详情
              </Typography>
              <Typography variant="h8" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                查看学生详细信息,包括基本信息等,可编辑和删除学生信息
              </Typography>
            </Box>

            <Box sx={{
              backgroundColor: 'blue',
              position: 'relative',
              width: 300,
              height: 100,
              top: -60,
              left: 750
            }}
            >
              <Typography variant="h5" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                编辑学生
              </Typography>
              <Typography variant="h80" gutterBottom sx={{
                color: 'white',
                position: 'relative',
              }}>
                修改学生信息,更新基本信息、添加成绩等
              </Typography>
            </Box>
          </item>
        </Grid>

        {/* 课程 */}
        <Grid xs={12} sx={{
          backgroundColor: 'black',
          height: 800,
          position: 'relative',
          objectFit: "cover",
          overflow: "hidden"
        }}>
          <item>
            <Image src={course} layout='fill' />
            <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 80,
              left: 400
            }}>
              课程
            </Typography>
            <Box sx={{
              backgroundColor: 'blue',
              width: 200,
              height: 200,
              position: 'relative',
              top: 100,
              left: 500
            }}
            >
              <Image src={kc} layout='fill' />
            </Box>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 110,
              left: 550
            }}>
              课程列表
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 110,
              left: 500
            }}>
              查看所有课程的基本信息,了解<br />教师和学生情况等详细信息
            </Typography>
            <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 300,
              left: 500
            }}>
              添加课程
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 300,
              left: 500
            }}>
              在系统中添加新的课程信息,输<br />入基本信息并将课程所属部门,<br />教师进行关联
            </Typography>
            <Box sx={{
              backgroundColor: 'blue',
              height: 200,
              width: 200,
              position: 'relative',
              top: -300,
              left: 800
            }}
            >
              <Image src={kc1} layout='fill' />
            </Box>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -290,
              left: 850
            }}>
              课程详情
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -290,
              left: 800
            }}>
              查看特定课程的详细信息、教学<br />计划、课堂作业等,可以编辑和删<br />除相关信息
            </Typography>
            <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -120,
              left: 800
            }}>
              编辑课程
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -120,
              left: 800
            }}>
              修改课程信息,进行基本信息的更<br />新、添加排课计划并设定课程评<br />分规则等
            </Typography>
          </item>
        </Grid>


        {/* 成绩 */}
        <Grid xs={2} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item></item>
        </Grid>

        {/* 第二块 */}
        <Grid xs={5} sx={
          {
            backgroundColor: "black",
            height: 400,
            position: 'relative'
          }
        }>
          <item>

            <Typography variant="h4" gutterBottom sx={{
              color: 'white'

            }}>
              成绩
            </Typography>

            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 0,
              left: 0
            }}>
              成绩列表
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 0,
              left: 0
            }}>
              查看所有学生成<br />绩的基本信息,进<br />行批量和个体的<br />操作分析,为学生,<br />
              教师和部门提供<br />参考依据
            </Typography>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -165,
              left: 150
            }}>
              添加成绩
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -165,
              left: 150
            }}>
              在系统中添加新的<br />学生成绩信息,输入<br />基本信息并将成绩<br />与所属课程和学生<br />
              进行关联
            </Typography>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -310,
              left: 300
            }}>
              编辑成绩
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -310,
              left: 300
            }}>
              查询并修改学生<br />成绩的详细信息,<br />修改、删除、录<br />入等
            </Typography>
          </item>
        </Grid>

        {/* 第三块 */}
        <Grid xs={3} sx={
          {
            backgroundColor: "black",
            height: 400,
            position: 'relative'
          }
        }>
          <item>
            <Image src={grade} layout='fill' />
          </item>
        </Grid>

        {/* 第四块 */}
        <Grid xs={2} sx={
          {
            backgroundColor: "black",
            height: 400
          }
        }>
          <item></item>
        </Grid>
        {/* 任务 */}
        <Grid xs={12} sx={
          {
            backgroundColor: "black",
            height: 700,
            position: 'relative',
            objectFit: "cover",
            overflow: "hidden"
          }
        }>
          <item>
            <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 10,
              left: 400
            }}>
              任务
            </Typography>
            <Box sx={{
              backgroundColor: 'blue',
              height: 200,
              width: 200,
              position: 'relative',
              top: 20,
              left: 400
            }}
            >
              <Image src={js} layout='fill' />
            </Box>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 40,
              left: 420
            }}>
              员工平均年龄
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: 60,
              left: 380
            }}>
              统计员工的年龄数据并计算平均<br />
              值,在页面上展示平均年龄和员工<br />
              详细信息
            </Typography>

            <Box sx={{
              backgroundColor: 'blue',
              height: 200,
              width: 200,
              position: 'relative',
              top: -285,
              left: 650
            }}
            >
              <Image src={jshi} layout='fill' />
            </Box>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -265,
              left: 650
            }}>
              高于平均年龄员工
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -245,
              left: 630
            }}>
              查看所有年龄高于平均数的员工<br />
              了解他们的学历、职称、工龄等<br />
              重要信息
            </Typography>

            <Box sx={{
              backgroundColor: 'blue',
              height: 200,
              width: 200,
              position: 'relative',
              top: -587,
              left: 900
            }}
            >
              <Image src={xx} layout='fill' />
            </Box>
            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -567,
              left: 920
            }}>
              课程学时数量
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -547,
              left: 890
            }}>
              统计所有学生已选课程的学时数<br />
              量,并在页面上以图表的形式展<br />
              示
            </Typography>

            <Typography variant="h5" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -450,
              left: 350
            }}>
              学生平均成绩
            </Typography>
            <Typography variant="h8" gutterBottom sx={{
              color: 'white',
              position: 'relative',
              top: -450,
              left: 350
            }}>
              统计所有学生的平均成绩数据,可以根据条件筛选
            </Typography>
          </item>
        </Grid>
      </Grid>
    </>
  );

}

