import {Grid, Paper} from "@mui/material";
import * as React from 'react';
function AboutUs()
{
    const paperStyle={padding:20,height:'10vh',width:1000,margin:"40px auto"}
    const paperStyle2={padding:20,height:'60vh',width:1000,margin:"20px auto"}
    const paperStyle1={padding:20,height:'30vh',width:1000,margin:"20px auto"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} className="a">
            <div>
                <h1>Travel planning at your fingertips</h1>
            </div>
            </Paper>
            <Paper style={paperStyle2}>
                <div className="bb">
                    <img alt='' src="https://fastui.cltpstatic.com/raw/upload/travelsafe/prod/static/media/mockup-2.1e234fc9.png"  style={{maxWidth: 1000,maxHeight: 460}}/>
                </div>
            </Paper>
            <Paper elevation={10} style={paperStyle1} className="c">
            <div>
                <h4>Keeping it simple</h4>
                <p>
                A multiple award-winning airline, Qatar Airways won the 'World's Best Business Class' for the tenth time at the 2023 World Airline Awards, managed by the international air transport rating organisation, Skytrax. The airline continues to be synonymous with excellence, also taking home, Best Airline in the Middle East, World's Best Business Class Lounge and World's Best Business Class Lounge Dining at the prestigious awards held during the 2023 Paris Air Show. Qatar Airways is an unprecedented seven-time winner of the “World’s Best Airline” voted by Skytrax (2011, 2012, 2015, 2017, 2019, 2021 and 2022).

Qatar Airways currently flies to more than 160 destinations worldwide, connecting through its Doha hub, Hamad International Airport, voted by Skytrax as the 'World' Best Airport' in 2021 and 2022 consecutively.
                </p>
            </div>
            </Paper>
        </Grid>
    );
}   
export default AboutUs;
