import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ZipCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcode: 75300
        }
    }
    handleSubmitZipCode () {
        
    }
    handleUpdateZideCode () {

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