import { Box } from "@mui/material"
import PdtCard from "../../components/card"

const Product = ({ hadHref, ImgHref, hadSize, title, src }) => {
   return (
      <Box>


         <PdtCard
            hadHref={hadHref}
            ImgHref={ImgHref}
            hadSize={hadSize}
            title={title}
            src={src}
            width={140}
         />

      </Box>
   )
}

export default Product


// headdingText={"Best Selling Product"}

// hadHref={'/dfas/'}
// ImgHref={'/sgas/'}
// size={'sm'}
// title={'gjsiofjoasjkaiogjdlnasha'}
// src={Img}
// width={140}