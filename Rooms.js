import React from 'react'
import './Rooms.css'
import { Card, CardContent } from '@mui/material'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import BedTwoToneIcon from '@mui/icons-material/BedTwoTone';
import domroom from '../../assets/domroom.jpg';
import twosharebed from '../../assets/twosharebed.jpg'
import  rtidpbeb from '../../assets/rtidpbeb.webp'
import privatebed from '../../assets/privatebed.jpg'
import singlebed from '../../assets/singlebed.avif'
import { Button, Typography } from '@mui/material';
import Footer from '../../components/footer/Footer';
function Rooms() {
  return (
    <section>
      <div className='rooms-heading'>
        <h1 style={{ marginTop: "40px", fontSize: "40px", marginLeft: "120px" }}>Rooms</h1>
      </div>
      <div style={{marginLeft: "30px" }}>
      <Card className='main-card' style={{ width: "1300px", }} >
        {/* <CardContent className='cardlist' > */}
        <div>
          <img src={domroom} alt='' style={{ width: "500px" }} />
        </div>
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "25px", marginTop: "15px" }}>Standard 6 Bed Female Dorm Shared Bathroom</h1>
          <p style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", marginTop: "25px" }}>Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
          <div className='bedicons'>
            <div style={{ display: "flex", gap: '4px' }}>
              <PersonOutlineTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", width: "50px", height: "40px", marginTop: "10px" }}>Sleeps</Typography>
            </div>
            <div style={{ display: "flex", gap: '4px',marginLeft:"25px" }}>
              <BedTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px" }}>1 bunk bed</Typography>
            </div>

          </div>
        </div>

        <div className='amount'>
          <div style={{display:"flex ", marginBottom:"20px"}}>
            <h1 className='amount-text'>$19</h1>
            <h3 className='days-text'>/1 Night</h3>
          </div>
          <div style={{display:"flex", marginBottom:"10px",marginLeft:"25px"}}>
            <h3 className='amount-texts'>$89</h3>
            <h3 className='days-texts'>/7 Night</h3>
          </div>
          <Button variant="contained" style={{width:"160px"}}>Book now</Button>
        </div>
        {/* </CardContent> */}
      </Card>

      <Card className='main-card' style={{ width: "1300px" }} >
        {/* <CardContent className='cardlist' > */}
        <div>
          <img src={twosharebed} alt='' style={{ width: "500px" }} />
        </div>
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "25px", marginTop: "15px" }}>Standard Twin Room Private Shared Bathroom</h1>
          <p style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", marginTop: "25px" }}>Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
          <div className='bedicons'>
            <div style={{ display: "flex", gap: '4px' }}>
              <PersonOutlineTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px",  height: "40px", marginTop: "10px" }}>2 Sleeps</Typography>
            </div>
            <div style={{ display: "flex", gap: '4px',marginLeft:"25px" }}>
              <BedTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px",  }}>1 Full bed</Typography>
            </div>

          </div>
        </div>

        <div className='amount'>
          <div style={{display:"flex ", marginBottom:"20px"}}>
            <h1 className='amount-text'>$39</h1>
            <h3 className='days-text'>/1 Night</h3>
          </div>
          <div style={{display:"flex", marginBottom:"10px"}}>
            <h3 className='amount-texts'>$189</h3>
            <h3 className='days-texts'>/7 Night</h3>
          </div>
          <Button variant="contained" style={{width:"160px"}}>Book now</Button>
        </div>
        {/* </CardContent> */}
      </Card>

      <Card className='main-card' style={{ width: "1300px" }} >
        {/* <CardContent className='cardlist' > */}
        <div>
          <img src={privatebed} alt='' style={{ width: "500px" }} />
        </div>
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "25px", marginTop: "15px" }}>Superior Double Bed Private Ensuite</h1>
          <p style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", marginTop: "25px" }}>Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
          <div className='bedicons'>
            <div style={{ display: "flex", gap: '4px' }}>
              <PersonOutlineTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px",  height: "40px", marginTop: "10px" }}>1 Sleeps</Typography>
            </div>
            <div style={{ display: "flex", gap: '4px',marginLeft:"25px" }}>
              <BedTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px",  }}>Full bed</Typography>
            </div>

          </div>
        </div>

        <div className='amount'>
          <div style={{display:"flex ", marginBottom:"20px"}}>
            <h1 className='amount-text'>$49</h1>
            <h3 className='days-text'>/1 Night</h3>
          </div>
          <div style={{display:"flex", marginBottom:"10px"}}>
            <h3 className='amount-texts'>$289</h3>
            <h3 className='days-texts'>/7 Night</h3>
          </div>
          <Button variant="contained" style={{width:"160px"}}>Book now</Button>
        </div>
        {/* </CardContent> */}
      </Card>
      <Card className='main-card' style={{ width: "1300px" }} >
        {/* <CardContent className='cardlist' > */}
        <div>
          <img src={rtidpbeb} alt='' style={{ width: "500px" }} />
        </div>
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "25px", marginTop: "15px" }}>Triple Room Private Shared Bathroom</h1>
          <p style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", marginTop: "25px" }}>Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
          <div className='bedicons'>
            <div style={{ display: "flex", gap: '4px' }}>
              <PersonOutlineTwoToneIcon style={{ width: "50px", height: "40px", marginLeft:'15px'}} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px" }}>3 Sleeps</Typography>
            </div>
            <div style={{ display: "flex", gap: '4px',marginLeft:"25px" }}>
              <BedTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px",  }}>2 Full bed</Typography>
            </div>

          </div>
        </div>

        <div className='amount'>
          <div style={{display:"flex ", marginBottom:"20px"}}>
            <h1 className='amount-text'>$69</h1>
            <h3 className='days-text'>/1 Night</h3>
          </div>
          <div style={{display:"flex", marginBottom:"10px"}}>
            <h3 className='amount-texts'>$349</h3>
            <h3 className='days-texts'>/7 Night</h3>
          </div>
          <Button variant="contained" style={{width:"160px"}}>Book now</Button>
        </div>
        {/* </CardContent> */}
      </Card>
      <Card className='main-card' style={{ width: "1300px" }} >
        {/* <CardContent className='cardlist' > */}
        <div>
          <img src={singlebed} alt='' style={{ width: "500px" }} />
        </div>
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "25px", marginTop: "15px" }}>Standard 4 Bed Dorm Shared Bathroom</h1>
          <p style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", marginTop: "25px" }}>Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
          <div className='bedicons'>
            <div style={{ display: "flex", gap: '4px' }}>
              <PersonOutlineTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px" }}>1 Sleeps</Typography>
            </div>
            <div style={{ display: "flex", gap: '4px',marginLeft:"25px" }}>
              <BedTwoToneIcon style={{ width: "50px", height: "40px", }} />
              <Typography style={{ fontSize: "18px", height: "40px", marginTop: "10px",  }}> bunk bed</Typography>
            </div>

          </div>
        </div>

        <div className='amount'>
          <div style={{display:"flex ", marginBottom:"20px"}}>
            <h1 className='amount-text'>$29</h1>
            <h3 className='days-text'>/1 Night</h3>
          </div>
          <div style={{display:"flex", marginBottom:"10px"}}>
            <h3 className='amount-texts'>$98</h3>
            <h3 className='days-texts'>/7 Night</h3>
          </div>
          <Button variant="contained" style={{width:"160px"}}>Book now</Button>
        </div>
        {/* </CardContent> */}
      </Card>
      </div>
      <Footer/>
    </section>
  )
}

export default Rooms