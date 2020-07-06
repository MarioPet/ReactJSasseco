import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Fetch from "./Fetch";
import PointA from "./PointA";
import PointC from "./PointC";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PointA} />
        <Route path="/point-b" component={Fetch} />
        <Route path="/point-c" component={PointC} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
