import React from "react"
export default function Measure(props){
    if(props.for==='AQI'){
        let color;
        let quality;
        let desc;
        switch(props.data.current.air_quality["us-epa-index"]){
            case(1):
                color="#3AB54A";
                quality="Good";
                desc="The air quality is ideal for most individuals; enjoy your normal outdoor activities.";
                break;
            case(2):
                color="#F7941D";
                quality="Moderate";
                desc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.";
                break;
            case(3):
                color="#F25A29";
                quality="Unhealthy";
                desc="Health effects can be immediately felt by sensitive groups. Limit outdoor activity.";
                break;
            case(4):
                color="#ED1B24"; 
                quality="Unhealthy";  
                desc="The air has reached a high level of pollution and is unhealthy for sensitive groups. Reduce time spent outside ."; 
                break;
            case(5):
                color="#DA1C5C"; 
                quality="Very Unhealthy";  
                desc="Health effects will be immediately felt by sensitive groups and should avoid outdoor activity. consider staying indoors and rescheduling outdoor activities.";
                break; 
            case(6):
                color="#9E1F64";
                quality="Hazardous";
                desc="Any exposure to the air, even for a few minutes, can lead to serious health effects on everybody. Avoid outdoor activities.";
        }
        return(
            <div className="aq_row">
                <div className="circle " style={{borderColor:color}}>
                    <p>{quality}</p>
                </div>
                <div className="aq_row_desc ">
                    <span className="aq_value">AQI(Air Quality Index): {props.data.current.air_quality["us-epa-index"]}</span><br/>
                    <span>{desc}</span>

                </div>
    
                
            </div>
        );
    }
    else if(props.for==='pm10') {
        let color;
        let quality;
        let desc;
        const conc=props.data.current.air_quality[`${props.for}`];
        if(conc<=25){
            color="#3AB54A";
            quality="Good";
            desc="The air quality is ideal for most individuals; enjoy your normal outdoor activities.";
        }
        else if(conc>25 && conc<=50){
            color="#F7941D";
            quality="Fair";
            desc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.";


        }
        else if(conc>50 && conc<=90){
            color="#F25A29";
            quality="Moderate";
            desc="Health effects can be immediately felt by sensitive groups. Limit outdoor activity.";

        }
        else if(conc>90 && conc<=180){
            color="#ED1B24"; 
            quality="Poor";
            desc="The air has reached a high level of pollution and is unhealthy for sensitive groups. Reduce time spent outside ."; 



        }
        else{
            color="#DA1C5C"; 
            quality="Very Poor";
            desc="Health effects will be immediately felt by sensitive groups and should avoid outdoor activity. consider staying indoors and rescheduling outdoor activities.";


        }
        
        return(
            <div className="aq_row">
              
                <div className="circle" style={{borderColor:color}}>
                    <p>{quality}</p>


                </div>
                <div className="aq_row_desc ">
                    <span className="aq_value">PM<sub>10</sub>(Concentration): {conc.toFixed(2)} μg/m3</span><br/>
                    <span>{desc}</span>

                </div>

    
                
            </div>
    
                
           
        );

    }
    else{
        let color;
        let quality;
        let desc;
        const conc=props.data.current.air_quality[`${props.for}`];
        if(conc<=50){
            color="#3AB54A";
            quality="Good";
            desc="The air quality is ideal for most individuals; enjoy your normal outdoor activities.";
        }
        else if(conc>50 && conc<=100){
            color="#F7941D";
            quality="Fair";
            desc="The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.";


        }
        else if(conc>100 && conc<=200){
            color="#F25A29";
            quality="Moderate";
            desc="Health effects can be immediately felt by sensitive groups. Limit outdoor activity.";

        }
        else if(conc>200 && conc<=400){
            color="#ED1B24"; 
            quality="Poor";
            desc="The air has reached a high level of pollution and is unhealthy for sensitive groups. Reduce time spent outside "; 



        }
        else{
            color="#DA1C5C"; 
            quality="Very Poor";
            desc="Health effects will be immediately felt by sensitive groups and should avoid outdoor activity. consider staying indoors and rescheduling outdoor activities.";


        }
        
        return(
            <div className="aq_row">
              
                <div className="circle" style={{borderColor:color}}>
                    <p>{quality}</p>


                </div>
                <div className="aq_row_desc ">
                    <span className="aq_value">{props.for==='o3'?<span className="aq_value">O<sub>3</sub></span>:<span className="aq_value">NO<sub>2</sub></span>}(Concentration): {conc.toFixed(2)} μg/m3</span><br/>
                    <span>{desc}</span>

                </div>

    
                
            </div>
    
                
           
        );

    }
    
}