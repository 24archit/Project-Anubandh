import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE';

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

// Styled Autocomplete and TextField components
const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: 300,
  color: '#fff', // White text color
  '& .MuiInputBase-input': {
    color: '#fff', // White text in the input
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff', // White border
    },
    '&:hover fieldset': {
      borderColor: '#fff', // White border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff', // White border when focused
    },
  },
}));

// Styled Number Input component for years of experience
const CustomNumberInput = styled(TextField)(({ theme }) => ({
  width: 300,
  '& input[type=number]': {
    color: '#fff', // White text color for the number input
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff', // White border
    },
    '&:hover fieldset': {
      borderColor: '#fff', // White border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff', // White border when focused
    },
  },
}));

// Options for job type filter
const jobTypes = ['Full-time', 'Part-time', 'Remote', 'Internship', 'Apprenticeship'];

export default function GoogleMaps() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [extraInput, setExtraInput] = React.useState(''); // New state for the extra textbox
  const [selectedJobType, setSelectedJobType] = React.useState(''); // New state for job type filter
  const [yearsOfExperience, setYearsOfExperience] = React.useState(''); // State for years of experience
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
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
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

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <CustomAutocomplete
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
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  background: 'linear-gradient(to bottom, rgba(165, 169, 240,0.8), rgba(255, 255, 255,0.8))', // Gradient background
                  backdropFilter: 'blur(10px)', // Apply blur effect
                }}
              />
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                fullWidth
                InputLabelProps={{
                  style: { color: '#fff' }, // White label color
                }}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    color: '#fff', // White text color
                  },
                }}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              const matches =
                option.structured_formatting.main_text_matched_substrings || [];

              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match) => [match.offset, match.offset + match.length]),
              );
              return (
                <li key={key} {...optionProps}>
                  <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item sx={{ display: 'flex', width: 44 }}>
                      <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    </Grid>
                    <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                      {parts.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                        >
                          {part.text}
                        </Box>
                      ))}
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              );
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Keyword, Job Title, Company, etc."
            value={extraInput}
            onChange={(e) => setExtraInput(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { color: '#fff' }, // White label color
            }}
            InputProps={{
              style: { color: '#fff' }, // White text color
            }}
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fff', // White border
                },
                '&:hover fieldset': {
                  borderColor: '#fff', // White border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff', // White border when focused
                },
              },
            }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            options={jobTypes}
            value={selectedJobType}
            onChange={(event, newValue) => {
              setSelectedJobType(newValue);
            }}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  background: 'linear-gradient(to bottom, rgba(165, 169, 240,0.8), rgba(255, 255, 255,0.8))', // Gradient background
                  backdropFilter: 'blur(10px)', // Apply blur effect
                }}
              />
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Job Type"
                InputLabelProps={{
                  style: { color: '#fff' }, // White label color
                }}
                InputProps={{
                  ...params.InputProps,
                  style: { color: '#fff' }, // White text color
                }}
                sx={{
                  width: 300,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // White border
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff', // White border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff', // White border when focused
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        {/* New Grid item for Years of Experience */}
        <Grid item>
          <CustomNumberInput
            type="number"
            aria-label="Experience"
            placeholder="Years Of Experience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { color: '#fff' }, // White label color
            }}
            InputProps={{
              style: { color: '#fff' }, // White text color
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
