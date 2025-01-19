import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '/Users/adityapatil/Documents/Coding Stuff/googleflights/src/assests/logo.png'
import LuggageIcon from '@mui/icons-material/Luggage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import AppsIcon from '@mui/icons-material/Apps';
import DarkModeIcon from '@mui/icons-material/DarkMode';



const pages = ['Travel', 'Explore', 'Flights', 'Hotels', 'Vacation rentals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 'none', size: 'small', borderBottom: '1px solid lightgray' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <IconButton
            size="large"
            edge="start"
            color="lightgray"
            aria-label="menu"
            sx={{ ml: 0.8, mr: 2, padding: '0' }}

          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Google Flights
          </Typography> */}

          <Box
            component="img"
            src={logo}
            alt="Logo"
            onClick={handleLogoClick}
            sx={{
              height: 25,
              width: 'auto',
              marginTop: 0.8,
              marginRight: 3,
              display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
            }}
          />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem >
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Google Flights
          </Typography>

          {/* Menu */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                variant={index === 2 ? 'contained' : 'outlined'}
                startIcon={index === 0 ? <LuggageIcon sx={{ color: '#1558d6' }} /> : index === 1 ? <TravelExploreIcon sx={{ color: '#1558d6' }} /> : index === 2 ? <FlightTakeoffIcon sx={{ color: '#1558d6' }} /> : index === 3 ? <HotelIcon sx={{ color: '#1558d6' }} /> : <HouseIcon sx={{ color: '#1558d6' }} />}
                sx={{
                  my: 1,
                  mx: 0.5,
                  color: index === 2 ? '#1967D2' : 'black',
                  backgroundColor: index === 2 ? '#e8f0fe' : 'transparent',
                  borderColor: 'lightgray',
                  display: 'flex',
                  borderRadius: '20px',
                  boxShadow: index === 2 ? '0 0px 0px 0 rgb(0 0 0 / 20%)' : 'none',
                  textTransform: 'capitalize',
                  fontWeight: 400,
                  textRendering: 'optimizeLegibility',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="lightgray"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DarkModeIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="lightgray"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Aemy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;