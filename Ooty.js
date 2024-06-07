import React, { useState } from 'react';
import './Ooty.css';
import { Carousel, Navbar, ProgressBar, Tab, Tabs } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Button, Card } from '@mui/material';
import bedroom from '../../assets/bangassets/bedroom.jpeg'
import bedroom2 from '../../assets/bangassets/bedroom2.jpeg'
import dining from '../../assets/bangassets/dining.jpeg'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import ooty1 from '../../assets/Ootyassets/ooty1.jpg'
import ootyWeather from '../../assets/Ootyassets/ootyWeather.jpg'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import InfoIcon from '@mui/icons-material/Info';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import dorm4 from '../../assets/Ootyassets/dorm4.jpg'
import dorm5 from '../../assets/Ootyassets/dorm5.webp'
import dorm6 from '../../assets/Ootyassets/dorm6.jpg'
import dorm9 from '../../assets/Ootyassets/dorm9.jpg'
const GOOGLE_MAPS_API_KEY = 'AIzaSyCAJYvfbH3B_JqrT1CvpJNHRULeTHwwI7Y';

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };
const reviews = [
  { label: 'English Reviews' },
  { label: 'All Reviews' },
]

const reviewstypes = [
  { label: 'Guest1' },
  { label: 'Guest2' },
  { label: 'Guest3' },
  { label: 'Guest4' },
  { label: 'Guest5' },
  { label: 'Guest6' },
  { label: 'Guest7' },
  { label: 'Guest8' },
  { label: 'Guest9' },
  { label: 'Guest10' },
]


const Ootys = ({ ...props }) => {
  const [showLess, setshowLess] = useState(true);
 

  const str ="One of the main attractions in Ooty is the Ooty Lake, a tranquil spot perfect for boating and picnics. The Botanical Gardens, established in 1847, showcase an impressive array of exotic and indigenous plants, including a 20-million-year-old fossilized tree. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a scenic train ride through lush hills and tea estates, providing breathtaking views and an unforgettable experience.Ooty's delightful blend of natural beauty, cultural heritage, and outdoor activities make it a must-visit destination for travelers seeking a refreshing escape from the hustle and bustle of city life. Whether you're exploring the vibrant local markets, sipping on freshly brewed tea, or hiking through its scenic trails, Ooty promises an enchanting and rejuvenating experience."
  var resultStr = showLess ? str.slice(0, 500) : str;

  const changeShow = () => {
    setshowLess(!showLess);
  };

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };


  return (
    <section>
    <div className='ooty-section'>
      <div className='ooty-main'>
        <img src={ooty1} style={{height:'500px',width:'90%',borderRadius:'25px',marginRight:"100px"}}></img>
      </div>

      <div className='ooty-grid'>
        <div className='sub-search' style={{ display: "flex", gap: "15px", border: 'none', marginRight: "20px" }}>
          <Autocomplete
            id="google-map-demo"
            sx={{ width: 300, marginTop: "7px", }}
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="where do you want to go" fullWidth style={{ border: "none" }} />
            )}
            renderOption={(props, option) => {
              const matches =
                option.structured_formatting.main_text_matched_substrings || [];

              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match) => [match.offset, match.offset + match.length]),
              );

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item sx={{ display: 'flex', width: 44, }}>
                      <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    </Grid>
                    <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                      {parts.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                        >
                          {part.text}
                        </Box>
                      ))}
                      <Typography variant="body2" color="text.secondary" style={{ width: "100px" }}>
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              );
            }}
          />
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
              </DemoContainer>
            </LocalizationProvider>

          </div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={reviewstypes}
            sx={{ width: 120, mt: "9px" }}
            renderInput={(params) => <TextField {...params} label="Guest" />}
          />
          <Button variant="outlined" style={{ width: "fit-contant", height: "50px", marginTop: "9px", backgroundColor: "lightblue" }}>lets go</Button>
        </div>
      </div>
      <div className='ooty-contnt'>
        <Typography variant='h4' style={{ fontFamily: "Open Sans",fontSize:'30px',fontWeight:'500' }}>Ooty in India</Typography>
        <p style={{ fontSize: "16px", fontFamily: "Roboto", marginTop: "10px",width:"1150px" ,fontWeight:'400'}}>
          Ooty, known as the "Queen of Hill Stations," is a beautiful hill town in Tamil Nadu, India. Nestled in the Nilgiri Hills, it offers lush tea gardens, serene lakes, and a cool, refreshing climate. Major attractions include the picturesque Ooty Lake, the verdant Botanical Gardens, and the scenic Nilgiri Mountain Railway. Ooty's charming landscapes and tranquil ambiance make it a perfect getaway for nature lovers and adventure seekers. This enchanting destination promises a rejuvenating escape from urban life.          </p>
      </div>

      <div className='ootytabs-content'>
        {/* <Typography variant='h4' style={{ fontFamily: '-moz-initial' }}> Things to do in Ooty</Typography> */}
        <Tabs
          defaultActiveKey="location"
          id="uncontrolled-tab-example"
          className="mb-3"
        //   justify
        >
                    {/* <Tab eventKey="about" title={<span><InfoIcon/>  About</span>}>
            <div>
              <Typography variant='h5' style={{ fontWeight: 'lighter' }}>About Ooty</Typography>
              <p style={{ fontFamily: "-moz-initial", fontSize: "20px",width:"1250px" }}>{resultStr}</p>
              <Button variant="text" onClick={changeShow}>
                {showLess ? "Show more" : "Show Less"}
              </Button>

            </div>
          </Tab> */}
          <Tab eventKey="location" title={<span><FmdGoodIcon/>  Location</span>}>

            <h3 style={{fontWeight:'400',fontSize:'24px',fontFamily:'Roboto'}}>Ooty Location</h3>
            <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="
