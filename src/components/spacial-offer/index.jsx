
import { Box, Grid } from "@mui/material"
import Img from "../../asstes/LOgo/mainLogo.png"
import Product from "../../components/product"
import CustomHeading from "../../components/ui/custom-heading"

const SpacialOffer = () => {
   return (
      <Box>
         <Box sx={{ m: '30px 0px 30px 0px' }}>
            <CustomHeading headdingText={"Spacial Offer"} size={'lg'} />
         </Box>
         <Grid container /* columnSpacing={{ md: 2, sm: 2, lg: 3, }} rowSpacing={{ md: 2, sm: 2, xs: 3, lg: 3 }} */ columns={16} >
            <Grid item xs={16} sm={6} md={4} lg={4}>
               <Product
                  hadHref={'/dfas/'}
                  ImgHref={'/sgas/'}
                  hadSize={'sm'}
                  title={'gjsiofjoasjkaiogjdlnasha'}
                  src={Img}
               />
            </Grid>
            <Grid item xs={16} sm={6} md={4} lg={4}>
               <Product
                  hadHref={'/dfas/'}
                  ImgHref={'/sgas/'}
                  hadSize={'sm'}
                  title={'gjsiofjoasjkaiogjdlnasha'}
                  src={Img}
               />
            </Grid>
            <Grid item xs={16} sm={6} md={4} lg={4}>
               <Product
                  hadHref={'/dfas/'}
                  ImgHref={'/sgas/'}
                  hadSize={'sm'}
                  title={'gjsiofjoasjkaiogjdlnasha'}
                  src={Img}
               />
            </Grid>
            <Grid item xs={16} sm={6} md={4} lg={4}>
               <Product
                  hadHref={'/dfas/'}
                  ImgHref={'/sgas/'}
                  hadSize={'sm'}
                  title={'gjsiofjoasjkaiogjdlnasha'}
                  src={Img}
               />
            </Grid>
         </Grid>
      </Box>
   )
}

export default SpacialOffer