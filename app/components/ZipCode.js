import React, { Component} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

class ZipCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcode: ''
        }

        this.handleSubmitZipCode = this.handleSubmitZipCode.bind(this)
        this.handleUpdateZipCode = this.handleUpdateZipCode.bind(this)
    }
    handleSubmitZipCode () {
        api.getCurrentWeather(this.state.zipcode)
            .then((res) => {
               console.log(res);
                
            }).catch((err) => {
                console.log(err);
            });
    }
    handleUpdateZipCode (e) {
        var zip = e.target.value;
        this.setState(function () {
            return {
                zipcode: zip
            }
        })
    }
    render() { 
        return (
            <div
               className='zipcode-container' 
               style={{flexDirection: this.props.direction}}>
               <input
               className='form-control'
               onChange={this.handleUpdateZipCode}
               placeholder='Karachi, Sindh'
               type='text'
               value={this.state.zipcode} />
               <button
               type='button'
               style={{margin: 10}}
               className='btn btn-success'
               onClick={this.handleSubmitZipCode}>
                Get Weather
               </button>
            </div>
          );
    }
}
ZipCode.defaultProps = {
    direction: 'column'
}
ZipCode.propTypes = {
    direction: PropTypes.string,
}
 
export default ZipCode;