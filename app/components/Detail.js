import React, { Component } from 'react';
import DayItem from './DayItem';
const convertTemp = require('../utils/helpers').convertTemp

class Detail extends Component {
    render() { 
        console.log(this.props);
        var props = this.props.location.state
        return ( 
            <div>
                <DayItem day={props} />
                <div className='description-container'>
                    <p>{props.city}</p>
                    <p>{props.weather[0].description}</p>
                    <p>min temp: {convertTemp(props.temp.min)} degrees</p>
                    <p>max temp: {convertTemp(props.temp.max)} degrees</p>
                    <p>humidity: {props.humidity}</p>
                </div>
            </div>
         );
    }
}
 
export default Detail;