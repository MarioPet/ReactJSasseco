import React from "react";
import Quantity from "./Quantity";
import User from "./User";
import Movies from "./Movies";

const App = () => {
  return (
    <div id="app">
        <Quantity />
        <hr/>
        <User />
        <br/>
        <hr/> <br/>
        <Movies />
    </div>
  )
}

export default App;