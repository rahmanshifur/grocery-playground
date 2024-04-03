
import { Box } from "@mui/material"
import Footer from "./footer"
import Header from "./header"

const Layout = (props) => {

   return (
      <Box>
         <Header />
         {props.children}
         <Footer />
      </Box>
   )
}
export default Layout
