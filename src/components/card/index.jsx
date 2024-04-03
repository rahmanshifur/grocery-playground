import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import StarRating from '../rating';
import CustomButton from '../ui/custom-botton';
import CustomHeading from '../ui/custom-heading';
import CustomImage from '../ui/custom-img';

export default function PdtCard({ src, title, hadSize, ImgHref, hadHref, width }) {

   const [isFavorite, setIsFavorite] = React.useState(false)

   const handelFavorite = () => {
      setIsFavorite(!isFavorite)
   }

   return (
      <Box sx={{
         '& .custom-button': {
            m: '10px',
            borderRadius: '0px'
         }
      }}>
         <Card sx={{ maxWidth: 345 }}>
            <CustomImage
               href={ImgHref}
               src={src}
               width={'100%'}
            />
            <CardContent>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '8px' }}>
                  <CustomHeading
                     headdingText={title}
                     size={hadSize}
                     href={hadHref}
                  />
                  {isFavorite === true ?
                     <FavoriteIcon onClick={handelFavorite} sx={{ color: 'red' }} /> :

                     <FavoriteBorderIcon onClick={handelFavorite} />}
               </Box>
               <Box sx={{ display: 'flex', my: '5px', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px', mr: '35px' }}>$200</Typography>
                  <StarRating size={'small'} />
               </Box>
               <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
            <CardActions>
               <CustomButton
                  width='100%'
                  btnText={'Add To Cart'}
                  btnIcon={<AddShoppingCartIcon fontSize='small' />}
                  href={'/sdfas/'}
               />
            </CardActions>
         </Card>

      </Box >
   );
}
