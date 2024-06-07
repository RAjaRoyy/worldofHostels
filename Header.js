import React from 'react';
 import './Header.css'
import mainbanner from '../../assets/mainbanner.jpg'
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
import { Button } from '@mui/material';
import { Col } from 'react-bootstrap';

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

const Header = () => {

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

  // this is date



  return (
    <section className='header' item xs={12} sm={6}>
      <Grid sx={{ marginLeft: "100px" }} >
        <div className='image-container'>
          <img src={mainbanner} alt='' />
          <div className='overlay-text'>
            <h1 className='overlay-font'>Where comfort meet's adventure.</h1></div>
        </div>
        <div className='searchcard-grid'>
          <div className='sub-search' style={{ display: "flex", gap: "15px",boxShadow:'none' }}>
            <Autocomplete
             item xs={12} sm={6}
              id="google-map-demo"
              sx={{ width: 300, marginTop: "8px",boxShadow:'none'}}
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
                      <Grid item sx={{ display: 'flex', }}>
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
                        <Typography variant="body2" color="text.secondary" style={{ width: "100%" }}>
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
            <Button variant="contained" style={{ width: "150px", height: "50px", marginTop: "9px", backgroundColor: "blue" }}>let's go</Button>
          </div>
        </div>



      </Grid>
    </section>
  )
}

export default Header