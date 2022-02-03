import React from 'react';


const ResultWeather = (props)=>{
        return(
            props.temp &&   <div className='result'>
                                <div className="location">     Location  : <span>  {props.location}     </span> </div>
                                <div className="temp">         Tempreture: <span>  {props.temp}         </span> </div>
                                <div className="humidity">     Humidity  : <span>  {props.humidity}     </span> </div>
                                <div className="conditions">   Conditions: <span>  {props.describtion}  </span> </div>
                            </div>
        )
}


export default ResultWeather;


