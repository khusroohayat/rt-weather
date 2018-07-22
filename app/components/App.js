import React, { Component } from "react";
import ZipCode from "./ZipCode";
import Forecast from "./Forecast";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="container">
        <Route
            render={function(props) {
              return (
                <div className="navbar">
                  <h1>Weather App</h1>
                  <ZipCode
                    direction="row"
                    onSubmitZipcode={function(city) {
                      props.history.push({
                        pathname: "forecast",
                        search: "?city=" + city
                      });
                    }}
                    zipcode={123}
                  />
                </div>
              );
            }}
          />

          <Route
            exact
            path="/"
            render={function(props) {
              return (
                <div
                  className="home-container"
                  style={{ backgroundImage: "url('app/images/pattern.svg')" }}
                >
                  <h1 className="header">Enter a city and State</h1>
                  <ZipCode
                    direction="column"
                    onSubmitZipcode={function(city) {
                      props.history.push({
                        pathname: "forecast",
                        search: "?city=" + city
                      });
                    }}
                    zipcode={123}
                  />
                </div>
              );
            }}
          />

          <Route path="/forecast" Component={Forecast} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
