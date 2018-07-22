import React, { Component } from 'react';
import api from '../utils/api';
import queryString from 'query-string';

class Forecast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forecastDate : [],
            loading: false,
        }

        this.makeRequest = this.makeRequest.bind(this)
    }

    componentDidMount (){
        const city = queryString.parse(this.props.location.search).city
        this.makeRequest(city)
    }

    componentWillReceiveProps(nextProps) {
        const city = queryString.parse(nextProps.location.search).city
        this.makeRequest(city)
    }

    makeRequest(city) {
        this.setState(function () {
            return {
                loading: true
            }
        })

        api.getCurrentWeather(city)
            .then((res) => {
              console.log(res);
              this.setState({ loading: false });
                
            }).catch((err) => {
                
            });
    }
    render() { 
        return this.state.loading === true
            ? <div>Loading</div>
            : <div>Forecast Componenet</div>
    }
}
 
export default Forecast;