
import React, { Component } from 'react';
import Typewriter from "typewriter-effect"


class TypingEffect extends  Component{


    render(){
        return(
            <div className='welcomeText'>
                Welcome To The City of <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    strings: [
                        "Gamers...",
                        "Developers...",
                        "Nerds...",
                    ],

                }}
                />
            </div>
        )
    }
}


export default TypingEffect;

