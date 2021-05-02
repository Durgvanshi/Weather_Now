import React from "react";
import axios from "axios";
import "./MainDisplay.css";
import Spinner from "./Spinner";
import CurrentWeather from "./CurrentWeather";
const API_key = "5c5f69d231996ea58b90aadaea8d5dc0";
class SearchBar extends React.Component {
  state = {
    term: "",
    tempe: "-",
    humid: "--",
    weath: "--",
    windspd: "--",
    loader: 0,
    err: null,
  };

  onFormSubmit = async (et) => {
    et.preventDefault();
    // setInterval(()=>{
    //   this.setState({loader:1})
    // },1000);
    this.setState({
      tempe: "Loading...",
      humid: "Loading..",
      weath: "Loading..",
      windspd: "Loading..",
      err: null,
    });
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.term}&appid=${API_key}`
    );
    const call = await response.json();
    console.log(call);
    if (call.cod == "400" || call.cod == "404") {
      this.setState({
        err: 1,
      });
    } else {
      this.setState({
        tempe: parseFloat(call.main.temp - 273).toFixed(1),
        humid: call.main.humidity,
        weath: call.weather[0].main,
        windspd: call.wind.speed,
        err: null,
      });
    }
  };
  render() {
    return (
      <div className="contact-background-image">
        <div className="container fluid">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="ui fluid action input large">
              <input
                type="text"
                placeholder="Enter the location"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />

              <button className="ui animated button teal" tabindex="0">
                <div className="visible content">GO!</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </button>
            </div>
          </form>
          <CurrentWeather dataObject={this.state} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
