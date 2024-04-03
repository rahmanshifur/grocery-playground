import { Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"


const CustomHeading = ({ size, href, headdingText }) => {
   return (
      <HeaddingLink to={href ? href : ''} href={href} className="hadding"  >
         <HeaddingText size={size}>{headdingText}</HeaddingText>
      </HeaddingLink>
   )
}

export default CustomHeading

const HeaddingLink = styled(Link)(({ href, margin }) => ({
   textDecoration: (href ? "none" : ''),
   color: href ? 'black' : 'black' || '#fff',
   cursor: href ? 'poinder' : 'auto',
}))


const HeaddingText = styled(Typography)(({ size }) => ({
   fontSize: (size === 'x-sm' && "15px") || (size === 'sm' && "19px") || (size === 'md' && "22px") || (size === 'lg' && "27px") || (size === 'x-lg' && "36px") || (size === 'xx-lg' && "40px"),
   fontWeight: 600,
   display: 'inline-block'
}));