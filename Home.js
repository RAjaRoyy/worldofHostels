import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreRoom from '../../components/ExploreRoom/ExploreRoom'
import Needs from '../../components/Needs/Needs'
import Rateing from '../../components/Rateing/Rateing'
import OurGuests from '../../components/OurGuests/OurGuests'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/footer/Footer'
import Imageslider from '../../components/Imageslider/Imageslider'


const Home = () => {
  return (
    <div>
        {/* <Imageslider/>  */}
        <Header/>
        <ExploreRoom/>
        {/* <Needs/> */}
        <Rateing/>
        {/* <OurGuests/> */}
        {/* <Contact/> */}
        <Footer/>
    </div>
  )
}

export default Home