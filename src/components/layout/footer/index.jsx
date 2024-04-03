import { Box, Grid, styled } from "@mui/material";
import TopFooter from "./TopFooter";


const Footer = () => {

   return (
      <Box>

         <TopFooter />
      </Box >
   )
}
export default Footer

const FooterLogo = styled(Grid)(() => ({
   "@media (max-width:600px)": { justifyContent: 'space-around' },
   '.footer-logo-one': {
      "@media (max-width:767px)": { width: '170px', height: '80px', },
      "@media (max-width:469px)": { width: '100px', height: '50px', },
   },
   '.footer-logo-two': {

      "@media (max-width:767px)": { width: '170px', height: '80px', },
      "@media (max-width:469px)": { width: '100px', height: '50px', },
   }
}))
