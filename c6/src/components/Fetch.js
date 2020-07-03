import React, {useState} from "react";
import Lifecycle from "./Lifecycle";
import FetchWithClass from "./FetchWithClass";
import FetchWithHooks from "./FetchWithHooks";

const Fetch = () => {

    const [status, setStatus] = useState(false);
    
    return (
        <div id="fetch-stuff">
            <button onClick={() => setStatus(prevState => !prevState)}>Mount Lifecycle component</button>
            {status ? <Lifecycle /> : null}
            <FetchWithClass />
            <hr />
            <FetchWithHooks />
        </div>
    )
}

export default Fetch;