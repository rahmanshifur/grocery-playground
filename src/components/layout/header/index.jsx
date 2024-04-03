import styled from '@emotion/styled';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Container, FormControl, Link, OutlinedInput, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import MainLogo from '../../../asstes/LOgo/mainLogo.png';

export default function Header() {
   return (
      <AppBar position='fixed' >
         <Box sx={{
            flexGrow: 1,
            display: 'flex',
            background: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around',
            boxShadow: ' rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
         }}>
            <Container sx={{
               flexGrow: 1,
               display: 'flex',
               alignItems: 'center',
               padding: '0',
               margin: '0',
               justifyContent: 'space-around',
               alignItems: 'center'
            }}>
               <Box>
                  <Logo
                     src={MainLogo}
                     alt='Logo'
                  />
               </Box>
               <Box >
                  <FormControl sx={{ m: 1, width: '70ch', }} variant="outlined">
                     <OutlinedInput
                        sx={{ height: '40px', background: '#fff' }}
                        id="outlined-adornment-weight"
                        endAdornment={<SearchIcon position='end' />}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                           'aria-label': 'weight',
                        }}
                     />
                  </FormControl>
               </Box>
               <Box display={'flex'} >
                  <PersonOutlineIcon sx={{ marginRight: '10px' }} />
                  <Typography sx={{
                     textDecoration: 'none'
                  }}>
                     <Link sx={{ textDecoration: 'none', color: '#000' }}>Sign In</Link> | <Link sx={{ textDecoration: 'none', color: '#000' }}>Sign Up</Link> </Typography>
               </Box>
               <Typography fontSize={'50px'} color={'#5e5c5b'}>|</Typography>
               <Box sx={{ display: 'flex' }}>
                  <FavoriteBorderIcon sx={{ marginRight: '20px', fontSize: '40px', color: '#000' }} />
                  <AddShoppingCartIcon sx={{ marginRight: '20px', fontSize: '40px', color: '#000' }} />
               </Box>
            </Container>
         </Box >
      </AppBar>
   );
}

const Logo = styled('img')(() => ({
   width: '170px',
   height: 'auto',
   color: '#fff',
}))