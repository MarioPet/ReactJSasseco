import React, { Fragment } from "react";
import Hello from "./Hello";
import User from "./User"; 

const App = () => {
    return (
        <Fragment>
            <Hello name="Mario"  />
            <Hello name="Marija" />
            <Hello name="Martina" />

            <User
                occupation="Software Engieneer"
                eMail="mario5etkovski@gmail.com"
            />
        </Fragment>
    )
}

export default App;