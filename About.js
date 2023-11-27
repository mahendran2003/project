import {Grid, Paper} from "@mui/material";
import * as React from 'react';
function AboutUs()
{
    const paperStyle={padding:20,height:'15vh',width:1000,margin:"15px auto"}
    const paperStyle2={padding:20,height:'65vh',width:1000,margin:"20px auto"}
    const paperStyle1={padding:20,height:'52vh',width:1000,margin:"20px auto"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} className="a">
            <div>   
                <h1 style={{marginTop:'50px'}}>Travel planning at your fingertips</h1>
            </div>
            </Paper>
            <Paper style={paperStyle2}>
                <div className="bb">
                    <img alt='' src="https://fastui.cltpstatic.com/raw/upload/travelsafe/prod/static/media/mockup-2.1e234fc9.png"  style={{maxWidth: 1600,maxHeight: 450}}/>
                </div>
            </Paper>
            <Paper elevation={10} style={paperStyle1} className="c">
            <div>
                <h4>Keeping it simple</h4>
                <p>
                Air India is the flag carrier of India.[7] It is owned by Air India Limited, under Tata Group.[8][9] Air India operates a fleet of Airbus and Boeing aircraft serving 102 domestic and international destinations.[10][11] The airline has its hub at Indira Gandhi International Airport, Delhi, alongside several focus cities across India. Air India is the largest international carrier in India with an 18.6% market share.[12] Over 60 international destinations are served by Air India across five continents. The airline became the 27th member of Star Alliance on 11 July 2014.

The airline was founded by J. R. D. Tata as Tata Airlines in 1932; Tata himself flew its first single-engine de Havilland Puss Moth, carrying air mail from Karachi's Drigh Road Aerodrome to Bombay's Juhu aerodrome and later continuing to Madras (currently Chennai). After World War II, it became a public limited company and was renamed as Air India. On 21 February 1960, it took delivery of its first Boeing 707 named Gauri Shankar and became the first Asian airline to induct a jet aircraft in its fleet.[13] In 2000 and 2001, attempts were made to privatise Air India and from 2006 onwards, it suffered losses after its merger with Indian Airlines. Another privatisation attempt was launched in 2017, which concluded with ownership of the airline and associated properties reverting to Tata in 2022.

Air India also operates flights to domestic and Asian destinations through its subsidiary Air India Express. Air India's mascot is the Maharajah (Emperor) and the erstwhile logo consisted of a flying swan with the wheel of Konark inside it, before being replaced by a new logo inspired by the airline's signature Jharokha window pattern in 2023.
                </p>
            </div>
            </Paper>
        </Grid>
    );
}   
export default AboutUs;