import React from "react"
import Measure from "./Measure";
export default function Airquality(props){
    return(
        <div className="airquality">
           <Measure data={props.data} for='AQI'/><hr/>
           <Measure data={props.data} for='o3'/><hr/>
           <Measure data={props.data} for='no2'/><hr/>
           <Measure data={props.data} for='pm10'/>
           
        </div>
    );

}