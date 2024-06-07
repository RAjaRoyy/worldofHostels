import React, { useState } from 'react';
import './Bengaluru.css'
import { Carousel, Navbar, ProgressBar } from 'react-bootstrap';
import bedroom from '../../assets/bangassets/bedroom.jpeg'
import bedroom2 from '../../assets/bangassets/bedroom2.jpeg'
import dining from '../../assets/bangassets/dining.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Button, Card } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PeopleIcon from '@mui/icons-material/People';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { debounce } from '@mui/material/utils';
import privateroom from '../../assets/Ootyassets/privateroom.jpg';
import privateroom1 from '../../assets/Ootyassets/privateroom1.jpg';
import privateroom2 from '../../assets/Ootyassets/privateroom2.jpg';
import ChairIcon from '@mui/icons-material/Chair';
import AirIcon from '@mui/icons-material/Air';
import TvIcon from '@mui/icons-material/Tv';
import LuggageIcon from '@mui/icons-material/Luggage';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonIcon from '@mui/icons-material/Person';
import checkicon from '../../assets/bangassets/checkicon.jpg'
import Footer from '../../components/footer/Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShowerIcon from '@mui/icons-material/Shower';
import DryIcon from '@mui/icons-material/Dry';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Link } from 'react-router-dom';
import Weather from '../../assets/bangassets/Weather.jpg'
import Bengalurus from '../../assets/bangassets/Bengalurus.jpg'
import InfoIcon from '@mui/icons-material/Info';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
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
function Bengaluru({ ...props }) {

  const [showLess, setshowLess] = useState(true);
  const places = [
    'Bangalore is a city of contrasts, where the old meets the new, and tradition blends seamlessly with modernity. It is a city that has something for everyone, whether you are a tech enthusiast, a history buff, a nature lover, or someone seeking a vibrant urban lifestyle. With its dynamic economy, diverse culture, and rich heritage, Bangalore continues to be a beacon of growth and opportunity in India.',
    'Lalbagh Botanical Garden',
    'Cubbon Park',
    'Bangalore Palace',
    'Tipu Sultan\'s Summer Palace',
    'Vidhana Soudha',
    'Bannerghatta National Park',
    'ISKCON Temple Bangalore',
    'UB City Mall',
    'Wonderla Amusement Park',
    'Nandi Hills',
    'Chola Temples',
    'National Gallery of Modern Art',
    'HAL Aerospace Museum',
    'M.G. Road',
    'Commercial Street',
  ];

  const str =
    "This budget friendly place offers both private rooms and dorms for the comfort of both individuals and groups.  Dorms have 2 bunk beds and spacious and can accommodate an extra bed  for groups wanting to share the same room. Delicious homely food made from freshly grown organic vegetables on request.Located just minutes away from Ooty Botanical gardens - a charming farm house Budget friendly with options for both dormitory and private rooms Surrounded by an organic farm and join a guided tour of the farm on request         Prabhu's Place Ooty is located ideally in the heart of Ooty city center but nestled in a farm. This farm house boosts with colonial architecture within 5 minutes walking distance to Botanical Gardens, Charing cross, market and short hike to the boat lake and railway station."
  var resultStr = showLess ? places.slice(0, 100) : places;

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
    <section >
      <div className='bengaluru-section'>
        <div className='bng-main'>
          <img src={Bengalurus} style={{ height: '500px', width: '90%', borderRadius: '25px', marginRight: "100px" }}></img>
        </div>

        <div className='bengaluru-grid'>
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
                <TextField {...params} label="where do you want to go" fullWidth style={{ border: "none", fontFamily: 'sans-serif' }} />
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
            <Button variant="outlined" style={{ width: "100px", height: "50px", marginTop: "9px", backgroundColor: "blue", color: 'white' }}>lets go</Button>
          </div>
        </div>
        <div className='bengaluru-contnt'>
          <Typography variant='h4' style={{ fontSize: '30px', fontWeight: '500' }}>Bangalore in India</Typography>
          <p style={{ marginTop: "10px", width: "1150px", fontSize: '16px', fontWeight: '400' }}>
            Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.            </p>
        </div>

        <div className='bengalurutabs-content'>
          <Tabs
            defaultActiveKey="location"
            id="uncontrolled-tab-example"
            className="mb-3"
          //   justify
          >


            {/* <Tab eventKey="about" title={<span><InfoIcon/>  About</span>}>

                        <div>
                          <Typography variant='h5' icon style={{fontWeight:'400'}}> About Bengaluru</Typography>
                          <p> </p>
                            <p style={{  fontSize: "16px" ,width:"1250px",marginTop:'10px'}}>{resultStr}</p>
                            <Button variant="text" onClick={changeShow}>
                                {showLess ? "Show more" : "Show Less"}
                            </Button>
                           2
                        </div>
                    </Tab> */}
            <Tab eventKey="location" title={<span><FmdGoodIcon />  Location</span>}>

              <Typography variant='h5' style={{ fontWeight: '400' }}>Majestic Bengaluru</Typography>
              <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Majestic,Bengaluru,Karnataka+(Bengaluru)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a>
              </iframe>
            </Tab>
            <Tab eventKey="weather" title={<span><ThunderstormIcon />  Weather</span>}>

              <Typography variant='h5' style={{ fontWeight: '400' }}>Weather in Bengaluru</Typography>
              <img src={Weather} style={{ width: '1100px', height: '500px' }} />
            </Tab>

          </Tabs>
        </div>

        <div style={{ display: "flex", marginLeft: '100px', marginTop: "50px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Link to="/Bprabhu" style={{ textDecoration: "none" }}>
              <Card className='cardlist' >
                <div className='card-div' style={{ padding: "20px", display: "flex" }}>
                  <div>
                    <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                      <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                        <img src={bedroom} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <img src={bedroom2} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={dining} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div style={{ marginLeft: "45px", width: "600px" }}>
                    <h3 style={{ fontFamily: "Open Sans" }}>Prabhu's Place in Bangalore </h3>
                    <div style={{}}>
                      <div>
                        <p style={{ fontSize: "14px", marginTop: "30px", fontFamily: "Roboto" }}>Fully furnished 2 bed 2 bath apartment with cooking amenities including a microwave oven, Fridge, utensils, a washer and a space to dry your clothes in the balcony. </p>
                      </div>
                      <div>

                        <div className='cards'>
                          <div style={{ display: "flex", gap: "15px", width: "500px", marginTop: "50px", marginLeft: "300px" }}>

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
export default Bengaluru;