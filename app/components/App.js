import React, { Component } from 'react';
import ZipCode from './ZipCode';

class App extends Component {
    
    render() { 
        return (
            <div class='container'>
                <div>
                    <div className='navbar'>
                        <h1>Weather App</h1>
                        <ZipCode
                        direction='row'
                        onSubmitZipcode={function(){}}
                        zipcode={123}/>
                    </div>
                </div>
                <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1 className='header'>Enter a city and State</h1>
                    <ZipCode 
                        direction='column'
                        onSubmitZipcode={function(){}}
                        zipcode={123}
                    />

                </div>
            </div>
          );
    }
}
 
export default App;