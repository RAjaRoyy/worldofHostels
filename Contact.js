import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import hostalroom from '../../assets/hostelroom.jpg'
import Footer from '../../components/footer/Footer';
import { Margin } from '@mui/icons-material';
import contact3 from '../../assets/contact3.avif'
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Typography } from '@mui/material';
const Contact = () => {

  return (
    <>
    
      <div className='contact-containers'>
        <div>

       <div className='contact-img'>
       
       <img src={contact3} style={{height:"500px", width:"87%",borderRadius:'20px',marginLeft:'70px'}}></img>
       </div>
       <div className='overtext'>
            <h1 className='overfont'>HOW CAN WE HELP?</h1>
            <Form inline className='contact-form' >
        <InputGroup className='group-contact' >
          <InputGroup.Text id=""><SearchOutlinedIcon/></InputGroup.Text>
          <Form.Control
            placeholder="search"
            aria-label="search"
            type='text'
            className='mr-sm-2'
          />

        </InputGroup>
      </Form>
            
            </div>
       
       </div>

       <div className='content'>
        <Typography variant='h4'style={{fontFamily:'Open Sans'}} >Contact us</Typography>
       <Form>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Label style={{fontFamily:"Open Sans"}}>Email Address</Form.Label>
          <Form.Control id="email" type='email' style={{fontFamily:"Open Sans"}} required placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{fontFamily:"Open Sans"}} >Phone Number</Form.Label>
          <Form.Control id="number" type='text' style={{fontFamily:"Open Sans"}} required placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{fontFamily:"Open Sans"}} >Subject</Form.Label>
          <Form.Control id="text" type='text'  style={{fontFamily:"Open Sans"}}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{fontFamily:"Open Sans"}} >Description</Form.Label>
          <Form.Control id="description" type='text'   style={{height:'100px',fontFamily:"Open Sans"}} />
           <p style={{fontWeight:'normal',fontFamily:'Roboto' }}>Please enter the details of your request. A member of our support staff will respond as soon as possible. Please ensure that you do not enter credit card details/username/passwords in this form.</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{fontFamily:"Open Sans"}}>Category</Form.Label>
          <Form.Select id="Select" style={{fontFamily:"Open Sans"}}>
          <option>-</option>
            <option style={{fontFamily:"Open Sans"}}>Cancle a booking</option>
            <option style={{fontFamily:"Open Sans"}}>Change a booking</option>
            <option style={{fontFamily:"Open Sans"}}> Resend confirmation</option>
            <option style={{fontFamily:"Open Sans"}}>Account</option>
            <option style={{fontFamily:"Open Sans"}}>Review</option>
            <option style={{fontFamily:"Open Sans"}}>Working with us</option>
            <option style={{fontFamily:"Open Sans"}}>Group booking</option>
            <option style={{fontFamily:"Open Sans"}}>Other</option>


          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label=" check this"
          />
        </Form.Group>
        <Button type="submit" variant='danger' style={{width:'100px',marginBottom:'100px',fontFamily:"Open Sans"}}>Submit</Button>
      </fieldset>
    </Form>

       </div>
      </div>
<Footer/>
        
   </>
  )
}

export default Contact