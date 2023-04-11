import Link from "@/components/link";
import '../styles/Index.module.css'
import { Grid, Button, Box, colors } from "@mui/material";
import { blue } from "@mui/material/colors";



export default function Home() {



  return (
    <>
      {/* <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
  <Box gridColumn="span 8">
    <Item>xs=8</Item>
  </Box>
  <Box gridColumn="span 4">
    <Item>xs=4</Item>
  </Box>
  <Box gridColumn="span 4">
    <Item>xs=4</Item>
  </Box>
  <Box gridColumn="span 8">
    <Item>xs=8</Item>
  </Box>
</Box> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box gridColumn="span 12"
          sx={{
              height:60,
              
          }}
          >

          </Box>
        </Grid>
        <Grid item xs={4}>
          <item>xs=4</item>
        </Grid>
      </Grid>

      <Link />
    </>



  );

}

