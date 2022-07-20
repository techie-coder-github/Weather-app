import React from 'react';
import axios from "axios"
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BasicTabs from "./components/BasicTabs"
import Current from './components/Current';
function App() {
  const [loc_count,setloc_count]=React.useState(0);
  function loc_counter(){
    setloc_count((old)=>{return old+1})

  }
  function getlocation(){
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        resolve(`${pos.coords.latitude},${pos.coords.longitude}`);
    })

    

    })
  }
  

  const [city,setcity]=React.useState();
  const [weather,setweather]=React.useState();
  function handlechange(event){
    setcity((old)=>{
      return event.target.value;
    })

  }
React.useEffect(()=>{

  getlocation().then((res)=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=2e349da0dbda4b51afb195737221707&q=${res}&days=9&aqi=yes&alerts=yes`)
  .then((response)=>{setweather(()=>{return response.data})})
  .catch((err)=>{console.log(err)})
  })
  .catch((err)=>{console.log(err)})
  
  
},[loc_count]);
 
async function submitHandler(event){
  event.preventDefault();
  try {
    
    let res=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=2e349da0dbda4b51afb195737221707&q=${city}&days=9&aqi=yes&alerts=yes`)
  
    setweather(()=>{return res.data})

    // console.log(weather);
    
  } catch (error) {
    console.log(error)
    
  }
  document.getElementById("search").reset();
  
  
}

  return (
    <div className="main">
      <div className="main--1">
        <form onSubmit={submitHandler} id="search">
        <input type="text" className="input--search" name="city" onChange={handlechange} placeholder={weather && `${weather.location.name},${weather.location.region},${weather.location.country}`}/>
        </form>
        <button type='submit' form='search' style={{background:"none",border:"none"}}><span type='submit' form='search' class="material-symbols-sharp search-box">search</span></button>
        
        <button style={{background:"none",border:"none"}} onClick={loc_counter}>
        <span class="material-symbols-sharp search-box" >my_location</span>
        </button>
        
        
      </div>
      
      <div className="main--3">
        {/* {weather && <Current data={weather} data2={location}/>} */}
        {/*how to render the based on condition for first time*/}
        {weather && <BasicTabs data={weather}/>}

      </div>
      
      
        
        

      
      
      
      
   
      
    </div>
  );
}

export default App;
