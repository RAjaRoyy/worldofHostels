import React, { useEffect, useState } from 'react';
import './Oprabhu.css';
import WifiIcon from '@mui/icons-material/Wifi';
import PeopleIcon from '@mui/icons-material/People';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Button, Card } from '@mui/material';
import dorm1 from '../../assets/Ootyassets/dorm1.jpg';
import dorm2 from '../../assets/Ootyassets/dorm2.webp';
import dorm3 from '../../assets/Ootyassets/dorm3.webp';
import dorm4 from '../../assets/Ootyassets/dorm4.jpg';
import dorm5 from '../../assets/Ootyassets/dorm5.webp';
import dorm8 from '../../assets/Ootyassets/dorm8.jpg'
import dorm7 from '../../assets/Ootyassets/dorm7.jpg'
import dorm9 from '../../assets/Ootyassets/dorm9.jpg'
import privateroom from '../../assets/Ootyassets/privateroom.jpg';
import privateroom1 from '../../assets/Ootyassets/privateroom1.jpg';
import privateroom2 from '../../assets/Ootyassets/privateroom2.jpg'
import privateroom3 from '../../assets/Ootyassets/privateroom3.jpeg'
import privateroom4 from '../../assets/Ootyassets/privateroom4.jpeg'
import privateroom5 from '../../assets/Ootyassets/privateroom5.jpeg'
import ChairIcon from '@mui/icons-material/Chair';
import AirIcon from '@mui/icons-material/Air';
import TvIcon from '@mui/icons-material/Tv';
import LuggageIcon from '@mui/icons-material/Luggage';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import tvicon from '../../assets/bangassets/tvicon.jpg';
import checkicon from '../../assets/bangassets/checkicon.jpg'
import PersonIcon from '@mui/icons-material/Person';
// import Offcanvas from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from '../../components/footer/Footer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { Carousel, Navbar, ProgressBar } from 'react-bootstrap';
import bedroom from '../../assets/bangassets/bedroom.jpeg'
import bedroom2 from '../../assets/bangassets/bedroom2.jpeg'
import dining from '../../assets/bangassets/dining.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import image1 from '../../assets/Ootyassets/image1.jpeg'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShowerIcon from '@mui/icons-material/Shower';
import DryIcon from '@mui/icons-material/Dry';
import indiranagarkitchen from '../../assets/bangassets/indiranagarkitchen.webp'
import InfoIcon from '@mui/icons-material/Info';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RateReviewIcon from '@mui/icons-material/RateReview';

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

