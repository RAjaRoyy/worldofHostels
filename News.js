import React from 'react';
import './News.css';
import { Card } from '@mui/material';
import sightseeing from "../../assets/sightseeing.jpg";
import newspictwo from "../../assets/newspictwo.jpg";
import newspicthre from "../../assets/newspicthre.jpg";
import newspicfou from "../../assets/newspicfou.jpg";
import newspicfiv from "../../assets/newspicfiv.jpg";
import newspicsix from "../../assets/newspicsix.jpg";
import newspicseve from "../../assets/newspicseve.jpg";
import newspiceigh from "../../assets/newspiceigh.jpg";
import Footer from '../../components/footer/Footer';
const News = () => {
  return (
    <section>
      <div className='rooms-heading'>
        <h1 style={{ marginTop: "40px", fontSize: "40px", marginLeft: "120px" }}>News</h1>
      </div>
      <div className='news-main'>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={sightseeing} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>How to Travel the World & Make a Difference</h1>
              <h3 style={{ fontFamily: "initial" }}>August 15, 2020 </h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Varius sit amet mattis vulputate. Cum sociis natoque penatibus et magnis dis. Quam elementum pulvinar etiam non quam lacus suspendisse.</p>
              <a href='' style={{ textDecoration: "none", marginTop: "10px" }}>Read more ⟶</a>
            </div>

          </div>
        </Card>

        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspictwo} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>How to Travel the World & Make a Difference</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspicthre} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>How to Travel for Free: No Money, No Problems!</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspicfou} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>The Ultimate Packing List for Full-Time Travellers</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspicfiv} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>15 Epic Landscape Photography Tips from a Pro</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspicsix} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>The Best Beaches in Europe For Fall Travel</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspicseve} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>Go Solo: The 20 Best Places to Travel Alone</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
        <Card style={{ marginTop: "20px", height: "250px", marginLeft: "110px" }}>
          <div style={{ display: 'flex' }}>
            <img src={newspiceigh} alt='' style={{ width: '350px', height: "250px" }} />
            <div style={{ width: "500px", padding: "20px" }}>
              <h1>I Cheated on My Husband a Week Before Our Wedding</h1>
              <h3 style={{ fontFamily: "initial" }}>July 12, 2021</h3>
              <p style={{ fontFamily: "initial", fontSize: "20px", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod.</p>
              <a href='' style={{ textDecoration: "none" }} >Read more ⟶</a>
            </div>
          </div>
        </Card>
      </div>
      <Footer/>
    </section>
    
  )
}

export default News