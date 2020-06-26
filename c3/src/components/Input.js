import React from "react";

const Input = (props) => {
    return <input onChange={props.onInputChange} type="text" placeholder="Enter your name..." />
}

export default Input;