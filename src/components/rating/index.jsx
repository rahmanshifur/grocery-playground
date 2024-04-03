

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';



export default function StarRating({ size }) {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <Rating name="customized-10" defaultValue={0} max={5} />
         <Typography sx={{ fontSize: '12px', ml: '5px' }}>( Riview )</Typography>
      </Box>
   );
}

