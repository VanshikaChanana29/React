
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState({
        city : "karnataka",   
        feelslike
        : 
        undefined, 
        humidity
        : 
        75, 
        temp
        : 
        27.05, 
        tempMax
        : 
        27.05, 
        tempMin
        : 
        27.05,
        weather : "haze" ,
            }
    ); 
    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo); 
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>
                Check your Weather  </h2>
             <SearchBox updateInfo = {updateInfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}