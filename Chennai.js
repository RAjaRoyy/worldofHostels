import React, { useState } from 'react';
import './Chennai.css';
import { Carousel, Navbar, ProgressBar, Tab, Tabs } from 'react-bootstrap';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
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
import chennaipic from '../../assets/chinnaaasets/chpics/chennaipic.webp'
import bedroom3 from '../../assets/chinnaaasets/chpics/bedroom3.jpeg'
import bedroom from '../../assets/chinnaaasets/chpics/bedroom.webp'
import bedroom2 from '../../assets/chinnaaasets/chpics/bedroom2.jpeg'
import bedroom4 from '../../assets/chinnaaasets/chpics/bedroom4.webp'
import Offcanvas from 'react-bootstrap/Offcanvas';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import chennai1 from '../../assets/chinnaaasets/chpics/chennai1.jpeg'
import Weatherchennai from '../../assets/chinnaaasets/chpics/Weatherchennai.jpg'
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

// const autocompleteService = { current: null };

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

const autocompleteService = { current: null };

function Chennai() {

  const [showLess, setshowLess] = useState(true);
  const places = [
    ' Siruseri, Chennai, embodies the essence of a burgeoning tech hub. With its proximity to the IT parks and business centers, mornings here often start early, as professionals commute to work amidst the citys bustling traffic. During the day, the streets buzz with activity, with software engineers and tech enthusiasts engrossed in their work within the high-rise office buildings. Evenings offer a welcome respite, as residents unwind at local eateries or take leisurely walks along the serene OMR road. Siruseri is a melting pot of cultures, where modernity meets tradition, creating a unique tapestry of experiences for its inhabitants.'
  ];

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


  const Weather = () => {
    window.open(
      'https://www.google.com/search?q=weather+in+chennai&sca_esv=45a32e260ac88b18&biw=1488&bih=742&ei=tQ9XZrUE8tWx4w-viYOYCA&oq=weather+in+bangalore&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHdlYXRoZXIgaW4gYmFuZ2Fsb3JlKgIIAzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzINEAAYgAQYsAMYQxiKBTINEAAYgAQYsAMYQxiKBUjIHFAAWABwBXgBkAEAmAEAoAEAqgEAuAEByAEAmAIFoAJKmAMAiAYBkAYKkgcBNaAHAA&sclient=gws-wiz-serp')
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
  // see more

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section>
      <div  className='chennai-section'>
      <div className='chennai-main'>
      <img src={chennai1} style={{height:'500px',width:'90%',borderRadius:'25px',marginRight:"100px"}}></img>
      </div>

      <div className='chennai-grid'>
        <div className='sub-search' style={{ display: "flex", gap: "15px", border: 'none' }}>
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
                        // sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
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
          <Button variant="outlined" style={{ width: "150px", height: "50px", marginTop: "9px", backgroundColor: "lightblue" }}>lets go</Button>
        </div>
      </div>
      <div className='chennai-contnt'>
        <Typography variant='h4' style={{ fontFamily: "Open Sans",fontSize:'30px',fontWeight:'500' }}>Chennai In India </Typography>
        <p style={{ fontSize: "16px", fontFamily: "Roboto",fontWeight:'400', marginTop: "10px", width:"1150px"  }}>
          Siruseri, Chennai, embodies the essence of a burgeoning tech hub. With its proximity to the IT parks and business centers, Malls and close proximity to Mahabalipuram, beaches and back waters. Making Siruseri a melting pot of cultures, where modernity meets tradition, creating a unique tapestry of experiences for its inhabitants.      </p>
      </div>

      <div className='chennaitabs-content'>
        {/* <Typography variant='h4' style={{ fontFamily: '-moz-initial' }}> Things to do in Chennai</Typography> */}
        <Tabs
          defaultActiveKey="location"
          id="uncontrolled-tab-example"
          className="mb-3"
        //   justify
        >
                    {/* <Tab eventKey="about" title={<span><InfoIcon/>  About</span>}>
            <div>
              <Typography variant='h5' style={{ fontWeight: 'lighter' }}>About Chennai</Typography>
              <p style={{ fontFamily: "-moz-initial", fontSize: "20px",width:"1250px" }}>{resultStr}</p>
              <Button variant="text" onClick={changeShow}>
                {showLess ? "Show more" : "Show Less"}
              </Button>

            </div>
          </Tab> */}
          <Tab eventKey="location" title={<span><FmdGoodIcon/>  Location</span>}>

            <Typography variant='h5' style={{fontWeight:'400'}}>Chennai Central</Typography>
            <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="
https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chennai%20Central%20Railway%20Station+(World%20of%20Hostels)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                href="
https://www.gps.ie/">gps
                tracker sport</a></iframe>
          </Tab>
          <Tab eventKey="weather" title={<span><ThunderstormIcon/>  Weather</span>}>
            <Typography variant='h5' style={{fontWeight:"400"}}>Weather in Chennai</Typography>
            <img src={Weatherchennai}  style={{ width: '1100px',height:"500px" }} />
          </Tab>

        </Tabs>
      </div>
      <div style={{ display: "flex", marginLeft: "100px", marginTop: "50px" }}>
        <div style={{ marginBottom: "50px" }}>
          <Link to="/Cprabhu" style={{ textDecoration: "none" }}>
            <Card className='cardlist' >
              <div className='card-div' style={{ padding: "20px", display: "flex" }}>
                <div>
                  <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                    <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                      <img src={chennaipic} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img src={bedroom} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={bedroom3} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={bedroom2} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={bedroom4} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div style={{ marginLeft: "45px", width: "600px" }}>
                  {/* <h3>Entire serviced apartment in Chennai, India</h3> */}
                  <h3 style={{ fontFamily: "Open Sans",fontWeight:'400'}}>Prabhu's Place in Chennai </h3>
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
                            <h5 style={{ marginTop: "5px", color: "palevioletred",fontFamily:'Roboto'}}>Apartment</h5>
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

export default Chennai