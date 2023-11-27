import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
   
    const navigator=useNavigate();
    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Password:', password1);
        setUsername('');
        setPassword('');
        setPassword1('');
    };
    const [currentPage, SetCurrentPage] = useState('register');
    const handleLoginClick = () => {
        SetCurrentPage('login');
    }
    return (

        <Container maxWidth="xs" style={{ backgroundColor: 'rgba(255, 255, 255,0.8)', borderRadius:'15px'}}>
            <Box color="success.main"
                style={{ backgroundColor: red }}
                sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleLogin}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email Address"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Confirm Password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary" type="submit">
                                Register
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button  onClick={()=>{navigator('/')}}>
                                Already have an account? Login
                            </Button>
                        </Grid>
                        {currentPage === 'login'}
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterPage;
