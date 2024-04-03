import styled from "@emotion/styled"

const { Box, Link } = require("@mui/material")


const CustomImage = ({ href, src, height, width }) => {
   return (
      <ImgLink href={href ? href : ''}>
         <CustomImg src={src} alt="img" height={height} width={width} />
      </ImgLink>
   )
}

export default CustomImage

const CustomImg = styled('img')(() => ({
}))

const ImgLink = styled(Link)(() => ({
   textDecoration: 'none',
}))