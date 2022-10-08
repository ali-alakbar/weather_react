import axios from 'axios';
import React, { Component } from 'react';
import CityInput  from "./component/CityInput";
import ResultWeather from "./component/ResultWeather";
import TypingEffect from './component/TypingEffect';
import video from './crypto.mp4';



class App extends Component{

    constructor(){
        super();
        this.state = {
            location : "",
            temp : "",
            humidity : "",
            describtion : "",
        }
        this.getWeather = this.getWeather.bind(this)
    }

    getWeather(e){
        e.preventDefault()
        const city = e.target.elements.city.value

        if (city.trim().length !==0 ) {
            axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e36ed364400282e43250b6c4c0274d44`)
            .then(
                res => 
                this.setState({
                    location :     res.data.name +", "+ res.data.sys.country ,
                    temp :         res.data.main.temp + " °C",
                    humidity :     res.data.main.humidity + "%",
                    describtion :  (res.data.weather[0].description).toUpperCase(),
                })
                
                
            )
        }else{
            alert("Nope")
        }
    }



    render(){
                    
        return(
            <main>
                <TypingEffect/>
                <div className="videoContainer">
                    <video  autoplay="" loop="True" muted="" id='myVideo' src={video}></video>
                </div>
                <div className='container'>
                    {alert("Disable the protection of the website to get the weather data!")}
                    <CityInput getWeather = { this.getWeather } />
                
                    <ResultWeather 
                    location     = {this.state.location} 
                    describtion  = {this.state.describtion} 
                    temp         = {this.state.temp} 
                    humidity     = {this.state.humidity} 
                    />
                </div>
            </main>

        )
    }
}

export default App
