import React, { Component } from 'react';
import ZipCode from './ZipCode';

class App extends Component {
    
    render() { 
        return (
            <div class='container'>
                <div>
                    <h1>Main Header</h1>
                </div>
                <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1 className='header'>Enter a city and State</h1>
                    <ZipCode 
                        direction='column'
                        onSubmitZipcode={function(){}}
                        onUpdateZipcode={function(){}}
                        zipcode={123}
                    />

                </div>
            </div>
          );
    }
}
 
export default App;