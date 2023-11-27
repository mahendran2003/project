import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import GradeIcon from '@mui/icons-material/Grade';
export default function Navbar() {
    return (
        // <BrowserRouter >
            <div>
                <AppBar sx={{ height: '70px' }}>
                    <Toolbar >
                        <nav className='navbar navbar-expand-lg navbar-light ' style={{ color: 'black' }}>
                            <ul className='navbar nav' style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', justifyContent: 'flex-end', padding: 10 }}>
                                <li className='nav-item' style={{ marginRight: 40, textDecoration: 'none' }}>
                                    <Link to='/FlightTicket' className='nav-link' style={{ textDecoration: 'none' }} ><h2>Home</h2></Link>
                                </li>
                                
                              
                                
                                    <LocalAirportIcon sx={{marginTop:'25px'}}/>
                                <li className='nav-item' style={{ marginRight: 40, textDecoration: 'none' }}>
                                    <Link to='/book' className='nav-link' style={{ textDecoration: 'none' }}><h2>Book Tickets</h2></Link>
                                </li>
                                    <GradeIcon sx={{marginTop:'25px'}}/>
                                <li className='nav-item' style={{ marginRight: 40, textDecoration: 'none' }}>
                                    <Link to='/Aboutus' className='nav-link' style={{ textDecoration: 'none' }}><h2>About us</h2></Link>
                                </li>
                                <li className='nav-item' style={{ marginRight: 40, textDecoration: 'none' }}>
                                    <Link to='/login' className='nav-link' style={{ textDecoration: 'none' }}><h2>Login</h2></Link>
                                </li>
                                <li className='nav-item' style={{ marginRight: 40, textDecoration: 'none' }}>
                                    <Link to='/register' className='nav-link' style={{ textDecoration: 'none' }}><h2>Register</h2></Link>
                                </li>
                            </ul>
                        </nav>
                    </Toolbar>
                </AppBar>
            </div>

)
}
