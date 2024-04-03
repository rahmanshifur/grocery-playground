import { Box, Container } from "@mui/material"
import BestSellingProduct from "../../components/best-selling-product"
import Sideder from "../../components/layout/sidebar"
import SpacialOffer from "../../components/spacial-offer"

const HomePage = () => {
   return (
      <Container>
         <Box>
            <Sideder />
         </Box>
         <BestSellingProduct />
         <SpacialOffer />
      </Container>
   )
}

export default HomePage

