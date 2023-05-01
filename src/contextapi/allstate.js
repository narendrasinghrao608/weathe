import React,{useState} from 'react'
import Context from "./context"
function Allstate(props) {
    let [cloud_pct, setcloud_pct] = useState("");
    let [feels_like, setfeels_like] = useState("");
    let [humidity, sethumidity] = useState("");
    let [max_temp, setmax_temp] = useState("");
    let [min_temp, setmin_temp] = useState("");
    let [sunrise, setsunrise] = useState("");
    let [sunset, setsunset] = useState("");
    let [temp, settemp] = useState("");
    let [wind_degrees, setwind_degrees] = useState("");
    let [wind_speed, setwind_speed] = useState("");
    let [city, setcity] = useState("Rajsamand");
    let [submit, setsubmit] = useState("");
    const getweather = (city) => {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": "0054e3a37amsh9cdd05bd4efda3ep16ffcajsn67bb57e6af7e",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      console.log("getweather are calling")
      setcity(city);
      const url =
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setcloud_pct(response.cloud_pct);
          setfeels_like(response.feels_like);
          sethumidity(response.humidity);
          setmax_temp(response.max_temp);
          setmin_temp(response.min_temp);
          setsunrise(response.sunrise);
          setsunset(response.sunset);
          settemp(response.temp);
          setwind_degrees(response.wind_degrees);
          setwind_speed(response.wind_speed);
        })
        .catch((error) => console.error(error));
    };
  return ( 
      <Context.Provider value={ {cloud_pct,setcloud_pct,feels_like,setfeels_like,humidity,sethumidity,max_temp,setmax_temp,min_temp,setmin_temp,submit,setsubmit,sunrise,setsunrise,sunset,setsunset,temp,settemp,setwind_degrees,wind_degrees,wind_speed,setwind_speed,city,setcity,getweather}}>
            {props.children}
        </Context.Provider>
  )
}

export default Allstate
