import { Box } from "@mui/material"
import Img from "../../asstes/LOgo/mainLogo.png"
import PdtCard from "../../components/card"

const AboutPage = () => {
   return (
      <Box>
         <h1>This is About Page</h1>
         <PdtCard
            hadHref={'/dfas/'}
            ImgHref={'/sgas/'}
            size={'sm'}
            title={'gjsiofjoasjkaiogjdlnasha'}
            src={Img}
            width={140}
         />
      </Box>
   )
}

export default AboutPage