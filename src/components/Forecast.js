import React from "react"
import Dayforecst from "../services/Dayforecast";
export default function Forecast(props){
    const arr_jsx=props.data.forecast.forecastday.map((day)=>{return <Dayforecst data={day}/>})
    return(
        <div>
            {arr_jsx}
            
        </div>
    );

}