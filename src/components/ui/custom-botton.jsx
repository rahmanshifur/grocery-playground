
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = (props) => {

   return (
      <BtnLink className="custom-button" onClick={props.onClick} to={props.href ? props.href : ''} props={props}>
         <span style={{ marginRight: '8px' }}>
            {props.btnIcon}
         </span>
         {props.btnText}
      </BtnLink >
   )
}

export default CustomButton;

const BtnLink = styled(Link)(({ props: { width } }) => ({
   textDecoration: 'none',
   color: '#fff',
   backgroundColor: " #3C1FF4",
   fontSize: '16px',
   fontWeight: 'bold',
   display: 'inline-block',
   boxShadow: '0px 0px 10px -3px rgba(0,0,0,0.5)',
   borderRadius: '5px',
   padding: '12px 25px',
   lineHeight: 1,
   letterSpacing: 1,
   width: width,
   alignItems: 'center',
   display: 'inline-flex',
   justifyContent: 'center'
}))
