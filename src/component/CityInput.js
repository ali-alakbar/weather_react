import React from 'react';

const CityInput = (props)=>{


        return(
                <form onSubmit={props.getWeather} >
                    <input className='input input-city' name='city' type="text" placeholder='City...' />
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
        )

}


export default CityInput

