import React from 'react';
import './ExploreRoom.css'
import { Link } from 'react-router-dom';
import Bangalorepic from '../../assets/Bangalorepic.jpg'
import ootypic from '../../assets/ootypic.jpg'
import chennaipic from '../../assets/chennaipic.jpeg'

const ExploreRoom = () => {


  return (<>
      
      <div className='slider'>

        <div className='slides-div'>
          <Link to="/Bengaluru"> <img src={Bangalorepic} alt="Bengaluru" /></Link>
          <h1 style={{color:"AppWorkspace"}}>Banglore</h1>
          <p style={{ color: "white",width:"350px",lineHeight:"30px" }}> Where Tradition Meets Innovation</p>
        </div>
        <div className='slides-div'>
          <Link to="/Ooty"><img src={ootypic} alt="Ooty" />
          </Link>
          <h1>Ooty</h1>
          <p style={{ color: " white",lineHeight:"30px",width:'350px' }}> Where Dreams Take a Scenic Route</p>
        </div>
        <div className='slides-div'>
         <Link to="/Chennai"><img src={chennaipic} alt="Chennai" /></Link> 
          <h1>Chennai</h1>
          <p style={{ color: " white",lineHeight:"30px",width:'350px' }}> Where Culture Dances with the Sea</p>
        </div>
      </div>
     


  </>
  );
};

export default ExploreRoom