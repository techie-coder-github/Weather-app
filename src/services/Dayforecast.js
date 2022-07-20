import React from "react"
export default function Dayforecst(props){
    return (
        <div className="row_dayforecast">
            <div>
                <p>{props.data.date}</p>
            </div>
            <div>
                <img src={props.data.day.condition.icon}/>
            </div>
            <div>
                {props.data.day.avgtemp_c}
            </div>
            <div className="icon--value">
            
            {props.data.day.maxtemp_c}/{props.data.day.mintemp_c}
            </div>
            <div>
                
                {props.data.day.condition.text}
            </div>
            <div className="icon--value">
            <span class="material-symbols-sharp">humidity_mid</span>
            {props.data.day.avghumidity}%
            
            </div>
            


        </div>
    );


} 