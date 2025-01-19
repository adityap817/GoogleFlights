import { Container, Typography, Button, InputLabel } from '@mui/material'
import React from 'react'
import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { InputAdornment } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { IconButton } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { MyLocation } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// ---------------------------------------------------------------------------------

function Body() {


    const [trip, setTrip] = React.useState("One way");
    const [people, setPeople] = React.useState(1);
    const [type, setType] = React.useState("Economy");


    const handleChangeTrip = (event) => setTrip(event.target.value);
    const handleChangePeople = (event) => setPeople(event.target.value);
    const handleChangeType = (event) => setType(event.target.value);

    const fromRef = useRef(null);
    const toRef = useRef(null);

    useEffect(() => {
        if (window.google) {
            const fromAutocomplete = new window.google.maps.places.Autocomplete(fromRef.current, { types: ['(cities)'] });
            const toAutocomplete = new window.google.maps.places.Autocomplete(toRef.current, { types: ['(cities)'] });

            fromAutocomplete.addListener('place_changed', () => {
                const place = fromAutocomplete.getPlace();
                console.log('From Place:', place);
            });

            toAutocomplete.addListener('place_changed', () => {
                const place = toAutocomplete.getPlace();
                console.log('To Place:', place);
            });
        }
    }, []);


    return (
        <Container>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 300,
                    backgroundImage: 'url(/googleflights.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // boxShadow: 2, 
                }}
            />

            <Typography variant="h3" color="initial" align='center' marginTop={0}
                sx={{
                    position: 'absolute',
                    top: 300,
                    bottom: 20,
                    left: 20,
                    right: 20,
                    fontSize: 55
                }}>
                Flights
            </Typography>

            <Box
                sx={{
                    position: 'relative',
                    width: '85%',
                    height: 160,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                    border: ' 2px black',
                    // backgroundColor:'red',
                    boxShadow: 8,
                    borderRadius: '8px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}

            >

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    ml: 2,


                    // padding:2,
                    // backgroundColor:'red',
                    // marginTop:10
                }}>

                    {/* TRIP */}

                    <FormControl sx={{
                        minWidth: 120,
                        position: 'absolute',
                        top: 5,
                        left: 20,


                        '& .MuiInputBase-root': {
                            fontSize: '0.875rem',
                            padding: '2px 4px',
                        },
                        '&:hover .MuiOutlinedInput-root': {
                            backgroundColor: '#f6f8fa',
                        },
                        '&:hover .MuiSelect-select': {
                            color: 'inherit',
                        },
                    }}>
                        <InputLabel id="trip-label"></InputLabel>
                        <Select

                            labelId="trip-label"
                            value={trip}
                            onChange={handleChangeTrip}
                            label="Trip"
                            sx={{
                                height: 40,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',

                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',

                                },

                            }}
                            input={<OutlinedInput

                                startAdornment={
                                    <InputAdornment position="start">
                                        <ArrowRightAltIcon />
                                    </InputAdornment>
                                }


                            />}
                        >
                            <MenuItem value={'Round trip'}> Round trip</MenuItem>
                            <MenuItem value={'One way'}>One way</MenuItem>
                            <MenuItem value={'Multi-city'}>Multi-city</MenuItem>
                        </Select>
                    </FormControl>

                    {/* PEOPLE */}

                    <FormControl sx={{
                        minWidth: 75,
                        position: 'absolute',
                        top: 5,
                        left: 165,
                        gap: 2,

                        '& .MuiInputBase-root': {
                            fontSize: '0.875rem',
                            padding: '2px 0px',
                        },
                        '&:hover .MuiOutlinedInput-root': {
                            backgroundColor: '#f6f8fa',
                        },
                        '&:hover .MuiSelect-select': {
                            color: 'inherit',
                        }
                    }}>
                        <InputLabel id="people-label"></InputLabel>
                        <Select
                            labelId="people-label"
                            value={people}
                            onChange={handleChangePeople}
                            label="People"
                            sx={{
                                fontWeight: 100,
                                height: 40,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'

                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'

                                },
                            }}
                            input={<OutlinedInput

                                startAdornment={
                                    <InputAdornment position="start" >
                                        <PersonOutlineIcon />
                                    </InputAdornment>
                                }
                            />}
                        >
                            {
                                Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                                    <MenuItem value={value}>{value}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    {/* TYPE */}

                    <FormControl sx={{
                        minWidth: 100,
                        position: 'absolute',
                        top: 5,
                        left: 245,
                        '& .MuiInputBase-root': {
                            fontSize: '0.875rem',
                            padding: '2px 0px',
                        },
                        '&:hover .MuiOutlinedInput-root': {
                            backgroundColor: '#f6f8fa',
                        },
                        '&:hover .MuiSelect-select': {
                            color: 'inherit',
                        }
                    }}>
                        <InputLabel id="type-label"></InputLabel>
                        <Select
                            labelId="type-label"
                            value={type}
                            onChange={handleChangeType}
                            label="Type"
                            sx={{
                                height: 40,

                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'

                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'

                                },
                            }}
                            input={<OutlinedInput

                                startAdornment={
                                    <InputAdornment position="start">

                                    </InputAdornment>
                                }
                            />}
                        >
                            <MenuItem value={'Economy'}>Economy</MenuItem>
                            <MenuItem value={'Premium economy'}>Premium economy</MenuItem>
                            <MenuItem value={'Business'}>Business</MenuItem>
                            <MenuItem value={'First'}>First</MenuItem>
                        </Select>
                    </FormControl>

                </Box>




                <TextField
                    id="outlined-basic"
                    placeholder='Where from?'
                    variant="outlined"
                    inputRef={fromRef}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MyLocation />
                            </InputAdornment>
                        )
                    }}

                    sx={{
                        // my: 2,
                        mx: 1,
                        ml: -3,
                        left: 0,
                        minWidth: 280,
                        "& .MuiOutlinedInput-root": {
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "4px",
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                top: "50%",
                                right: "-20px",
                                transform: "translateY(-50%)",
                                width: "30px",
                                height: "30px",
                                backgroundColor: "white",
                                border: "1.5px solid lightgray",
                                borderRadius: "50%", // 
                                zIndex: 1,
                            },
                        },


                    }}
                />

                <IconButton
                    size="xl"
                    edge="start"
                    color="lightgray"
                    aria-label="menu"
                    sx={{
                        ml: -2,
                        padding: '0',
                        zIndex: 4,
                        size: 'large',
                    }}
                >
                    <SwapHorizIcon />
                </IconButton>

                <TextField
                    id="outlined-basic"
                    placeholder="Where to?"
                    variant="outlined"
                    inputRef={toRef}

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PlaceIcon />
                            </InputAdornment>
                        )
                    }}


                    sx={{
                        // my:2,
                        // mr:13,
                        mx: 1,
                        ml: -1,
                        minWidth: 280,

                        "& .MuiOutlinedInput-root": {
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "4px",
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                top: "50%",
                                left: "-20px",
                                transform: "translateY(-50%)",
                                width: "30px",
                                height: "30px",
                                backgroundColor: "white",
                                border: "1.5px solid lightgray",
                                borderRadius: "50%",
                                zIndex: 1,
                            },
                        },


                    }}
                />

                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Departure"

                        sx={{
                            // ml: 0.5,
                            // mr,
                            minWidth: 365,

                        }}
                    />


                    {/* <DateRangePicker sx={{

                        ml: -10,
                        minWidth: 280,
                        

                    }} localeText={{ start: 'Departure', end: 'Return' }} 
                    /> */}

                </LocalizationProvider>

            </Box>


            <Button variant="contained" color="inherit"
                startIcon={<SearchIcon />}
                sx={{
                    my: 2,
                    mx: 2,
                    color: 'white',
                    //   color: '#4285F4' , 
                    //   backgroundColor:  '#e8f0fe', 
                    backgroundColor: '#4285F4',
                    borderColor: 'lightgray',
                    display: 'flex',
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                    right: 20,
                    left: 0,
                    justifySelf: 'center',
                    top: -30
                }}>
                Explore
            </Button>

        </Container>

    )
}

export default Body