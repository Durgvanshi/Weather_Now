import React from "react";
import Spinner from "./Spinner";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  if (props.dataObject.err === 1) {
    return (
      <div class="ui negative message">
        <i class="close icon"></i>
        <div class="header">We're sorry</div>
        <p>Please enter a valid location</p>
      </div>
    );
  } else {
    return (
      <div className="status">
        <div className="ui four statistics orange inverted">
          <div className="statistic ">
            <div className="text value">
              Temperature
              <br />
              <br />
              {props.dataObject.tempe} &#8451;
            </div>
            <div className="label"></div>
          </div>
          <div className="statistic">
            <div className="text value">
              Humidity
              <br />
              <br />
              {props.dataObject.humid}%
            </div>
            <div className="label"></div>
          </div>
          <div className="statistic">
            <div className="text value">
              Weather
              <br />
              <br />
              {props.dataObject.weath}
            </div>
            <div className="label"></div>
          </div>
          <div className="statistic">
            <div className="text value">
              Wind-Speed
              <br />
              <br />
              {props.dataObject.windspd} &nbsp; m/s
            </div>
            <div className="label"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
