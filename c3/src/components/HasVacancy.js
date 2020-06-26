import React from "react";

const HasVacancy = (props) => {
    return (
        props.availability 
        ? 
        <h2>The Grand Budapest Hotel has rooms available.</h2> 
        : 
        <h2>The Grand Budapest Hotel does not have any rooms available.</h2>
    )
}

export default HasVacancy;