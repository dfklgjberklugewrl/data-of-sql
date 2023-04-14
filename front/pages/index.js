
import cover from '../images/2.png'
import department1 from '../images/3.jpg'
import department2 from '../images/4.jpg'
import '../styles/Index.module.css'
import { Grid, Button, Box, colors } from "@mui/material";
// import { blue } from "@mui/material/colors";
import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Index.module.css'
import Typography from '@mui/material/Typography';

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

              }}>
                <Image src={cover} layout="fill" />
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
          height: 700,
          position: 'relative'
        }}>
          <item>
            <Image src={department1} layout='fill' />
            <Box sx={{
              backgroundColor: 'blue',
              width: 500,
              height: 500,
              position: 'relative',
              top: 105,
              left: 470
            }}
            >
              <Image src={department2} layout='fill' />
              <Typography variant="h4" gutterBottom sx={{
                color: 'white',
                position: 'relative',
                top: 10,
                left: 10
              }}>
                部门
              </Typography>
            </Box>

          </item>
        </Grid>
        {/* 学生 */}
        <Grid xs={12} sx={{
          backgroundColor: 'black',
          height: 450,
          position: 'relative'
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

            </Box>
          </item>
        </Grid>


        <Grid xs={8}>
          <item>xs=8</item>
        </Grid>
        <Grid xs={4}>
          <item>xs=4</item>
        </Grid>


        <Grid xs={8}>
          <item>xs=8</item>
        </Grid>
        <Grid xs={4}>
          <item>xs=4</item>
        </Grid>
      </Grid>
    </>


  );

}

