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
import FlightIcon from '@mui/icons-material/Flight';
import MenuItem from '@mui/material/MenuItem';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import AdbIcon from '@mui/icons-material/Adb';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TourIcon from '@mui/icons-material/Tour';
import ExploreIcon from '@mui/icons-material/Explore';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Lp from './Login';
import AboutUs from './About';

// const pages = ['FLIGHT', 'HOTELS', 'CABS', 'OFFERS', 'MORE'];
const settings = [''];

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

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'serif',
                                fontWeight: 1000,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                gap: '2'
                            }}
                        >
                            <LuggageRoundedIcon style={{ marginTop: '5px' }} />
                            ClearTrip
                            <Box gap={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <FlightIcon style={{ marginTop: '5px' }} />
                                    <Link to='/Flight' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>FLIGHT</Link>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <CheckroomIcon style={{ marginTop: '5px' }} />
                                    <Link to='/Flight' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>HOTELS</Link>
                                </Box>
                                {/* <Box sx={{display:'flex'}}>
                                <LocalTaxiIcon style={{marginTop:'5px'}}/>
                                <Link to='/Flight' className='nav-link' style={{textDecoration:'none',color:'white'}}>CABS</Link>          
                            </Box> */}
                                <Box sx={{ display: 'flex' }}>
                                    <TourIcon style={{ marginTop: '5px' }} />
                                    <Link to='/Flight' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>PACKAGES</Link>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <ExploreIcon style={{ marginTop: '5px' }} />
                                    <Link to='/About' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>ABOUT US</Link>
                                </Box>

                            </Box>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                            </IconButton>

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
                        </Typography>


                        <Box sx={{ flexGrow: 10 }}>
                            <Button onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: '320px' }} variant='outline'
                            >
                                <Link to='/Login' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>LOGIN</Link>
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes>
                <Route exact path='/Login' element={<Lp />}></Route>
                <Route exact path='/About' element={<AboutUs/>}></Route>
            </Routes>

        </>
    );
}
export default ResponsiveAppBar;