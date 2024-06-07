import React, { useEffect, useState } from 'react';
import './Bprabhu.css';
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
import { debounce } from '@mui/material/utils';
import ChairIcon from '@mui/icons-material/Chair';
import AirIcon from '@mui/icons-material/Air';
import TvIcon from '@mui/icons-material/Tv';
import LuggageIcon from '@mui/icons-material/Luggage';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../../components/footer/Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShowerIcon from '@mui/icons-material/Shower';
import DryIcon from '@mui/icons-material/Dry';
import indiranagarkitchen from '../../assets/bangassets/indiranagarkitchen.webp'
import InfoIcon from '@mui/icons-material/Info';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RateReviewIcon from '@mui/icons-material/RateReview';
// import ImageGalleryComponent from './ImageGalleryComponent';
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


function Bprabhu() {


    // Guests  count increaseing ,decreaseing
    const [count, setCount] = useState(0);
    const amountPerGuest = 500;

    const increaseCount = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const totalAmount = count * amountPerGuest;









    const data = [
        {
            div: 1,
            imgsrc: bedroom,
        },
        {
            div: 2,
            imgsrc: bedroom2,
        }, {
            div: 3,
            imgsrc: indiranagarkitchen,
        },
        {
            div: 4,
            imgsrc: dining,
        },
        {
            div: 5,
            imgsrc: bedroom,
        }, {
            div: 6,
            imgsrc: bedroom2,
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

    const str =
        "This budget friendly place offers both private rooms and dorms for the comfort of both individuals and groups.  Dorms have 2 bunk beds and spacious and can accommodate an extra bed  for groups wanting to share the same room. Delicious homely food made from freshly grown organic vegetables on request.Located just minutes away from Ooty Botanical gardens - a charming farm house Budget friendly with options for both dormitory and private rooms Surrounded by an organic farm and join a guided tour of the farm on request         Prabhu's Place Ooty is located ideally in the heart of Ooty city center but nestled in a farm. This farm house boosts with colonial architecture within 5 minutes walking distance to Botanical Gardens, Charing cross, market and short hike to the boat lake and railway station."
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




    return (
        <section>
            <div className='bprabhu-section'>
                <div className='bprabhu-main'  >
                    {/* <ImageGalleryComponent images={images} />  */}

                    {/* <img src={bedroom} style={{height:"250px"}}/> */}
                    <img src={bedroom} style={{ height: '500px', width: '90%', borderRadius: '20px', marginRight: "100px" }}></img>


                    {/* <Carousel style={{ width: "1300px", borderRadius: '10px' }}>
                        <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                            <img src={bedroom} text="First slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={bedroom2} text="Second slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={dining} text="Third slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={indiranagarkitchen} text="Third slide" alt='' style={{ height: '500px', width: "1300px", borderRadius: '10px' }} />
                        </Carousel.Item>
                    </Carousel> */}

                </div>




                <div className='bprabhu-grid'>
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


                <div className='Bprabhus-contnt'>
                    <Typography variant='h4' style={{ fontFamily: 'Open Sans', fontSize: '30px', fontWeight: '500' }} >Prabhu's place in Bangalore</Typography >
                    <div style={{ display: 'flex' }}>
                        <LocationOnIcon style={{ fontSize: "30px" }} />
                        <Typography variant='h6' style={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '400', fontStyle: 'normal' }}> 100 ft road indiranagar, Bangalore, India</Typography>
                    </div>


                    <Tabs
                        defaultActiveKey="about"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    //   justify
                    >
                        <Tab eventKey="about" title={<span><InfoIcon />  About</span>}>
                            <div>
                                <p style={{ fontFamily: "Roboto", fontSize: "16px", width: "1150px" }}>{resultStr}</p>
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

                            <h4 style={{ fontFamily: 'Roboto', fontSize: '24px' }}>JMJ Apartments Location</h4>
                            <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="
                              https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=JMJ%20Apartment%20,100%20Feet%20Rd,%20Stage%203,%20Indiranagar,%20Bengaluru,%20Karnataka%20560038+(World%20Of%20Hostels)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                                    href="https://www.gps.ie/">gps
                                    devices</a></iframe>
                        </Tab>
                        <Tab eventKey="review" title={<span><RateReviewIcon />  Review</span>}>
                            <Typography variant="h6" style={{ backgroundColor: "tomato", margin: "20px", width: "60%", fontFamily: 'Open Sans' }} >⭐ 100% genine Review from real hostel travelers like you!</Typography>
                            <div style={{ display: "flex", gap: "30px", margin: "30px" }}>
                                <div>
                                    <h1 style={{ backgroundColor: "tomato", color: "white" }}>6.1</h1>
                                </div>
                                <div>
                                    <div>
                                        <h5 style={{ fontFamily: 'Roboto' }}>Good</h5>
                                        <h6 style={{ fontFamily: 'Roboto' }}>Total Reviews</h6>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "30px", margin: "30px" }}>
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
                                    <Typography variant='h6' style={{ fontFamily: 'Roboto' }} >ashokreddy</Typography>
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
                <div>
                </div>


                <div style={{ display: "flex", marginBottom: '20px' }}>
                    <div style={{}}>
                        <Card
                            // className='roomcardlist'
                            style={{ height: '279px', width: "950px" }}
                        >
                            <div
                                //  className='card-div' 
                                style={{ padding: "20px", display: "flex" }}>
                                <div>
                                    {/* <img src={bnglprivateroom} style={{height:"250px"}}/> */}
                                    <Carousel style={{ width: '15rem', borderRadius: '10px' }}>
                                        <Carousel.Item interval={100} style={{ borderRadius: '10px' }} >
                                            <img src={bedroom} text="First slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img src={bedroom2} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img src={dining} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img src={indiranagarkitchen} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img src={dining} text="Second slide" alt='' style={{ height: '250px', borderRadius: '10px' }} />
                                        </Carousel.Item>

                                    </Carousel>
                                </div>
                                <div style={{ marginLeft: "45px" }}>
                                    <h4 style={{ fontFamily: 'Open Sans', fontSize: '18px' }}> Fully furnished 2 bed 2 bath Apartment </h4>
                                    <div style={{ display: "flex" }}>
                                        <div className='ot-groupicons' style={{ gap: "10px" }} >

                                            <div>
                                                <p style={{ fontSize: "14px", marginTop: "8px", fontFamily: "Roboto" }}>Fully furnished 2 bed 2 bath apartment with cooking amenities including a microwave oven, Fridge, utensils, a washer and a space to dry your clothes in the balcony. </p>
                                            </div>
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
                                                {/* <div style={{ marginTop: "15px" }}>
                                                    <Button variant='contained' color='error' style={{ width: "fit-content", }}>Book now</Button>
                                                </div> */}

                                                <div >
                                                    <h5 style={{ marginTop: "5px", color: "palevioletred" }}>Add Guest</h5>
                                                    <div className="carddd" style={{ display: "flex",fontSize:'30px'}}>
                                                        <Button variant="text" onClick={decreaseCount} disabled={count <= 0}>-</Button>
                                                        <Typography style={{ fontFamily: 'Roboto', fontSize: '20px', marginTop: "5px" }}>{count}</Typography>
                                                        <Button variant="text" onClick={increaseCount} disabled={count >= 10}>+</Button>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>


                    </div>

                    <div style={{ width: "350px", marginLeft: "20px" }}>

                        <Card >
                            <div style={{ padding: "20px",height:"280px" }}>
                                <Typography variant='h6'>My Selection</Typography>

                                <div >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateRangePicker']}>
                                            <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                                
                                <div style={{ display: "flex", gap: "70px", marginTop: "20px" }}>
                                    <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>Total Amount:   {totalAmount} Rs</Typography>
 
                                </div>
                                
                                <Button variant="contained" color='error' style={{ width: "200px", marginLeft: "50px" }}>Book now</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />

        </section>
    )
}

export default Bprabhu