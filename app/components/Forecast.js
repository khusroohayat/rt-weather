import React, { Component } from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import utils from '../utils/helpers';
const getDate = utils.getDate
const convertTemp = utils.convertTemp
import DayItem from './DayItem';

// function DayItem (props) {
//     var date = getDate(props.day.dt)
//     var icon = props.day.weather[0].icon
//     return (
//         <div onClick={props.onClick} className='dayContainer'>
//             <img className='weather' src={'../../app/images/weather-icons/' + icon + '.svg'} alt='weather' />
//             <h2 className='subheader'>{date}</h2>
//         </div>
//     )
// }

class Forecast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forecastData : [],
            loading: true,
        }

        this.makeRequest = this.makeRequest.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount (){
        this.city = queryString.parse(this.props.location.search).city
        this.makeRequest(this.city)
    }

    componentWillReceiveProps(nextProps) {
        this.city = queryString.parse(nextProps.location.search).city
        this.makeRequest(city)
    }

    makeRequest(city) {
        this.setState(function () {
            return {
                loading: true
            }
        })

        api.getForecast(city)
            .then((res) => {
              console.log(res);
              this.setState({ 
                  loading: false,
                  forecastData: res,
                 });
                
            }).catch((err) => {
                
            });
    }
    handleClick(city) {
        city.city = this.city;
        this.props.history.push({
            pathname: '/details/' + this.city,
            state: city,
        })
    }
    render() { 
        return this.state.loading === true
            ? <h1 className='forecast-header'> Loading </h1>
            : <div>
                <h1 className='forecast-header'>{this.city}</h1>
                <div className='forecast-container'>
                    {this.state.forecastData.list.map(function (listItem) {
                        return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
                    }, this)}
                </div>
            </div>
    }
}
 
export default Forecast;