// const Ootys = () => {
const Oprabhu = () => {
  const data = [
    {
      div: 1,
      imgsrc: dorm1,
    },
    {
      div: 2,
      imgsrc: dorm2,
    }, {
      div: 3,
      imgsrc: dorm3,
    },
    {
      div: 4,
      imgsrc: dorm4,
    },
    {
      div: 5,
      imgsrc: dorm5,
    }, {
      div: 6,
      imgsrc: dorm7,
    },
    {
      div: 5,
      imgsrc: dorm8,
    }, {
      div: 6,
      imgsrc: dorm9,
    }
  ]
  const [model, setModel] = useState(false);
  const [tempimgsrc, settempimgsrc] = useState('');
  const getImg = (imgsrc) => {
    settempimgsrc(imgsrc);
    setModel(true);
  }
  useEffect(() => {
    let handler = () => {
      setModel(false)
    }
    document.addEventListener('mousedown', handler)

  })



  const [showLess, setshowLess] = useState(true);

  const str = "This budget friendly place offers both private rooms and dorms for the comfort of both individuals and groups.  Dorms have 2 bunk beds and spacious and can accommodate an extra bed  for groups wanting to share the same room. Delicious homely food made from freshly grown organic vegetables on request.Located just minutes away from Ooty Botanical gardens - a charming farm house Budget friendly with options for both dormitory and private rooms Surrounded by an organic farm and join a guided tour of the farm on request"
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
  // see more



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <section>

      <div style={{ marginLeft: "100px" }}>
        <img src={dorm4} style={{ height: '500px', width: '90%', borderRadius: '25px', marginRight: "100px" }}></img>

        {/* <Carousel style={{ width: "1300px", borderRadius: '10px' }}>
                    <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                        <img src={dorm4} text="First slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={image1} text="Second slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={privateroom3} text="Third slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={privateroom4} text="Third slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                    </Carousel.Item>
                  
                </Carousel> */}
      </div>
      <div>
        <Typography variant='h2' style={{ color: "white", textAlign: "center", fontFamily: "Open Sans", fontSize: '30px', fontWeight: '500' }}>Prabhus place</Typography>
      </div>

      <div className='searchcard-grid'>
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

      <div className='opcontnt' style={{ marginLeft: "100px" }}>
        <Typography variant='h4' style={{ fontFamily: "Open Sans", fontSize: '30px', fontWeight: '500' }}>Prabhu's Place in Ooty</Typography>
        <div style={{ display: 'flex' }}>
          <LocationOnIcon style={{ fontSize: "30px" }} />
          <Typography variant='h6' style={{ fontFamily: "Roboto", fontSize: '18px', fontWeight: '400' }}>1/42, Tonga Road, Bandishola, Ooty, Tamil Nadu 643001</Typography>
        </div>

        <Tabs
          defaultActiveKey="about"
          id="uncontrolled-tab-example"
          className="mb-3"
        //   justify
        >
          <Tab eventKey="about" title={<span><InfoIcon />  About</span>}>
            <div>
              <p style={{ fontFamily: "Open Sans", fontSize: "16px", width: "1150px" }}>Prabhu's Place Ooty is located ideally in the heart of Ooty city center but nestled in a farm. This farm house boosts with colonial architecture within 5 minutes walking distance to Botanical Gardens, Charing cross, market and short hike to the boat lake and railway station.</p>
              <p style={{ fontFamily: "Open Sans", fontSize: "16px", width: "1150px" }}>{resultStr}</p>
              <Button variant="text" onClick={changeShow}>
                {showLess ? "Show more" : "Show Less"}
              </Button>
              <div style={{ textAlign: "center" }}>
                <WifiIcon style={{ color: "palevioletred", height: "30px", width: "30px" }} />
                <ChairIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
                <AirIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
                <TvIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
                <LuggageIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
                <ShowerIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
                <DryIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />

                <RingVolumeIcon style={{ marginLeft: "20px", color: "palevioletred", height: "30px", width: "30px" }} />
              </div>
            </div>
          </Tab>
          <Tab eventKey="location" title={<span><FmdGoodIcon />  Location</span>}>

            <h4 style={{ fontFamily: 'Roboto', fontSize: '24px' }}>Prabhus place Location</h4>
            <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="
                          https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1/42%20Tonga%20Road,%20Bandishola,%20Ooty,%20Tamil%20Nadu,%20India,%20Ooty,%20India+(World%20Of%20Hostels)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                href="https://www.gps.ie/">gpstrackers</a></iframe>
          </Tab>
          <Tab eventKey="review" title={<span><RateReviewIcon />  Review</span>}>
            <Typography variant="h6" style={{ backgroundColor: "tomato", margin: "20px", width: "50%", fontFamily: 'Roboto' }} >⭐ 100% genine Review from real hostel travelers like you!</Typography>
            <div style={{ display: "flex", gap: "30px", margin: "30px" }}>
              <div>
                <h1 style={{ backgroundColor: "tomato", color: "white" }}>6.9</h1>
              </div>
              <div>
                <div>
                  <h5 style={{ fontFamily: 'Roboto' }}>Good</h5>
                  <h6 style={{ fontFamily: 'Roboto' }}>29 Total Reviews</h6>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "30px", margin: "30px", width: "500px" }}>
              <div  >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Security</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.5</Typography>
                </div>
                <ProgressBar variant='danger' now={85} style={{ width: "300px", height: "5px" }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Staff</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.5</Typography>
                </div>
                <ProgressBar variant='danger' now={90} style={{ width: "300px", height: "5px" }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>CleanLiness</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>9.0</Typography>
                </div>
                <ProgressBar variant='danger' now={80} style={{ width: "300px", height: "5px" }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Value For Money</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.0</Typography>
                </div>
                <ProgressBar variant='danger' now={80} style={{ width: "300px", height: "5px" }} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Location</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.0</Typography>
                </div>
                <ProgressBar variant='danger' now={80} style={{ width: "300px", height: "5px" }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Atmosphere</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.0</Typography>
                </div>
                <ProgressBar variant='danger' now={85} style={{ width: "300px", height: "5px" }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>Facilities</Typography>
                  <Typography variant='h6' style={{ fontSize: "15px" }}>8.5</Typography>
                </div>
                <ProgressBar variant='danger' now={85} style={{ width: "300px", height: "5px" }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginLeft: '18px' }}>
              <div>
                <Typography variant='h6' color='gray' fontWeight='small'>SHOW:</Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={reviews}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="English Reviews" />}
                />
              </div>
              <div>
                <Typography variant='h6' color='gray'>SHORT BY:</Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={reviewstypes}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Newest" />}
                />
              </div>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '30px', display: 'flex' }}>
              <div >
                <PersonIcon />
                <Typography variant='h6' style={{ fontFamily: 'Roboto' }}>ashokreddy</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Male, 20-26</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Novice Nomed</Typography>
                <Typography variant='h6' color='orange' fontSize='15px'>2 reviews</Typography>
              </div>
              <div style={{ marginLeft: '60px', textAlign: 'start' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <h4 style={{ backgroundColor: "tomato", color: "white", borderRadius: '5px' }}>6.1</h4>
                  <h6 style={{ color: 'tomato' }}  >Good</h6>
                </div>
                <p style={{ fontFamily: 'Roboto' }}>
                  It was a nice experience. Dorms were clean. Bonfire and games were there but location was not that good.
                </p>
              </div>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '30px', display: 'flex' }}>
              <div style={{ width: '100px' }}>
                <PersonIcon />
                <Typography variant='h6' style={{ fontFamily: 'Roboto' }}>rajakullayappa</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Male, 20-26</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Novice Nomed</Typography>
                <Typography variant='h6' color='orange' fontSize='15px'>5 reviews</Typography>
              </div>
              <div style={{ marginLeft: '70px', textAlign: 'start' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <h4 style={{ backgroundColor: "tomato", color: "white", borderRadius: '5px' }}>7.5</h4>
                  <h6 style={{ color: 'tomato' }}  >Very Good</h6>
                </div>
                <p style={{ fontFamily: 'Roboto' }}>
                  It was a nice experience. Dorms were clean. Bonfire and games were there but location was not that good.
                </p>
              </div>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '30px', display: 'flex' }}>
              <div >
                <PersonIcon />
                <Typography variant='h6' style={{ fontFamily: 'Roboto' }}>Viratkohli</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Male, 30-36</Typography>
                <Typography variant='h6' color='gray' fontSize='15px'>Novice Nomed</Typography>
                <Typography variant='h6' color='orange' fontSize='15px'>1 reviews</Typography>
              </div>
              <div style={{ marginLeft: '80px', textAlign: 'start' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <h4 style={{ backgroundColor: "tomato", color: "white", borderRadius: '5px' }}>10</h4>
                  <h6 style={{ color: 'tomato' }}  >Superb</h6>
                </div>
                <p style={{ fontFamily: 'Roboto' }}>
                  An example of what a hostel should be. The hospital and friendliness of the staff
                  made me feel very comfortable and relaxed.
                </p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="gallery" title={<span>Gallery</span>}>

            <h4 style={{ fontFamily: 'Roboto', fontSize: '24px' }}></h4>
            <div className={model ? "model open" : "model"}>
              <img src={tempimgsrc} />
              {/* <CloseIcon style={{color:'white'}} onClick={()=> setModel(false)}/> */}
            </div>
            <div className="gallery">
              {
                data.map((items, index) => {
                  return (
                    <div className="pics" key={index} onClick={() => getImg(items.imgsrc)}>
                      <img src={items.imgsrc} style={{ width: '100%' }} />


                    </div>
                  )
                })

              }
            </div>

          </Tab>

        </Tabs>

      </div>

      <div style={{ display: "flex", marginLeft: "100px", marginTop: "50px" }}>
        <div style={{}}>
          <Card
            className='roomcardlist'
            style={{ marginTop: '30px' }} >
            <div
              style={{ padding: "20px", display: "flex" }}>
              <div>
                <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                  <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                    <img src={privateroom3} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={privateroom5} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={privateroom4} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>

                </Carousel>
              </div>
              <div style={{ marginLeft: "45px" }}>
                <h3 style={{ fontFamily: "Open Sans", fontSize: "28px", fontWeight: '500' }}>Private Room</h3>
                <div style={{ display: "flex" }}>
                  <div className='ot-groupicons' style={{ gap: "10px" }} >

                    <div>
                      <p style={{ fontSize: "14px", marginTop: "10px", fontFamily: "Roboto" }}>Nice sized private room comes with king size bed and an attached bath some rooms are with view of the hills and wake up to church bells. </p>
                    </div>


                    {/* <div> */}
                    <div className='min-ottycards'>
                      <div style={{ display: "flex", marginLeft: "300px", marginBottom: "50px" }}>
                        <div style={{}}>
                          <h5 style={{ marginTop: "5px", color: "palevioletred", fontFamily: 'Roboto' }}>Apartment</h5>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <h6 style={{ fontFamily: "Roboto" }}><del>7500</del>/night</h6>
                            <h6 style={{ fontFamily: "Roboto" }}>6500/night</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        <Button variant='contained' color='error' style={{ width: "100px" }}>Book now</Button>
                      </div>

                      {/* </div> */}
                    </div>
                  </div>
                </div>


              </div>


            </div>
          </Card>
          <Card className='roomcardlist' style={{ marginTop: "30px" }} >
            <div style={{ padding: "20px", display: "flex" }}>
              <div>
                <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                  <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                    <img src={dorm1} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={dorm2} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm3} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm5} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div style={{ marginLeft: "45px" }}>

                <Typography variant='h3' style={{ fontFamily: "Open Sans", fontSize: "28px", fontWeight: "500" }}>Mix Dorm One with ensuite</Typography>

                <div style={{}} >
                  <div className='ot-groupicons' style={{ gap: "10px" }} >

                    <div>
                      <p style={{ fontSize: "14px", marginTop: "10px", fontFamily: "Roboto", width: "500px" }}>Mixed dorms are fitted with 3, 5, 8 bunk beds and its own private bath              </p>
                    </div>
                    <div className='min-ottycards' >
                      <div style={{ display: "flex", marginLeft: "300px", marginBottom: "50px" }}>
                        <div style={{}}>
                          <h5 style={{ marginTop: "5px", color: "palevioletred", fontFamily: 'Roboto' }}>Mix Dorm</h5>
                          <div style={{ display: "flex", gap: "12px" }}>
                            <h6 style={{ fontFamily: "Roboto" }}><del>900</del>/night</h6>
                            <h6 style={{ fontFamily: "Roboto" }}>810/night</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        <Button variant='contained' color='error' style={{ width: "100px" }}>Book now</Button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </Card>

          <Card className='roomcardlist' style={{ marginTop: "30px" }} >
            <div style={{ padding: "20px", display: "flex" }}>
              <div>
                <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                  <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                    <img src={image1} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={dorm9} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm8} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm5} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div style={{ marginLeft: "45px" }}>

                <Typography variant='h3' style={{ fontFamily: "Open Sans", fontSize: "28px", fontWeight: '500' }}>Mix Dorm Two with ensuite</Typography>

                <div style={{}} >
                  <div className='ot-groupicons' style={{ gap: "10px" }} >

                    <div>
                      <p style={{ fontSize: "14px", marginTop: "10px", fontFamily: "Roboto", width: "500px" }}>Mixed dorms are fitted with 3, 5, 8 bunk beds and its own private bath </p>
                    </div>
                    <div className='min-ottycards' >
                      <div style={{ display: "flex", marginLeft: "300px", marginBottom: "50px" }}>
                        <div style={{}}>
                          <h5 style={{ marginTop: "5px", color: "palevioletred", fontFamily: "Roboto" }}>Mix Dorm</h5>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <h6 style={{ fontFamily: "Roboto" }}><del>900</del>/night</h6>
                            <h6 style={{ fontFamily: "Roboto" }}>810/night</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Button variant='contained' color='error' style={{ width: "100px", fontFamily: 'Open Sans' }}>Book now</Button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </Card>

          <Card className='roomcardlist' style={{ marginTop: "30px" }} >
            <div style={{ padding: "20px", display: "flex" }}>
              <div>
                <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                  <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                    <img src={dorm3} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={dorm7} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm9} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm2} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div style={{ marginLeft: "45px" }}>

                <Typography variant='h3' style={{ fontFamily: "Open Sans", fontSize: "28px" }}>Mix Dorm Three with ensuite</Typography>

                <div style={{}} >
                  <div className='ot-groupicons' style={{ gap: "10px" }} >

                    <div>
                      <p style={{ fontSize: "14px", marginTop: "10px", fontFamily: "Roboto", width: "500px" }}>Mixed dorms are fitted with 3, 5, 8 bunk beds and its own private bath </p>
                    </div>
                    <div className='min-ottycards' >
                      <div style={{ display: "flex", marginLeft: "300px", marginBottom: "50px" }}>
                        <div style={{}}>
                          <h5 style={{ marginTop: "5px", color: "palevioletred" }}>Mix Dorm</h5>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <h6 style={{ fontFamily: "Roboto" }}><del>900</del>/night</h6>
                            <h6 style={{ fontFamily: "Roboto" }}>810/night</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        <Button variant='contained' color='error' style={{ width: "100px", }}>Book now</Button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </Card>
          <Card className='roomcardlist' style={{ marginTop: "30px" }} >
            <div style={{ padding: "20px", display: "flex" }}>
              <div>
                {/* <img src={bnglprivateroom} style={{height:"250px"}}/> */}
                <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                  <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                    <img src={dorm1} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={dorm2} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm3} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={dorm5} text="Third slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div style={{ marginLeft: "45px" }}>

                <Typography variant='h3' style={{ fontFamily: "Open Sans", fontSize: "28px", fontWeight: '500' }}>Mix Dorm Four with ensuite</Typography>

                <div style={{}} >
                  <div className='ot-groupicons' style={{ gap: "10px" }} >

                    <div>
                      <p style={{ fontSize: "14px", marginTop: "10px", fontFamily: "Roboto", width: "500px" }}>Mixed dorms are fitted with 3, 5, 8 bunk beds and its own private bath </p>
                    </div>
                    <div className='min-ottycards' >
                      <div style={{ display: "flex", marginLeft: "300px", marginBottom: "50px" }}>
                        <div style={{}}>
                          <h5 style={{ marginTop: "5px", color: "palevioletred" }}>Mix Dorm</h5>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <h6 style={{ fontFamily: "Roboto" }}><del>900</del>/night</h6>
                            <h6 style={{ fontFamily: "Roboto" }}>810/night</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        <Button variant='contained' color='error' style={{ width: "100px", }}>Book now</Button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </Card>

        </div>
        <div style={{ width: "350px", marginLeft: "20px", marginTop: "100px" }}>


          <Card style={{ marginTop: "30px" }}>
            <div style={{ padding: "20px" }}>
              <Typography variant='h6'>My Selection</Typography>

              <div >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div style={{ display: "flex", gap: "70px", marginTop: "20px" }}>
                <h5 style={{ fontFamily: "Roboto" }}>Payable Amount 10%</h5>
                <h6 style={{ fontFamily: "Roboto" }} >₹286</h6>
              </div>
              <div style={{ display: "flex", gap: "150px", marginTop: "20px" }}>
                <h5 style={{ fontFamily: "Roboto" }}>Total Amount</h5>
                <h6 style={{ fontFamily: "Roboto" }}>₹0</h6>

              </div>
              <Button variant="contained" color='error' style={{ width: "200px", marginLeft: "50px" }}>Book now</Button>
            </div>
          </Card>
        </div>
      </div>






      <Footer />
    </section>
  )
}

export default Oprabhu