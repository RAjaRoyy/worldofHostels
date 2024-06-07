import React from 'react'

import { Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "black",marginTop:'100px' }}>
            <div className='footer-content'>
                <div >
                    <h6 style={{  fontWeight: "200", fontSize: "20px",}} >World of Hostels</h6>
                    <hr color='white' style={{ width: "250px" }}></hr>
                    <h6 variant='h6' style={{fontWeight:'200',fontSize:'20px'}}>About Us</h6>
                    <p style={{ width: "400px",fontWeight:'350',fontSize:'18px',color:'gray',fontFamily:'Open Sans'}}>
                        World of Hostels provides an enriching and immersive travel experience that goes beyond mere accommodation, allowing travelers to connect with the local culture, forge new friendships, and create unforgettable memories.
                    </p>
                </div>
                <div className='card-two' style={{ marginBottom:'100px' }}>
                        <h6 variant='h5' style={{fontWeight: "200",fontSize:'20px',fontFamily:'Open Sans' }}>Quick links</h6>

                        <div className='footer-list' style={{ marginTop: "10px" }}>
                            <a href='/'>Home</a>
                            <a href='/Rooms'>Rooms</a>
                            <a href='/About'>About Us</a>
                            {/* <a href='/'>Press Rooms</a> */}
                    </div>

                   

                </div>

                <div style={{ marginBottom: "145px" }} >
                    <h6 variant='h5' style={{ fontWeight: "200",fontSize:'20px',fontFamily:'Open Sans'}}>Resources</h6>
                    <div className='footer-list' style={{ marginTop: "10px" }}>
                        {/* <a href='/'>  Our work</a>
                        <a href='/'>Services</a>
                        <a href='/'>FAQ</a> */}
                        <a href='/Contact'>Contact us</a>
                        {/* <a href='/'>News</a> */}
                    </div>

                </div>

                <div style={{ marginBottom: "140px" }}>
                    <h6 variant='h5' style={{  gap: "20px",fontSize:'20px',fontWeight:'200',fontFamily:'OPen Sans' }} >Follow us on</h6>
                    <div className='footer-list' style={{ justifyContent:'space-evenly' }}>
                        {/* <a href='/'>  Home</a>
                        <a href='/Rooms'>Rooms</a>
                        <a href='/About'>About</a>
                        <a href='/Contact'>Contact</a>
                        <a href='/News'>News</a> */}
                         <div className='social-icons' style={{marginTop:'10px'}}>
                        <FacebookOutlinedIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <WhatsAppIcon />
                    </div>
                    </div>
                </div>

            </div>
            <hr style={{ color: "gray" }}></hr>
            <div style={{ display: 'flex',marginLeft:"90px",fontFamily:'Open Sans' }}>
                <div style={{ color: "gray", textAlign: 'start' }}>
                 <p >CopyRights@askin,All Right Resevrved</p>
                </div>
                <div style={{ textAlign: 'end', display: 'flex', color: 'gray' , marginLeft:"500px",fontFamily:'OPen Sans'}}>
                 <p >Privacy</p>
                <p style={{marginLeft:"80px"}}>Terms of Services</p>
                </div>

            </div>




        </div>
    )
}

export default Footer