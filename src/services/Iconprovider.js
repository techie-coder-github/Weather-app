import React from "react";
function Iconprovider(props){
    const url=`http://openweathermap.org/img/wn/${props.data}@2x.png`
    return (
        <div>
            <img src={url} className="cloud_icon"/>
            
        </div>
    );


}
export default Iconprovider;
