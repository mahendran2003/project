import { Avatar, Box, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import '../App.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function Regis() {
    const paperStyle = { width: 380, margin: "20px auto" }
    return (
        <Grid>
            <Paper style={paperStyle} className="reg">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2>REGISTRATION..!</h2>
                    <br />
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <br></br>
                    {/* <br></br> */}

                    <TextField className="ii" id="outlined-basic" label="USERNAME" variant="outlined" />
                    {/* <br></br> */}
                    <br></br>
                    <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
                    {/* <br></br> */}
                    <br></br>
                    <TextField id="outlined-basic" label="PHONE NUMBER" variant="outlined" />
                    {/* <br></br> */}
                    <br></br>
                    <TextField type="password" id="outlined-basic" label="PASSWORD" variant="outlined" />
                    {/* <br></br> */}
                    <br></br>
                    <TextField type="password" id="outlined-basic" label="CONFIRM PASSWORD" variant="outlined" />
                    <br></br>
                    <br></br>
                    <button>CREATE</button>
                    <br></br>
                    <br></br>

                </Box>
            </Paper>
        </Grid>
    );
}
// export default Regis;