https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=ooty,Thamil%20nadu+(Pradhus%20place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                href="https://www.gps.ie/">gps systems</a></iframe>
          </Tab>
          <Tab eventKey="weather" title={<span><ThunderstormIcon/>  Weather</span>}>
            <Typography variant='h4' style={{fontWeight:'400',fontSize:'24px',fontFamily:'Roboto'}}>Weather in Ooty</Typography>
            <img src={ootyWeather} style={{ width: '1100px',height:"500px" }} />
          </Tab>

        </Tabs>
      </div>
      <div style={{ display: "flex", marginLeft: "100px", marginTop: "50px" }}>
        <div style={{ marginBottom: "50px" }}>
          <Link to="/Oprabhu" style={{ textDecoration: "none" }}>
            <Card className='cardlist' >
              <div className='card-div' style={{ padding: "20px", display: "flex" }}>
                <div>
                  <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                    <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                      <img src={dorm4} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img src={dorm5} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={dorm9} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={dorm6} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div style={{ marginLeft: "45px", width: "600px" }}>
                  <Typography variant='h4' style={{ fontFamily: "Open Sans",fontWeight:'500',fontSize:'25px' }}>Prabhu's Place in Ooty </Typography >
                  <div style={{}}>
                    <div>
                      <p style={{ fontSize: "14px", marginTop: "30px", fontFamily: "Roboto" }}>Fully furnished 2 bed 2 bath apartment with cooking amenities including a microwave oven, Fridge, utensils, a washer and a space to dry your clothes in the balcony. </p>
                    </div>
                    <div>
                      <div className='cards'>
                        <div style={{ display: "flex", gap: "15px", width: "500px", marginTop: "50px", marginLeft: "300px" }}>
                          <div style={{ marginLeft: "15px" }}>
                          </div>
                          <div style={{}}>
                            <h5 style={{ marginTop: "5px", color: "palevioletred" }}>Apartment</h5>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <h6 style={{ fontFamily: "Roboto" }}><del>7500</del>/night</h6>
                              <h6 style={{ fontFamily: "Roboto" }}>6500/night</h6>
                            </div>

                          </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "50px" }}>
                          <div>
                            <h5 style={{ marginTop: "5px", color: "palevioletred" }}>Dorms</h5>

                            <p style={{ fontFamily: "Roboto", width: "300px" }}>No Privates Available</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </Card>
          </Link>
        </div>
      </div>
      </div>
      <Footer />
      
    </section>
  )
}

export default Ootys