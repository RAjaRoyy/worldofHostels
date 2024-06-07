import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

const Button = () => {
  return (
    <div  sx={{
      // width: {
      //   sx: 1.0, // 100%
      //   sm: 250,
      //   md: 350,
      // },
      paddingTop:"1.5rem",
      paddingBottom:"1.5rem",
      
      flexDirection:"column"
    }}>
 <Link>
    <button className="btn">Book now</button>
    </Link>
    </div>
   
  )
}

export default Button