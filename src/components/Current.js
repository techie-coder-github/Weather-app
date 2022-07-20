import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Background_data from "./data2";
function Current(props){
    let condition = props.data.current.condition.text;
    let img;
    for(let x in Background_data){
        if(Background_data[x].day===condition){
            img = Background_data[x].icon;
            break;

        }
    }

    return(
        <div className="current" style={{backgroundImage:`url(${require(`../images/${img}`)})` }}>
            <div className="current--1">
                <div style={{display:"flex",alignItems:"center"}}>
                <LocationOnIcon fontSize="large" sx={{ color: "red" }}/>
                <p className="location" >{props.data.location.name},{props.data.location.region},{props.data.location.country}</p>

                </div>
                
                <p className="time">Last Updated At:{props.data.current.last_updated.slice(10)}</p>

            </div>
            <div className="current--2">
                <div>
                    <div className="current--21">
                    <img src={props.data.current.condition.icon} className="cloud_icon"/>
                    <h1 className="big">{props.data.current.temp_c}°C</h1>
                    
                    </div>
                    {/*  */}
                    <div>
                    <p id="condition_text">{props.data.current.condition.text}</p>

                    </div>

                </div>
                <div >
                    <div className="sun_set_rise ">
                    <span class="material-symbols-sharp yellow margin_right">light_mode</span> 
                    <span>{props.data.forecast.forecastday[0].astro.sunrise}</span>


                    </div>
                    <div className="sun_set_rise ">
                    <span class="material-symbols-sharp red_yellow margin_right">wb_twilight</span> 
                    <span>{props.data.forecast.forecastday[0].astro.sunset}</span>
                    

                    </div>
                
                
                </div>
                
            </div>
            <div className="current--3" >
                <div className="current--31">
                <div className="current--311">
                    <span class="material-symbols-sharp iconsize1">humidity_mid</span>
                    <span>{props.data.current.humidity}%</span>
                    

                </div>
                <div className="current--311">
                    <span>Humidity</span>

                </div>
                

                </div>
                <div className="current--31">
                  
                <div className="current--311">
                    <span class="material-symbols-sharp iconsize1">visibility</span>
                    <span>{props.data.current.vis_km}Km</span>
                    

                </div>
                <div className="current--311">
                    <span>Visibility</span>

                </div>
                    
                </div>
                <div className="current--31">
                  
                    <div className="current--311">
                        <span class="material-symbols-sharp iconsize1">air</span>
                        <span>{props.data.current.wind_kph}Km/h</span>
                    

                    </div>
                    <div className="current--311">
                        <span>Wind Speed</span>

                    </div>
                    
                </div>
                
            </div>

        </div>

    );


}
export default Current;