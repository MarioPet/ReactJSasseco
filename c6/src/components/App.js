import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Fetch from "./Fetch";
import PointA from "./PointA";
import PointC from "./PointC";
import PointE from "./PointE";
import User from "./User";
import WeatherForecast from "./WeatherForecast"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PointA} />
        <Route path="/point-b" component={Fetch} />
        <Route path="/point-c" component={PointC} />
        <Route path="/user" component={User} />
        <Route path="/point-e" component={PointE} />
        <Route path="/forecast" component={WeatherForecast} />
      </Switch>
    </div>
  );
}

export default App;
