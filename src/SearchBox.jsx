import "./SearchBox.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react";
export default function  SearchBox({updateInfo}){
        let [city , setCity] = useState("");
        let [error , seterror] = useState(false);
        const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
        const API_KEY = "a379cc2b207a15281df47bb1120e7888";

        let getWeatherInfo = async ()=>{
            try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json(); 
            console.log(jsonResponse);
            let result = {
                city : city, 
                temp : jsonResponse.main.temp, 
                tempMin : jsonResponse.main.temp_min, 
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity, 
                feelslike : jsonResponse.main.feelslike, 
                weather : jsonResponse.weather[0].description,

            };
            console.log(result);
            return result ; 
        }
        catch(err){
            throw err ; 
        }
        }
     
        let handleChnage = (evt)=>{
            setCity(evt.target.value); 
        }; 
        let handleSubmit = async (evt)=>{
         try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
         }
         catch(err){
            seterror(true)
         }
        }
    return(
      
        <div className="SearchBox"> 
            <form onSubmit={handleChnage} >
            <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handleChnage}/>
            <br />
            <br />
            <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
            {error && <p style={{color : "red"}}>No Such place exists</p>}
            </form>
        </div>
    );
}