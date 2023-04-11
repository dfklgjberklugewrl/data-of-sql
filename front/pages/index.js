import Link from "@/components/link";
import '../styles/Index.module.css'

import Box from '@mui/material/Box';


export default function Home() {



  return (
    <>
      <Box
      sx={{
        width: 1450,
        height: 30,
        backgroundColor:'purple',
      }}></Box>
      
      <Box
      sx={{
        width: 1450,
        height: 400,
        backgroundColor: 'black',
      }}>
        <div></div>
      </Box>    
      <Link />
    </>

    

  );

}

