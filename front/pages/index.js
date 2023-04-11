import Link from "@/components/link";
import '../styles/Index.module.css'
import { Grid,Button, Box } from "@mui/material";


export default function Home() {



  return (
    <>
<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
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
</Box>
      <Link />
    </>

    

  );

}

