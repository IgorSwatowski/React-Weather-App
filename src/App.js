import React from 'react';
import axios from 'axios';

//Components ========================
import Title from './components/Title';
import Inputs from "./components/Inputs";
import WeatherContent from "./components/WeatherContent";

//API KEY ===========================
const API_KEY = "839c1e43e188f53b39753c35e9f9ce7f";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      .then((response) => {
        this.setState({
          temperature: response.data.main.temp,
          city: response.data.name,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          error: ""
        })
    })
    .catch((response) => {
      this.setState({
        error: "Enter a country and city. Try again"
      });
    });
  }
  render() {
    return (
      <div>
        <div className="top-container-text">
          <Title />
        </div>
        <div className="inputs-content-app">
          <Inputs getWeather={this.getWeather} />
        </div>
        <div className="content-weather-app">
          <WeatherContent
            city={this.state.city}
            country={this.state.country}
            temperature = {this.state.temperature}
            humidity = {this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
};

export default App;