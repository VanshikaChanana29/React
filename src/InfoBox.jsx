import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./InfoBox.css"

export default function InfoBox({info}){
    const Init_Url = "https://unsplash.com/photos/a-black-and-white-photo-of-a-large-amount-of-sand-8zLVRtPVkRA";


    
    return(<div className="InfoBox">
         <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
  
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
             <div>Temprature = {info.temp}&deg;C</div>
             <div>humidity = {info.humidity}</div>
             <div>Min temp = {info.tempMin}</div>
             <div>Max temp = {info.tempMax}</div>
             <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</div>
          </Typography>
        </CardContent>
    
      <CardActions>
       
      </CardActions>
    </Card>
    </div>
    </div>)
}