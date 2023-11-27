import React from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
  TextField,
  Select,
  Button,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
//import { Menu as MenuIcon, Search as SearchIcon, AccountCircle } from "@mui/icons-material";
export default function FlightTicket() {
  const cardData = [
    { title: "DUBAI", content: "Flights to Dubai,Explore the vibrant city of Dubai with our special flights.", imageUrl: "https://wallpapercosmos.com/w/middle-retina/2/1/f/274745-3840x2160-desktop-4k-dubai-wallpaper.jpg" },
    { title: "UNITED STATES", content: "Flights to New York,  Experience the hustle and bustle of the Big Apple with our direct flights.", imageUrl: "https://live.staticflickr.com/65535/47736369571_286dc5248c_b.jpg" },
    { title: "BALI", content: "Flights to Bali,visit the famous diamond beach and explore the ancient temples.", imageUrl: "https://wallpaper.dog/large/10909878.jpg" },
    { title: "SINGAPORE", content: "Flights to Singapore, Discover the marina bay and sky park in Singapore.", imageUrl: "https://images6.alphacoders.com/995/995889.jpg" },
    { title: "INDIA", content: "Flights to Agra, vist the TajMahal,one of the 7 wonders of world and a symbol of love.", imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWwlMjBhZ3JhJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" },
    { title: "LONDON", content: "Flights to London, Explore the bigben and amazing culture of British.", imageUrl: "https://wallpapers.com/images/featured/london-x9qjeypatfto90tj.jpg" },
    { title: "THAILAND", content: "Flights to Bangkok, Immerse yourself in the vibrant culture and bustling streets of Bangkok.", imageUrl: "https://images.pexels.com/photos/208444/pexels-photo-208444.jpeg?cs=srgb&dl=pexels-pixabay-208444.jpg&fm=jpg" },
    { title: "SPAIN", content: "Flights to Barcelona, Enjoy the architectural marvels and vibrant nightlife of Barcelona, Spain.", imageUrl: "https://www.hdwallpapers.in/download/royal_alcazar_palace_in_seville_spain_hd_travel-HD.jpg" },
    { title: "AUSTRALIA", content: "Flights to Australia, vist the marvellous Sydney's Opera house and melboune city's light.", imageUrl: "https://images.pexels.com/photos/513799/pexels-photo-513799.jpeg?cs=srgb&dl=pexels-pixabay-513799.jpg&fm=jpg" },
  ];

  return (
    <div>

      <Container maxWidth="md" sx={{ marginTop: 115 }}>
        <Typography align="center" variant="h3" color={"#c2542a"} sx={{ marginBottom: '40px',color:'aqua' }}>Clear Trip..!</Typography>  
        <hr></hr>
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {cardData.map((data, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card elevation={3}>
                <CardHeader title={data.title} />
                <img src={data.imageUrl} alt={data.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" fontFamily="Dancing Script, cursive" >
                    {data.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontFamily="Roboto, sans-serif">
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <hr></hr>
</div>
);
}
