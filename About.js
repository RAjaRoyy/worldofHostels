import React, { useState } from 'react';
import './About.css'
import { Card } from '@mui/material'
import domroom from '../../assets/domroom.jpg'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { Button, Typography } from '@mui/material';
import BedTwoToneIcon from '@mui/icons-material/BedTwoTone';
import doublebeds from '../../assets/doublebeds.jpg';
import icon_booking from '../../assets/icon_booking.png'
import icon_key from '../../assets/icon_key.png';
import icon_reception from '../../assets/icon_reception.png'
import Footer from '../../components/footer/Footer';
import closeup from '../../assets/closeup.jpg';
import icon_hotels from '../../assets/icon_hotels.png'
import icon_value from '../../assets/icon_value.png'
import icon_hotel from '../../assets/icon_hotel.png'
import handsome from '../../assets/handsome.jpg'
import { TextField } from "@mui/material";
import Icon_check from '../../assets/Icon_check.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const About = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };


  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '380px',
      // height:"50px",
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    header1: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },


    icon: {
      fontSize: '15px',
      lineHeight: '15px',
    },
    icon1: {
      fontSize: '15px',
      lineHeight: '15px',
    },
    content: {
      marginTop: '16px',
      color: '#555',
      // height:'50px'
    },
    card1: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '300px',
      // height:"50px",
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleContent1 = () => {
    setIsOpen1(!isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleContent2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleContent3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <section>
      <div className='rooms-heading'>
        <h1 style={{ marginTop: "40px", fontSize: "40px", marginLeft: "120px" }}>About</h1>
      </div>
      <div className='main-About' >
        <h1 style={{ width: "700px", fontSize: "45px" }} >
          The main benefits to choose hosteller
        </h1>
      </div>


      <Card style={{ display: "flex", gap: "50px", width: '1000px', marginLeft: "250px", marginTop: "40px", height: "150px", padding: "30px" }}>
        <div style={{ width: "300px" }}>
          <h1>240+</h1>
          <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
        </div>
        <div style={{ width: "300px" }}>
          <h1>240+</h1>
          <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
        </div>
        <div style={{ width: "300px" }}>
          <h1>240+</h1>
          <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
        </div>
      </Card>
      <div>
        <h1 className='hostel-text'>Hostels Rooms</h1>

      </div>


      <div className='room-carts' >
        <div className='dom-pic'>
          <img src={domroom} alt='' style={{ width: "370px", height: "255px" }} className='bedimg' />
          <div className='domcont'>
            <h2 style={{ width: "400px" }}>Bed in 6-Bed Room with Shared Bathroom</h2>
            <div className='listofbed'>
              <div style={{ display: "flex", gap: '4px' }}>
                <PersonOutlineTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>Sleeps</Typography>
              </div>
              <div style={{ display: "flex", gap: '4px' }}>
                <BedTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>1 bunk bed</Typography>
              </div>
            </div>
            <Typography>See availability →</Typography>
          </div>
        </div>
        <div className='dom-pic'>
          <img src={doublebeds} alt='' style={{ width: "370px", height: "255px" }} className='bedimg' />
          <div className='domcont'>
            <h2 style={{ width: "400px" }}>Bed in 6-Bed Room with Shared Bathroom</h2>

            <div className='listofbed'>
              <div style={{ display: "flex", gap: '4px' }}>
                <PersonOutlineTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>2 Sleeps</Typography>
              </div>
              <div style={{ display: "flex", gap: '4px' }}>
                <BedTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>1 Full bed</Typography>
              </div>
              {/* */}
            </div>
            <Typography>See availability →</Typography>
          </div>
        </div>
        <div className='dom-pic'>
          <img src={doublebeds} alt='' style={{ width: "370px", height: "255px" }} className='bedimg' />
          <div className='domcont'>
            <h2 style={{ width: "500px" }}>Triple Room with Shared Bathroom​</h2>

            <div className='listofbed'>
              <div style={{ display: "flex", gap: '4px' }}>
                <PersonOutlineTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>3 Sleeps</Typography>
              </div>
              <div style={{ display: "flex", gap: '4px' }}>
                <BedTwoToneIcon />
                <Typography style={{ fontSize: "18px" }}>1 Full bed</Typography>
              </div>
              {/* */}
            </div>
            <Typography>See availability →</Typography>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "200px", height: "800px", display: "flex" }}>
        <div style={{ width: "700px", marginTop: "80px", height: "400px" }}>
          <h1 style={{ fontSize: "35px", marginTop: "50px " }}>Stages of booking a room</h1>
          <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
            <div className='book-icons'>
              <img src={icon_booking} alt='' />
            </div>

            <div><h3 style={{ fontSize: "23px" }}>Room reservation</h3>
              <p>Integer eget aliquet nibh praesent
                tristique magna sit amet purus</p></div>

          </div>

          <div style={{ display: "flex", gap: "30px" }}>
            <div className='book-icons' >
              <img src={icon_reception} alt='' />
            </div>

            <div>
              <h3 style={{ fontSize: "23px" }}>Filling in documents and payment</h3>
              <p>Integer eget aliquet nibh praesent
                tristique magna sit amet purus</p></div>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <div className='book-icons'>
              <img src={icon_key} alt='' />
              <Button style={{ marginTop: "40px", backgroundColor: ' aquamarine' }}><a href='/Rooms' style={{ width: '120px' }} className='rooms-a'>Choose Rooms</a>  </Button>
            </div>
            <div><h3 style={{ fontSize: "23px" }}>Сheck in hostel </h3>
              <p style={{ fontSize: "17px" }}>Integer eget aliquet nibh praesent
                tristique magna sit amet purus</p></div>
          </div>
        </div>
        <div >
          <img src={closeup} className='closeup-img' />
        </div>
      </div>

      <section style={{ padding: "50px", marginLeft: "50px" }}>
        <div style={{ display: "flex", gap: "50px", marginLeft: "80px", marginBottom: "50px", }}>
          <div style={{width:"500px"}} >
            <h1 style={{ fontSize: "30px" }}>Rule settlement, eviction and stay</h1>
            <div style={{ display: "flex", width: "500px", gap: "10px", marginTop: "20px" }}>
              <img src={Icon_check} alt='' style={{ width: '20px', height: "25px" }} />
              <h5 >Time of arrival is after 14-00. Time of departure is to 12-00</h5>
            </div>
            <div style={{ display: "flex", width: "400px", gap: "10px" }}>
              <img src={Icon_check} alt='' style={{ width: '20px', height: "25px" }} />
              <h5>
                Is there a settlement in hostel only after the presence of passport​</h5>
            </div>
            <div style={{ display: "flex", width: "400px", gap: "10px" }}>
              <img src={Icon_check} alt='' style={{ width: '20px', height: "25px" }} />
              <h5>Tellus mauris a diam maecenas sed enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum
              </h5>
            </div>
            <div style={{ display: "flex", width: "400px", gap: "10px" }}>
              <img src={Icon_check} alt='' style={{ width: '20px', height: "25px" }} />
              <h5>
                Does a settlement take place only at complete payment​</h5>
            </div>
            <div style={{ display: "flex", width: "400px", gap: "10px" }}>
              <img src={Icon_check} alt='' style={{ width: '20px', height: "25px" }} />
              <h5>Cum sociis natoque penatibus et. Sed elementum tempus egestas sed. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum</h5></div>

          </div>

          <div>
            <Card style={{ padding: '50px', width: "600px", }}>
              <h1 style={{ fontSize: '38px' }}>We are ready answer your question</h1>
              <div style={{ display: 'flex', gap: "30px" }}>
                <TextField
                  // fullWidth
                  // id="email"
                  name="Name"
                  label="Enter Your Name"
                  style={{ marginTop: "20px", height: '45px', borderRadius: "20px" }}
                />
                <TextField
                  // fullWidth
                  // id="email"
                  name="email"
                  label="Enter Your email"
                  style={{ marginTop: "20px", height: '45px', borderRadius: "20px" }}
                /></div>
              <TextField
                //  fullWidth
                // id="email"
                name="Message"
                label="Message"
                borderRadius="20px"
                style={{ marginTop: "20px", height: '45px', width: "450px" }}
              />
              <Button variant="contained" style={{ marginTop: "25px", width: "450px", height: '45px' }}>Get in touch</Button>
            </Card>
          </div>
        </div>
        <div>

        </div>
      </section>

      <div className='question-main'>
        <h1 style={{ fontSize: "30px" }}>Frequently asked questions about hostel</h1>
        <section style={{ marginTop: "0px", marginBottom: "60px", padding: "0px,0px,0px,0px" }}>

          <div style={{ display: "flex", minHeight: "1px", position: "relative", gap: "30px" }}>
            <div >

              <div style={styles.card}>
                <div style={styles.header} onClick={toggleContent}>
                  <h3>How do you choose the right hostel?</h3>
                  <span style={styles.icon}>{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && (
                  <div style={styles.content}>
                    Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed excepteur sint occaecat.
                  </div>
                )}
              </div>

              <div style={styles.card}>
                <div style={styles.header1} onClick={toggleContent1}>
                  <h3>Are there private rooms in Hostels?</h3>
                  <span style={styles.icon1}>{isOpen1 ? '▲' : '▼'}</span>
                </div>
                {isOpen1 && (
                  <div style={styles.content}>
                    Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed excepteur sint occaecat.
                  </div>
                )}
              </div>

            </div>


            <div  >

              <div style={styles.card}>
                <div style={styles.header} onClick={toggleContent2}>
                  <h3>How many people are in a hostel room?</h3>
                  <span style={styles.icon}>{isOpen2 ? '▲' : '▼'}</span>
                </div>
                {isOpen2 && (
                  <div style={styles.content}>
                    Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed excepteur sint occaecat.
                  </div>
                )}
              </div>

              <div style={styles.card}>
                <div style={styles.header} onClick={toggleContent3}>
                  <h3>How do you stay safe in a hostel?</h3>
                  <span style={styles.icon}>{isOpen3 ? '▲' : '▼'}</span>
                </div>
                {isOpen3 && (
                  <div style={styles.content}>
                    Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed excepteur sint occaecat.
                  </div>
                )}
              </div>

            </div>
            <Card style={{ width: "380px", height: "180px", padding: "25px", marginTop: "18px", borderRadius: "10px", backgroundColor: "aquamarine" }}>
              <h1>Do you have any questions?</h1>
              <p>Diam phasellus vestibulum lorem sed risus ultricies tristique. Cum sociis natoque penatibus et</p>
              <Button variant="contained" style={{ marginTop: "20px" }}>Ask a question</Button>
            </Card>
          </div>

          <div style={{ display: "flex", position: "relative", gap: "30px", marginTop: "30px" }}>
            <Card style={{ width: "380px", padding: "15px" }}>
              <img src={icon_hotels} alt='' />
              <h2>Hostel territory</h2>
              <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
            </Card>

            <Card style={{ width: "380px", padding: "15px" }}>
              <img src={icon_value} alt='' />
              <h2>Hostel territory</h2>
              <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
            </Card>
            <Card style={{ width: "380px", padding: "15px" }}>
              <img src={icon_hotel} alt='' />
              <h2>Hostel territory</h2>
              <p>Consequat interdum varius sit amet mattis vulputate enim nulla</p>
            </Card>
          </div>

        </section>
      </div>

      <section style={{ marginLeft: '150px', height: "500px" }}>
        <div style={{ display: "flex" }}>
          <img src={handsome} alt='' style={{ borderRadius: "100px" }} />
          <div style={{ width: "800px", marginLeft: "50px", marginTop: "50px" }}>
            <p style={{ fontSize: "25px", }}>
              Mauris a diam maecenas sed enim ut sem. Scelerisque in dictum non consectetur a erat nam. Commodo viverra maecenas accumsan lacus</p>
            <p style={{ fontFamily: "cursive", marginTop: "10px", fontSize: "20px" }}>Johnathan Jennings — founder of the hostel “Hosleller”</p>
          </div>

        </div>
        <div style={{ display: "flex", gap: '25px', marginTop: "50px" }}>


          <div style={{ width: "600px" }}>
            <h1 style={{ fontSize: "25px" }}>Are you looking for an apartment?</h1>
            <p style={{ fontSize: '20px', fontFamily: "cursive" }}> Tellus mauris a diam maecenas sed enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum</p>
            <Button variant="contained" style={{ marginTop: "20px", height: '50px' }}>view rooms</Button>
          </div>
          <div style={{ width: "400px" }}>
            <h1 style={{ fontSize: "25px", }}>Newsletter</h1>
            <p style={{ fontFamily: "cursive" }}>Urna id volutpat lacus laoreet. Viverra vitae congue eu consequat ac</p>
            <div style={{ display: "flex", gap: "20px" }}>
              <TextField
                // fullWidth
                id="email"
                name="email"
                label="Enter Email Address*"
                style={{ marginTop: "20px", height: '45px' }}
              />

              <Button variant="contained" style={{ marginTop: "20px", height: '50px' }}>Subscribe</Button>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </section>

  )
}

export default About
